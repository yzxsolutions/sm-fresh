'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Simple rotating cube for testing
const TestCube: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#10b981" />
    </mesh>
  );
};

// Test 3D scene component
const Test3DScene: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`h-64 ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <TestCube />
        
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
        />
      </Canvas>
    </div>
  );
};

export default Test3DScene;