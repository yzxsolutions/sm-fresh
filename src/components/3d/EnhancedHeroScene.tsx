'use client';

import React, { useRef, useMemo, useState, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';
import { getPerformanceSettings } from '@/utils/webgl';
import Interactive3DModel from './Interactive3DModel';
import PerformanceMonitor from './PerformanceMonitor';

// Enhanced particle system with mouse interaction
const InteractiveParticleField: React.FC<{ mousePosition: THREE.Vector2 }> = ({ mousePosition }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const originalPositions = useRef<Float32Array | null>(null);

  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < 50; i++) {
      pos.push(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      );
    }
    const posArray = new Float32Array(pos);
    originalPositions.current = posArray.slice(); // Store original positions
    return posArray;
  }, []);

  useFrame((state) => {
    if (pointsRef.current && originalPositions.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      
      // Mouse interaction effect
      const geometry = pointsRef.current.geometry;
      const positionAttribute = geometry.attributes.position;
      
      for (let i = 0; i < positionAttribute.count; i++) {
        const x = originalPositions.current[i * 3];
        const y = originalPositions.current[i * 3 + 1];
        const z = originalPositions.current[i * 3 + 2];
        
        // Calculate distance from mouse (projected to 3D space)
        const mouseX = (mousePosition.x - 0.5) * 10;
        const mouseY = -(mousePosition.y - 0.5) * 10;
        const distance = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
        
        // Apply mouse repulsion effect
        if (distance < 3) {
          const force = (3 - distance) * 0.5;
          const angle = Math.atan2(y - mouseY, x - mouseX);
          positionAttribute.setX(i, x + Math.cos(angle) * force);
          positionAttribute.setY(i, y + Math.sin(angle) * force);
        } else {
          // Return to original position
          positionAttribute.setX(i, THREE.MathUtils.lerp(positionAttribute.getX(i), x, 0.02));
          positionAttribute.setY(i, THREE.MathUtils.lerp(positionAttribute.getY(i), y, 0.02));
        }
        positionAttribute.setZ(i, z);
      }
      
      positionAttribute.needsUpdate = true;
    }
  });

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

// Main enhanced 3D scene component
const EnhancedScene3D: React.FC<{ mousePosition: THREE.Vector2; performance: 'high' | 'medium' | 'low' }> = ({ 
  mousePosition, 
  performance 
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredModel, setHoveredModel] = useState<string | null>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      
      // Mouse interaction with the entire scene
      const mouseInfluence = 0.1;
      groupRef.current.rotation.x = (mousePosition.y - 0.5) * mouseInfluence;
      groupRef.current.rotation.y += (mousePosition.x - 0.5) * mouseInfluence;
    }
  });

  const handleModelHover = useCallback((modelId: string, hovered: boolean) => {
    setHoveredModel(hovered ? modelId : null);
  }, []);

  const handleModelClick = useCallback((modelId: string) => {
    console.log(`Clicked on model: ${modelId}`);
    // Add click feedback or actions here
  }, []);

  // Adjust model count based on performance
  const modelCount = performance === 'high' ? 6 : performance === 'medium' ? 4 : 2;

  const models = useMemo(() => {
    const modelData = [
      { id: 'apple', position: [-2, 1, 0] as [number, number, number], color: '#ef4444', shape: 'sphere' as const, scale: 1.2, rotationSpeed: 0.8 },
      { id: 'orange', position: [2, -0.5, -1] as [number, number, number], color: '#f97316', shape: 'sphere' as const, scale: 0.9, rotationSpeed: 1.2 },
      { id: 'banana', position: [0, 0.5, 1] as [number, number, number], color: '#eab308', shape: 'cylinder' as const, scale: 1.1, rotationSpeed: 0.6 },
      { id: 'lettuce', position: [-1.5, -1, 1.5] as [number, number, number], color: '#22c55e', shape: 'box' as const, scale: 0.8, rotationSpeed: 1.0 },
      { id: 'eggplant', position: [1.8, 1.2, -0.5] as [number, number, number], color: '#8b5cf6', shape: 'sphere' as const, scale: 0.7, rotationSpeed: 1.4 },
      { id: 'blueberry', position: [0.5, -1.5, 0] as [number, number, number], color: '#06b6d4', shape: 'cylinder' as const, scale: 1.0, rotationSpeed: 0.9 },
    ];

    return modelData.slice(0, modelCount).map((model) => (
      <Interactive3DModel
        key={model.id}
        position={model.position}
        color={model.color}
        shape={model.shape}
        scale={model.scale}
        rotationSpeed={model.rotationSpeed}
        onHover={(hovered) => handleModelHover(model.id, hovered)}
        onClick={() => handleModelClick(model.id)}
      />
    ));
  }, [modelCount, handleModelHover, handleModelClick]);

  return (
    <group ref={groupRef}>
      {/* Interactive particles */}
      {performance !== 'low' && <InteractiveParticleField mousePosition={mousePosition} />}
      
      {/* Interactive 3D models */}
      {models}

      {/* Dynamic lighting based on hovered model */}
      <ambientLight intensity={hoveredModel ? 0.6 : 0.4} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={hoveredModel ? 1.5 : 1} 
        castShadow={performance === 'high'}
        shadow-mapSize-width={performance === 'high' ? 2048 : 1024}
        shadow-mapSize-height={performance === 'high' ? 2048 : 1024}
      />
      <pointLight 
        position={[-10, -10, -5]} 
        intensity={hoveredModel ? 0.8 : 0.5} 
        color="#10b981" 
      />
      {performance === 'high' && (
        <spotLight 
          position={[0, 10, 0]} 
          intensity={0.3} 
          angle={0.3} 
          penumbra={1} 
          color="#ffffff"
        />
      )}
    </group>
  );
};

// Enhanced hero scene component with mouse tracking
interface EnhancedHeroSceneProps {
  className?: string;
  height?: string;
  enableControls?: boolean;
}

const EnhancedHeroScene: React.FC<EnhancedHeroSceneProps> = ({ 
  className = '', 
  height = 'h-96',
  enableControls = false 
}) => {
  const performanceSettings = getPerformanceSettings();
  const [mousePosition, setMousePosition] = useState(new THREE.Vector2(0.5, 0.5));
  const [performance, setPerformance] = useState<'high' | 'medium' | 'low'>('high');

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    setMousePosition(new THREE.Vector2(x, y));
  }, []);

  const handlePerformanceChange = useCallback((newPerformance: 'high' | 'medium' | 'low') => {
    setPerformance(newPerformance);
    console.log(`Performance adjusted to: ${newPerformance}`);
  }, []);

  return (
    <div 
      className={`${height} ${className} relative overflow-hidden rounded-xl cursor-none`}
      onMouseMove={handleMouseMove}
    >
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
          if (performance !== 'low') {
            scene.fog = new THREE.Fog(0x000000, 10, 50); // Add depth
          }
        }}
      >
        <PerformanceMonitor onPerformanceChange={handlePerformanceChange}>
          <EnhancedScene3D mousePosition={mousePosition} performance={performance} />
        </PerformanceMonitor>
        
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
      
      {/* Performance indicator */}
      <div className="absolute top-4 right-4 text-xs text-white/70 bg-black/20 px-2 py-1 rounded">
        Quality: {performance}
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default EnhancedHeroScene;