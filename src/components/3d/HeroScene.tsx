'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';
import { getPerformanceSettings } from '@/utils/webgl';

// Animated fruit/vegetable shapes
const AnimatedFruit: React.FC<{
  position: [number, number, number];
  color: string;
  shape: 'sphere' | 'box' | 'cylinder';
  scale?: number;
  rotationSpeed?: number;
}> = ({ position, color, shape, scale = 1, rotationSpeed = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed * 0.5;
      meshRef.current.rotation.y += delta * rotationSpeed;
      // Add floating motion
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case 'sphere':
        return <sphereGeometry args={[0.5 * scale, 32, 32]} />;
      case 'box':
        return <boxGeometry args={[0.8 * scale, 0.8 * scale, 0.8 * scale]} />;
      case 'cylinder':
        return <cylinderGeometry args={[0.3 * scale, 0.5 * scale, 1 * scale, 32]} />;
      default:
        return <sphereGeometry args={[0.5 * scale, 32, 32]} />;
    }
  }, [shape, scale]);

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        {geometry}
        <meshStandardMaterial 
          color={color} 
          roughness={0.3} 
          metalness={0.1}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
};

// Simplified particle system for ambient effects
const ParticleField: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  // Create simple particle positions
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < 50; i++) {
      pos.push(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      );
    }
    return new Float32Array(pos);
  }, []);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#10b981" transparent opacity={0.6} />
    </points>
  );
};

// Main 3D scene component
const Scene3D: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Ambient particles */}
      <ParticleField />
      
      {/* Animated fruits and vegetables */}
      <AnimatedFruit 
        position={[-2, 1, 0]} 
        color="#ef4444" 
        shape="sphere" 
        scale={1.2}
        rotationSpeed={0.8}
      />
      <AnimatedFruit 
        position={[2, -0.5, -1]} 
        color="#f97316" 
        shape="sphere" 
        scale={0.9}
        rotationSpeed={1.2}
      />
      <AnimatedFruit 
        position={[0, 0.5, 1]} 
        color="#eab308" 
        shape="cylinder" 
        scale={1.1}
        rotationSpeed={0.6}
      />
      <AnimatedFruit 
        position={[-1.5, -1, 1.5]} 
        color="#22c55e" 
        shape="box" 
        scale={0.8}
        rotationSpeed={1.0}
      />
      <AnimatedFruit 
        position={[1.8, 1.2, -0.5]} 
        color="#8b5cf6" 
        shape="sphere" 
        scale={0.7}
        rotationSpeed={1.4}
      />
      <AnimatedFruit 
        position={[0.5, -1.5, 0]} 
        color="#06b6d4" 
        shape="cylinder" 
        scale={1.0}
        rotationSpeed={0.9}
      />

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#10b981" />
      <spotLight 
        position={[0, 10, 0]} 
        intensity={0.3} 
        angle={0.3} 
        penumbra={1} 
        color="#ffffff"
      />
    </group>
  );
};

// Hero scene component with responsive design
interface HeroSceneProps {
  className?: string;
  height?: string;
  enableControls?: boolean;
}

const HeroScene: React.FC<HeroSceneProps> = ({ 
  className = '', 
  height = 'h-96',
  enableControls = false 
}) => {
  const performanceSettings = getPerformanceSettings();

  return (
    <div className={`${height} ${className} relative overflow-hidden rounded-xl`}>
      <Canvas
        camera={{ 
          position: [0, 0, 8], 
          fov: 50,
          near: 0.1,
          far: 1000
        }}
        gl={{ 
          antialias: performanceSettings.antialias, 
          alpha: true,
          powerPreference: performanceSettings.powerPreference
        }}
        dpr={performanceSettings.pixelRatio}
        shadows={performanceSettings.shadows}
        onCreated={({ gl, scene }) => {
          gl.setClearColor(0x000000, 0); // Transparent background
          scene.fog = new THREE.Fog(0x000000, 10, 50); // Add depth
        }}
      >
        <Scene3D />
        
        {enableControls && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
          />
        )}
      </Canvas>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default HeroScene;