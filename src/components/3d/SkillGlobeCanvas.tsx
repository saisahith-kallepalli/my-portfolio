'use client';

import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Skill } from '@/lib/types';

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

  // 30% larger orbital radius (4.2 instead of 3.2)
  const basePosition = useMemo(() => getSphericalPosition(index, total, 4.2), [index, total]);

  // Animate node floating slightly around its orbit
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime() + index * 1.5;
    groupRef.current.position.x = basePosition[0] + Math.sin(t * 0.5) * 0.18;
    groupRef.current.position.y = basePosition[1] + Math.cos(t * 0.6) * 0.18;
    groupRef.current.position.z = basePosition[2] + Math.sin(t * 0.4) * 0.18;
  });

  return (
    <group ref={groupRef} position={basePosition}>
      {/* Small glowing 3D anchor sphere */}
      <mesh onClick={onSelect} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial
          color={isSelected ? '#00f2fe' : hovered ? '#7f00ff' : '#4facfe'}
          wireframe={false}
        />
      </mesh>

      {/* HTML 3D Interactive Badge (30% larger typography and padding) */}
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
              ? '2px solid #00f2fe'
              : hovered
              ? '1.5px solid #7f00ff'
              : '1px solid rgba(255,255,255,0.2)',
            background: isSelected
              ? 'linear-gradient(135deg, rgba(0, 242, 254, 0.9) 0%, rgba(127, 0, 255, 0.9) 100%)'
              : hovered
              ? 'rgba(22, 25, 38, 0.95)'
              : 'rgba(11, 12, 16, 0.85)',
            color: isSelected ? '#0b0c10' : '#ffffff',
            fontWeight: isSelected || hovered ? 800 : 600,
            fontSize: isSelected ? '1.05rem' : hovered ? '1rem' : '0.9rem',
            whiteSpace: 'nowrap',
            boxShadow: isSelected
              ? '0 0 30px rgba(0, 242, 254, 0.8)'
              : hovered
              ? '0 0 20px rgba(127, 0, 255, 0.6)'
              : '0 6px 18px rgba(0,0,0,0.5)',
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
              backgroundColor: isSelected ? '#0b0c10' : '#00f2fe',
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

  // Smoothly rotate the whole globe assembly
  useFrame((state, delta) => {
    if (!globeRef.current) return;
    globeRef.current.rotation.y += delta * 0.2;
    globeRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.15;
  });

  return (
    <group ref={globeRef}>
      {/* 30% larger Central Translucent Glass Globe (2.75 radius) */}
      <Sphere args={[2.75, 48, 48]}>
        <meshPhysicalMaterial
          color="#12141d"
          emissive="#00f2fe"
          emissiveIntensity={0.14}
          roughness={0.25}
          metalness={0.8}
          transparent
          opacity={0.78}
          wireframe={false}
        />
      </Sphere>

      {/* 30% larger Neon Cyber Wireframe Overlay Sphere (2.8 radius) */}
      <Sphere args={[2.8, 24, 24]}>
        <meshBasicMaterial color="#00f2fe" wireframe transparent opacity={0.16} />
      </Sphere>

      {/* 30% larger Inner Violet Glowing Core Sphere (1.7 radius) */}
      <Sphere args={[1.7, 32, 32]}>
        <meshBasicMaterial color="#7f00ff" wireframe transparent opacity={0.22} />
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
        <ambientLight intensity={0.85} />
        <directionalLight position={[10, 10, 5]} intensity={1.6} color="#00f2fe" />
        <pointLight position={[-10, -10, -5]} intensity={1.6} color="#7f00ff" />

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
