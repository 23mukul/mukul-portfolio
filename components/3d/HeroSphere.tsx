"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function HeroSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  
  const particleCount = 200;
  
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const colorPrimary = new THREE.Color("#6366F1");
    const colorSecondary = new THREE.Color("#22D3EE");
    
    for (let i = 0; i < particleCount; i++) {
      // Create points on a sphere
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      
      const radius = 2.5;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      
      const mixedColor = colorPrimary.clone().lerp(colorSecondary, Math.random());
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    
    // Mouse interaction tilt
    const targetX = (state.pointer.x * Math.PI) / 10;
    const targetY = (state.pointer.y * Math.PI) / 10;
    
    if (groupRef.current) {
      groupRef.current.rotation.z += (targetX - groupRef.current.rotation.z) * 0.05;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[2, 0, 0]}>
      {/* Node Points */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particleCount}
            array={colors}
            itemSize={3}
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
      
      {/* Connecting Lines (Simulated with wireframe sphere for performance) */}
      <mesh>
        <icosahedronGeometry args={[2.45, 2]} />
        <meshBasicMaterial 
          color="#6366F1" 
          wireframe 
          transparent 
          opacity={0.15} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}
