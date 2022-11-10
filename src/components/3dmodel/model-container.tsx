import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

import { CatModel } from './Aki5';

const Three = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[-1, 5, -10]} />
      <OrbitControls enabled={false} />

      <CatModel
        scale={0.15}
        receiveShadow
        position={[0, 0, 0]}
        rotation={[0, 4, 0]}
      />

      {/* <spotLight
        castShadow
        args={['#ffffff', 5]}
        position={[-15, 2, -20]}
        penumbra={1}
        distance={45}
        decay={0.5}
        angle={5}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-radius={10}
        shadow-bias={-0.0001}
      /> */}

      <directionalLight
        position={[-5, 10, -10]}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-radius={10}
        shadow-bias={-0.0001}
      />
    </>
  );
};

export default Three;
