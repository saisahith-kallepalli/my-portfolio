'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

interface InteractiveShapeProps {
  mouse: React.MutableRefObject<[number, number]>;
}

function InteractiveGeometry({ mouse }: InteractiveShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const wireRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    // Rotate base geometry
    meshRef.current.rotation.x += delta * 0.25;
    meshRef.current.rotation.y += delta * 0.35;

    // Subtle tilt toward mouse coordinates
    const targetX = mouse.current[1] * 0.4;
    const targetY = mouse.current[0] * 0.4;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetX,
      0.05
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetY,
      0.05
    );

    if (wireRef.current) {
      wireRef.current.rotation.x = meshRef.current.rotation.x * 1.1;
      wireRef.current.rotation.y = meshRef.current.rotation.y * 1.1;
    }
  });

  return (
    <group>
      {/* Main Glass/Distort Sphere representing 3D Subdivision Surface */}
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
        <Sphere ref={meshRef} args={[1.8, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#00f2fe"
            emissive="#7f00ff"
            emissiveIntensity={0.35}
            roughness={0.15}
            metalness={0.8}
            distort={0.4}
            speed={2.2}
            transparent
            opacity={0.85}
          />
        </Sphere>
      </Float>

      {/* Wireframe subdivision cage overlay */}
      <Sphere ref={wireRef} args={[2.05, 18, 18]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.15} />
      </Sphere>
    </group>
  );
}

export default function HeroCanvas() {
  const [isMounted, setIsMounted] = useState(false);
  const mouseRef = useRef<[number, number]>([0, 0]);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current = [x, y];
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isMounted) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, rgba(0,242,254,0.15) 0%, rgba(11,12,16,0) 70%)',
          borderRadius: '50%',
        }}
      />
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.8} color="#00f2fe" />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color="#7f00ff" />

        <InteractiveGeometry mouse={mouseRef} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
