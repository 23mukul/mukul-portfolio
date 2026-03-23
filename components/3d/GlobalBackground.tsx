"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function GlobalBackground() {
  const particlesRef = useRef<THREE.Points>(null);
  
  // Reduced from 500 to 200 particles for better performance
  const particleCount = 200;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
        pos[i * 3]     = (Math.random() - 0.5) * 40;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
        particlesRef.current.rotation.y = state.clock.elapsedTime * 0.015;
        particlesRef.current.rotation.x = state.clock.elapsedTime * 0.007;
    }
  });

  return (
    <group>
      {/* Floating Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
            <bufferAttribute
                attach="attributes-position"
                count={particleCount}
                array={positions}
                itemSize={3}
                args={[positions, 3]}
            />
        </bufferGeometry>
        <pointsMaterial
            size={0.06}
            color="#A78BFA"
            transparent
            opacity={0.35}
            sizeAttenuation
            blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
