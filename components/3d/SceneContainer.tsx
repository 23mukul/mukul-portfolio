"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, ReactNode } from "react";

interface SceneContainerProps {
  children: ReactNode;
  className?: string;
}

export default function SceneContainer({ children, className }: SceneContainerProps) {
  return (
    <div className={`w-full h-full absolute inset-0 z-0 pointer-events-none ${className || ""}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} color="#6366F1" />
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
