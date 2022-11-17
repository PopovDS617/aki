import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    Cube5978: THREE.Mesh;
    Cube5978_1: THREE.Mesh;
    Cube5978_2: THREE.Mesh;
    Cube5978_3: THREE.Mesh;
    Cube5978_4: THREE.Mesh;
    Cube5978_5: THREE.Mesh;
    Cube5978_6: THREE.Mesh;
    Cube5978_7: THREE.Mesh;
    Cube5978_8: THREE.Mesh;
    Cube5978_9: THREE.Mesh;
    Cube5978_10: THREE.Mesh;
  };
  materials: {
    Voxel_mat53: THREE.MeshStandardMaterial;
    Voxel_mat95: THREE.MeshStandardMaterial;
    Voxel_mat208: THREE.MeshStandardMaterial;
    Voxel_mat216: THREE.MeshStandardMaterial;
    Voxel_mat79: THREE.MeshStandardMaterial;
    Voxel_mat246: THREE.MeshStandardMaterial;
    Voxel_mat96: THREE.MeshStandardMaterial;
    Voxel_mat33: THREE.MeshStandardMaterial;
    Voxel_mat160: THREE.MeshStandardMaterial;
    Voxel_mat255: THREE.MeshStandardMaterial;
    Voxel_mat200: THREE.MeshStandardMaterial;
  };
};

function CatModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/aki5.glb') as unknown as GLTFResult;

  const catRef = useRef<any>(null);
  console.log(catRef);
  useFrame(({}) => {
    catRef!.current.rotation.y += 0.0027;
  });

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
          material={materials.Voxel_mat200}
        />
      </group>
    </group>
  );
}

export default CatModel;

useGLTF.preload('/aki5.glb');
