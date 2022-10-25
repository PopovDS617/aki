import { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from '../../util/gtlf-loader';
import { ModelContainer } from './model-container';
import { ModelSpinner } from './model-container';

const CatModel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refRenderer = useRef();
  const refContainer = useRef();

  const windowResizeHandler = useCallback(() => {
    const { current: renderer } = refRenderer;
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, []);

  useEffect(() => {
    const { current: container } = refContainer;
    if (container) {
      const screenWidth = container.clientWidth;
      const screenHeight = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(screenWidth, screenHeight);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      refRenderer.current = renderer;
      const scene = new THREE.Scene();

      const target = new THREE.Vector3(0, 0, 0);
      const initialCameraPosition = new THREE.Vector3(-15, 8, 25);

      const scale = screenHeight * 0.08 + 1.8;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.001,
        50000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 0.95);

      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;

      loadGLTFModel(scene, '/aki5.glb', {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setIsLoading(false);
      });

      let req = null;

      const animate = () => {
        target.autoRotate;
        req = requestAnimationFrame(animate);
        controls.update();

        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.domElement.remove();
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', windowResizeHandler, false);
    return () => {
      window.removeEventListener('resize', windowResizeHandler, false);
    };
  }, [windowResizeHandler]);

  return (
    <ModelContainer ref={refContainer}>
      {isLoading && <ModelSpinner />}
    </ModelContainer>
  );
};

export default CatModel;
