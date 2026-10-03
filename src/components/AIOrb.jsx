import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, Icosahedron } from '@react-three/drei';

function Core() {
  const group = useRef(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.23;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.12;
  });

  return (
    <group ref={group}>
      <Icosahedron args={[1.35, 4]}>
        <meshStandardMaterial
          color="#8db7ff"
          roughness={0.22}
          metalness={0.72}
          emissive="#1f3a73"
          emissiveIntensity={0.42}
        />
      </Icosahedron>
      <Icosahedron args={[1.62, 2]} scale={1.05}>
        <meshBasicMaterial color="#c9dcff" wireframe transparent opacity={0.24} />
      </Icosahedron>
      <pointLight position={[2.5, 2.8, 3]} intensity={5} color="#9dc5ff" />
      <pointLight position={[-2.6, -2, -2]} intensity={3.2} color="#8b6eff" />
    </group>
  );
}

export default function AIOrb({ compact = false }) {
  return (
    <div className={`orb ${compact ? 'orb--compact' : ''}`}>
      <Canvas
        camera={{ position: [0, 0, 5.1], fov: 38 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        fallback={<div className="orb-fallback" aria-hidden="true" />}
      >
        <ambientLight intensity={1.3} />
        <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.28}>
          <Core />
        </Float>
        <Sparkles
          count={compact ? 36 : 78}
          scale={compact ? 4 : 5.8}
          size={1.5}
          speed={0.25}
          opacity={0.34}
          color="#c7ddff"
        />
      </Canvas>
      <div className="orb-ring orb-ring--one" />
      <div className="orb-ring orb-ring--two" />
    </div>
  );
}