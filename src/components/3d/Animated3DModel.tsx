'use client';

import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

interface Animated3DModelProps {
  modelPath: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  autoRotate?: boolean;
  enableControls?: boolean;
  className?: string;
}

// WebGL detection utility
const detectWebGL = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!(gl && gl instanceof WebGLRenderingContext);
  } catch {
    return false;
  }
};

// Loading component
const LoadingSpinner: React.FC = () => (
  <Html center>
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      <span className="ml-2 text-green-600">Loading 3D model...</span>
    </div>
  </Html>
);

// Error fallback component
const ErrorFallback: React.FC<{ error: string }> = ({ error }) => (
  <Html center>
    <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
      <div className="text-red-600 font-medium">3D Model Error</div>
      <div className="text-red-500 text-sm mt-1">{error}</div>
    </div>
  </Html>
);

// Model component that handles the actual 3D model
const Model: React.FC<{
  modelPath: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  autoRotate: boolean;
}> = ({ modelPath, position, rotation, scale, autoRotate }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [error, setError] = useState<string | null>(null);

  // Load the GLTF model
  const gltf = useLoader(GLTFLoader, modelPath, undefined, (error) => {
    setError(`Failed to load model: ${error instanceof Error ? error.message : 'Unknown error'}`);
  });

  // Auto-rotation animation
  useFrame((state, delta) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  if (error) {
    return <ErrorFallback error={error} />;
  }

  return (
    <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <primitive object={gltf.scene} />
    </group>
  );
};

// WebGL fallback component
const WebGLFallback: React.FC = () => (
  <div className="flex items-center justify-center h-full bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
    <div className="text-center p-8">
      <div className="text-6xl mb-4">🥬</div>
      <h3 className="text-lg font-semibold text-green-800 mb-2">
        3D Experience Unavailable
      </h3>
      <p className="text-green-600 text-sm">
        Your browser doesn&apos;t support WebGL or 3D graphics.
        <br />
        Please try a modern browser for the full experience.
      </p>
    </div>
  </div>
);

// Error boundary for 3D content
class ThreeErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ComponentType<{ error: string }> },
  { hasError: boolean; error: string }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ComponentType<{ error: string }> }) {
    super(props);
    this.state = { hasError: false, error: '' };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error.message };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('3D Model Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback;
      return <FallbackComponent error={this.state.error} />;
    }

    return this.props.children;
  }
}

// Main Animated3DModel component
const Animated3DModel: React.FC<Animated3DModelProps> = ({
  modelPath,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  autoRotate = false,
  enableControls = true,
  className = '',
}) => {
  const [webGLSupported, setWebGLSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setWebGLSupported(detectWebGL());
  }, []);

  // Show loading state while checking WebGL support
  if (webGLSupported === null) {
    return (
      <div className={`flex items-center justify-center h-64 ${className}`}>
        <div className="animate-pulse text-green-600">Initializing 3D...</div>
      </div>
    );
  }

  // Show fallback if WebGL is not supported
  if (!webGLSupported) {
    return (
      <div className={`h-64 ${className}`}>
        <WebGLFallback />
      </div>
    );
  }

  return (
    <div className={`h-64 ${className}`}>
      <ThreeErrorBoundary fallback={ErrorFallback}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: 'high-performance'
          }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0); // Transparent background
          }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          
          <Suspense fallback={<LoadingSpinner />}>
            <Model
              modelPath={modelPath}
              position={position}
              rotation={rotation}
              scale={scale}
              autoRotate={autoRotate}
            />
          </Suspense>
          
          {enableControls && (
            <OrbitControls
              enableZoom={true}
              enablePan={false}
              enableRotate={true}
              autoRotate={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 4}
            />
          )}
        </Canvas>
      </ThreeErrorBoundary>
    </div>
  );
};

export default Animated3DModel;