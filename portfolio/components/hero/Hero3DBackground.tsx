'use client';

import React, { Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useFBX, useGLTF, OrbitControls, Stage } from '@react-three/drei';
import * as THREE from 'three';

const FBXModel = ({ path, scale = 1 }: { path: string, scale?: number }) => {
  const fbx = useFBX(path);
  return <primitive object={fbx} scale={scale} />;
};

const GLTFModel = ({ path, scale = 1 }: { path: string; scale?: number }) => {
  const gltf = useGLTF(path);
  return <primitive object={gltf.scene} scale={scale} />;
};

const ResponsiveCamera = () => {
  const { camera, size } = useThree();

  useEffect(() => {
    const cam = camera as THREE.PerspectiveCamera | THREE.OrthographicCamera;
    if (size.width > 1536) {
      cam.zoom = 1.6;
    } else if (size.width > 1024) {
      cam.zoom = 1.35;
    } else if (size.width > 768) {
      cam.zoom = 1.15;
    } else {
      cam.zoom = 1;
    }
    cam.updateProjectionMatrix();
  }, [size.width, camera]);

  return null;
};

const MODEL_CONFIG = {
  station: {
    scale: 0.008,
    cameraPosition: [0, 1.5, 3] as [number, number, number],
    adjustCamera: 0.5,
  },
  building: {
    scale: 0.001,
    cameraPosition: [0, 1.5, 20] as [number, number, number],
    adjustCamera: 2,
  },
};

interface Hero3DProps {
  activeModel: 'station' | 'building';
}

const Hero3DBackground: React.FC<Hero3DProps> = ({ activeModel }) => {
  const config = MODEL_CONFIG[activeModel];

  return (
    <div className="absolute inset-0 z-0 pointer-events-auto opacity-70">
      <Canvas
        key={activeModel}
        style={{ touchAction: 'pan-y' }}
        camera={{ position: config.cameraPosition, fov: 40, near: 0.1, far: 2000 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{
          toneMapping: activeModel === 'building' ? THREE.ACESFilmicToneMapping : THREE.NoToneMapping,
          toneMappingExposure: 0.6,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
      >
        <Suspense fallback={null}>
          <Stage
            environment={activeModel === 'building' ? 'apartment' : 'city'}
            intensity={activeModel === 'building' ? 0.1 : 0.4}
            adjustCamera={config.adjustCamera}
            shadows={false}
          >
            {activeModel === 'station' ? (
              <FBXModel path="/3D/nazo-no-eki-mystery-station/source/WTS_Mock.fbx" scale={config.scale} />
            ) : (
              <GLTFModel path="/3D/cyberpunk-2077-inspired-building-modular-pbr/source/cyber.glb" scale={config.scale} />
            )}
          </Stage>
        </Suspense>
        <ResponsiveCamera />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 2.4}
          maxPolarAngle={Math.PI / 2.4}
        />
      </Canvas>
    </div>
  );
};

export default Hero3DBackground;

useFBX.preload("/3D/nazo-no-eki-mystery-station/source/WTS_Mock.fbx");
useGLTF.preload("/3D/cyberpunk-2077-inspired-building-modular-pbr/source/cyber.glb");