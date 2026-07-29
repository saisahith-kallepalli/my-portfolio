'use client';

import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Skill } from '@/lib/types';
import { useTheme } from 'next-themes';

interface SkillGlobeCanvasProps {
  skills: Skill[];
  selectedSkillId: string;
  onSelectSkill: (skillId: string) => void;
}

// Spherical coordinate math helper to distribute skills around the globe
function getSphericalPosition(index: number, total: number, radius: number): [number, number, number] {
  const phi = Math.acos(-1 + (2 * index) / total);
  const theta = Math.sqrt(total * Math.PI) * phi;
  return [
    radius * Math.cos(theta) * Math.sin(phi),
    radius * Math.sin(theta) * Math.sin(phi),
    radius * Math.cos(phi),
  ];
}

interface OrbitingSkillNodeProps {
  skill: Skill;
  index: number;
  total: number;
  isSelected: boolean;
  onSelect: () => void;
}

function OrbitingSkillNode({ skill, index, total, isSelected, onSelect }: OrbitingSkillNodeProps) {
  const groupRef = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);

  // Scaled base radius by 30% (from 2.7 to 3.5)
  const basePosition = useMemo(() => getSphericalPosition(index, total, 3.5), [index, total]);

  // Orbit animation using useFrame
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime() * 0.22 + index * 0.8;
    const yOffset = Math.sin(t) * 0.2;
    groupRef.current.position.y = basePosition[1] + yOffset;
  });

  return (
    <group ref={groupRef} position={basePosition}>
      {/* Small 3D anchor sphere - Monochrome unless highlighted */}
      <mesh onClick={onSelect} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial
          color={isSelected ? '#ffffff' : hovered ? '#e0e0e0' : '#606575'}
          wireframe={false}
        />
      </mesh>

      {/* HTML 3D Interactive Badge (100% Black & White Monochrome - Dark/Light aware) */}
      <Html
        center
        distanceFactor={8.5}
        zIndexRange={[100, 0]}
        style={{
          pointerEvents: 'auto',
          userSelect: 'none',
          transition: 'all 0.25s ease',
        }}
      >
        <button
          onClick={onSelect}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            cursor: 'pointer',
            padding: isSelected ? '0.65rem 1.3rem' : '0.55rem 1.1rem',
            borderRadius: '999px',
            border: isSelected
              ? '2px solid var(--color-text-primary)'
              : hovered
              ? '1.5px solid var(--color-text-primary)'
              : '1px solid var(--color-border)',
            background: isSelected
              ? 'var(--color-text-primary)'
              : hovered
              ? 'var(--color-bg-card-hover)'
              : 'var(--color-bg-card)',
            color: isSelected ? 'var(--color-bg-primary)' : 'var(--color-text-primary)',
            fontWeight: isSelected || hovered ? 800 : 600,
            fontSize: isSelected ? '1.05rem' : hovered ? '1rem' : '0.9rem',
            whiteSpace: 'nowrap',
            boxShadow: isSelected
              ? '0 0 30px rgba(128, 128, 128, 0.4)'
              : hovered
              ? '0 0 18px rgba(128, 128, 128, 0.2)'
              : '0 6px 18px rgba(0, 0, 0, 0.15)',
            transform: isSelected ? 'scale(1.15)' : hovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backdropFilter: 'blur(10px)',
          }}
        >
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: isSelected ? 'var(--color-bg-primary)' : hovered ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
              display: 'inline-block',
            }}
          />
          <span>{skill.name}</span>
        </button>
      </Html>
    </group>
  );
}

function RotatingGlobeScene({ skills, selectedSkillId, onSelectSkill }: SkillGlobeCanvasProps) {
  const globeRef = useRef<THREE.Group>(null!);
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === 'light';

  // Smoothly rotate the whole globe assembly
  useFrame((state, delta) => {
    if (!globeRef.current) return;
    globeRef.current.rotation.y += delta * 0.2;
    globeRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.15;
  });

  return (
    <group ref={globeRef}>
      {/* Sleek Obsidian Glass Globe (Monochrome) */}
      <Sphere args={[2.75, 48, 48]}>
        <meshPhysicalMaterial
          color={isLight ? '#ffffff' : '#101216'}
          emissive={isLight ? '#202020' : '#ffffff'}
          emissiveIntensity={isLight ? 0.08 : 0.06}
          roughness={0.25}
          metalness={isLight ? 0.1 : 0.9}
          transparent
          opacity={isLight ? 0.85 : 0.78}
          wireframe={false}
        />
      </Sphere>

      {/* Silver/White Outer Wireframe Overlay Sphere */}
      <Sphere args={[2.8, 24, 24]}>
        <meshBasicMaterial color={isLight ? '#0a0b0d' : '#ffffff'} wireframe transparent opacity={0.12} />
      </Sphere>

      {/* Silver/White Inner Core Sphere */}
      <Sphere args={[1.7, 32, 32]}>
        <meshBasicMaterial color={isLight ? '#0a0b0d' : '#ffffff'} wireframe transparent opacity={0.08} />
      </Sphere>

      {/* Orbiting Skill Nodes */}
      {skills.map((skill, index) => (
        <OrbitingSkillNode
          key={skill.id}
          skill={skill}
          index={index}
          total={skills.length}
          isSelected={selectedSkillId === skill.id}
          onSelect={() => onSelectSkill(skill.id)}
        />
      ))}
    </group>
  );
}

export default function SkillGlobeCanvas({
  skills,
  selectedSkillId,
  onSelectSkill,
}: SkillGlobeCanvasProps) {
  return (
    <div
      style={{
        width: '100%',
        height: '680px',
        position: 'relative',
        background: 'transparent',
        border: 'none',
        boxShadow: 'none',
        overflow: 'visible',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 46 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 10, 5]} intensity={1.6} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1.4} color="#e0e0e0" />

        <RotatingGlobeScene
          skills={skills}
          selectedSkillId={selectedSkillId}
          onSelectSkill={onSelectSkill}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.65}
          autoRotate={true}
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}
