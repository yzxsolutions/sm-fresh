'use client';

import React, { useRef, useState, useCallback } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface Interactive3DModelProps {
  position: [number, number, number];
  color: string;
  shape: 'sphere' | 'box' | 'cylinder';
  scale?: number;
  rotationSpeed?: number;
  enableHover?: boolean;
  enableClick?: boolean;
  onHover?: (hovered: boolean) => void;
  onClick?: () => void;
}

const Interactive3DModel: React.FC<Interactive3DModelProps> = ({
  position,
  color,
  shape,
  scale = 1,
  rotationSpeed = 1,
  enableHover = true,
  enableClick = true,
  onHover,
  onClick,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { viewport } = useThree();

  // Mouse interaction handlers
  const handlePointerOver = useCallback((event: any) => {
    event.stopPropagation?.();
    if (enableHover) {
      setHovered(true);
      onHover?.(true);
      document.body.style.cursor = 'pointer';
    }
  }, [enableHover, onHover]);

  const handlePointerOut = useCallback((event: any) => {
    event.stopPropagation?.();
    if (enableHover) {
      setHovered(false);
      onHover?.(false);
      document.body.style.cursor = 'auto';
    }
  }, [enableHover, onHover]);

  const handleClick = useCallback((event: any) => {
    event.stopPropagation?.();
    if (enableClick) {
      setClicked(true);
      onClick?.();
      // Reset click state after animation
      setTimeout(() => setClicked(false), 200);
    }
  }, [enableClick, onClick]);

  // Animation frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.x += delta * rotationSpeed * 0.5;
      meshRef.current.rotation.y += delta * rotationSpeed;
      
      // Floating motion
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
      
      // Hover effects
      if (hovered) {
        meshRef.current.rotation.y += delta * 2; // Faster rotation on hover
        meshRef.current.scale.setScalar(scale * 1.2); // Scale up on hover
      } else {
        meshRef.current.scale.setScalar(scale);
      }
      
      // Click effect
      if (clicked) {
        meshRef.current.scale.setScalar(scale * 0.9); // Scale down on click
      }
    }
  });

  // Geometry based on shape
  const geometry = React.useMemo(() => {
    switch (shape) {
      case 'sphere':
        return <sphereGeometry args={[0.5, 32, 32]} />;
      case 'box':
        return <boxGeometry args={[0.8, 0.8, 0.8]} />;
      case 'cylinder':
        return <cylinderGeometry args={[0.3, 0.5, 1, 32]} />;
      default:
        return <sphereGeometry args={[0.5, 32, 32]} />;
    }
  }, [shape]);

  // Dynamic material properties
  const materialProps = React.useMemo(() => ({
    color: hovered ? new THREE.Color(color).multiplyScalar(1.5) : color,
    roughness: hovered ? 0.1 : 0.3,
    metalness: hovered ? 0.3 : 0.1,
    emissive: color,
    emissiveIntensity: hovered ? 0.3 : 0.1,
  }), [color, hovered]);

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        {geometry}
        <meshStandardMaterial {...materialProps} />
      </mesh>
    </Float>
  );
};

export default Interactive3DModel;