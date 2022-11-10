import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useTexture,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { angleToRadians } from '../utils/angle';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
 
import { CarModel } from './car';
import { CatModel } from './cat';

const Three = () => {
  

  return (
    <>
      <PerspectiveCamera makeDefault position={[-5, 5, -15]} />
      <OrbitControls ref={orbitControlsRef} />
     
      <CatModel
        scale={0.15}
        receiveShadow
        castShadow
        position={[2, 0, -4]}
        rotation={[0, angleToRadians(-55), 0]}
      />

     
      <ambientLight args={['#ffffff', 0.25]} />  
      <spotLight
        castShadow
        args={['#ffffff', 5]}
        position={[-15, 9, -5]}
        penumbra={1}
        distance={45}
        decay={0.5}
        angle={angleToRadians(45)}
      />
    
    </>
  );
};

export default Three;
