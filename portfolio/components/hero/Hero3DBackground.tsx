'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFBX, OrbitControls, Stage } from '@react-three/drei';

const FBXModel = ({ path, scale = 1 }: { path: string, scale?: number }) => {
  const fbx = useFBX(path);
  return <primitive object={fbx} scale={scale} />;
};

const Hero3DBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto opacity-70">
      <Canvas camera={{ position: [0, 1.5, 3], fov: 40, near: 0.1, far: 2000 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.4} adjustCamera={0.5} shadows={false}>
            <FBXModel path="/3D/nazo-no-eki-mystery-station/source/WTS_Mock.fbx" scale={0.008} />
          </Stage>
        </Suspense>
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
