import { useRef, useState } from 'react';
import { useFrame, useThree, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { MeshReflectorMaterial } from '@react-three/drei';


export default function Planet(props) {
  const meshRef = useRef();

  const texture = useLoader(TextureLoader, '2k_jupiter.jpg');

  useFrame(({clock}) => {
    meshRef.current.position.x = Math.sin(clock.getElapsedTime() / 8) * 5;
    meshRef.current.position.z = Math.cos(clock.getElapsedTime() / 8) * 5;

    meshRef.current.rotation.y = clock.getElapsedTime() / 2;
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={[1, 1, 1]}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial map={texture}/>
    </mesh>
  );
}
