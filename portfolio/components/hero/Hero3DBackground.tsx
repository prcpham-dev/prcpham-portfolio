'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useFBX, OrbitControls, Stage } from '@react-three/drei';
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import * as THREE from 'three';

const FBXModel = ({ path, scale = 1 }: { path: string, scale?: number }) => {
  const fbx = useFBX(path);
  return <primitive object={fbx} scale={scale} />;
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
    scale: 0.008,
    cameraPosition: [130, 80, 150] as [number, number, number],
    adjustCamera: 0.8,
  },
};

interface Hero3DProps {
  activeModel: 'station' | 'building';
}

const Hero3DBackground: React.FC<Hero3DProps> = ({ activeModel }) => {
  const config = MODEL_CONFIG[activeModel];
  const orbitRef = useRef<OrbitControlsImpl>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (orbitRef.current && activeModel === 'building') {
      orbitRef.current.setAzimuthalAngle(Math.PI / 2);
      orbitRef.current.update();
    }
  }, [activeModel]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-auto opacity-70">
      <Canvas
        key={activeModel}
        style={{ touchAction: 'pan-y' }}
        camera={{ position: config.cameraPosition, fov: 40, near: 0.1, far: 2000 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 0.6,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
      >
        <Suspense fallback={null}>
          <Stage
            environment="city"
            intensity={0.4}
            adjustCamera={config.adjustCamera}
            shadows={true}
          >
            {activeModel === 'station' ? (
              <FBXModel path="/3D/nazo-no-eki-mystery-station/source/WTS_Mock.fbx" scale={config.scale} />
            ) : (
              <FBXModel path="/3D/procedurally-made-cyberpunk-building/source/Prueba.fbx" scale={config.scale} />
            )}
          </Stage>
        </Suspense>
        <ResponsiveCamera />
        <OrbitControls
          ref={orbitRef}
          enableZoom={false}
          enablePan={false}
          enableRotate={!isMobile}
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
useFBX.preload("/3D/procedurally-made-cyberpunk-building/source/Prueba.fbx");