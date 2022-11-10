import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';

export function CatModel(props) {
  const catRef = useRef(null);
  
   useFrame(({}) => {
    if (catRef.current.position.y < 3) {
      catRef.current.position.y += 0.01;
    }
  });

  const { nodes, materials } = useGLTF('aki5.glb');
  return (
    <group {...props} dispose={null} ref={catRef}>
      <group position={[-6.92, 12.4, -9.9]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5978.geometry}
          material={materials.Voxel_mat53}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5978_1.geometry}
          material={materials.Voxel_mat95}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5978_2.geometry}
          material={materials.Voxel_mat208}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5978_3.geometry}
          material={materials.Voxel_mat216}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5978_4.geometry}
          material={materials.Voxel_mat79}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5978_5.geometry}
          material={materials.Voxel_mat246}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5978_6.geometry}
          material={materials.Voxel_mat96}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5978_7.geometry}
          material={materials.Voxel_mat33}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5978_8.geometry}
          material={materials.Voxel_mat160}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5978_9.geometry}
          material={materials.Voxel_mat255}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5978_10.geometry}
          material={materials.Voxel_mat53}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/aki5.glb');
