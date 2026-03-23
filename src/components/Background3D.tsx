import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function FloatingShape({ position, rotation, scale, color, geometryType = 'box' }: any) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        {geometryType === 'box' ? (
          <boxGeometry args={[1, 1, 1]} />
        ) : (
          <icosahedronGeometry args={[0.8, 0]} />
        )}
        <meshPhysicalMaterial
          color={color}
          metalness={0.2}
          roughness={0.1}
          transmission={0.6}
          thickness={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          ior={1.5}
          opacity={0.6}
          transparent
        />
      </mesh>
    </Float>
  );
}

export function Background3D() {
  return (
    <div className="background-3d-container">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF8C00" />
        
        <FloatingShape position={[-3, 2, -2]} rotation={[0, 0, 0]} scale={1.5} color="#FFD700" geometryType="icosahedron" />
        <FloatingShape position={[4, -2, -3]} rotation={[0.5, 0.5, 0]} scale={2} color="#FF4500" geometryType="box" />
        <FloatingShape position={[-4, -3, -5]} rotation={[0.2, 0.1, 0]} scale={1.2} color="#FFFFFF" geometryType="box" />
        <FloatingShape position={[3, 3, -4]} rotation={[0.1, 0.2, 0]} scale={1.8} color="#FF8C00" geometryType="icosahedron" />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
