'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

interface PerformanceMonitorProps {
  onPerformanceChange?: (performance: 'high' | 'medium' | 'low') => void;
  targetFPS?: number;
  children: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onPerformanceChange,
  targetFPS = 30,
  children,
}) => {
  const { gl } = useThree();
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());
  const fpsHistory = useRef<number[]>([]);
  const [currentPerformance, setCurrentPerformance] = useState<'high' | 'medium' | 'low'>('high');

  useFrame(() => {
    frameCount.current++;
    const now = performance.now();
    const delta = now - lastTime.current;

    // Calculate FPS every second
    if (delta >= 1000) {
      const fps = (frameCount.current * 1000) / delta;
      fpsHistory.current.push(fps);

      // Keep only last 5 seconds of FPS data
      if (fpsHistory.current.length > 5) {
        fpsHistory.current.shift();
      }

      // Calculate average FPS
      const avgFPS = fpsHistory.current.reduce((a, b) => a + b, 0) / fpsHistory.current.length;

      // Determine performance level
      let newPerformance: 'high' | 'medium' | 'low';
      if (avgFPS >= targetFPS * 1.5) {
        newPerformance = 'high';
      } else if (avgFPS >= targetFPS) {
        newPerformance = 'medium';
      } else {
        newPerformance = 'low';
      }

      // Update performance if changed
      if (newPerformance !== currentPerformance) {
        setCurrentPerformance(newPerformance);
        onPerformanceChange?.(newPerformance);

        // Automatically adjust renderer settings
        switch (newPerformance) {
          case 'high':
            gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            gl.shadowMap.enabled = true;
            break;
          case 'medium':
            gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
            gl.shadowMap.enabled = false;
            break;
          case 'low':
            gl.setPixelRatio(1);
            gl.shadowMap.enabled = false;
            break;
        }
      }

      frameCount.current = 0;
      lastTime.current = now;
    }
  });

  return <>{children}</>;
};

export default PerformanceMonitor;