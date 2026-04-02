'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFBX, OrbitControls, Stage } from '@react-three/drei';
import * as THREE from 'three';

const MODEL_PATH = '/3D/delorian/FINAL_MODEL_BTTF.fbx'; // update filename

const Model = () => {
    const fbx = useFBX(MODEL_PATH);
    return <primitive object={fbx} scale={0.008} />;
};

useFBX.preload(MODEL_PATH);

export default function ExplorePage() {
    return (
        <main style={{ width: '100vw', height: '100vh', background: '#000' }}>
            <Canvas
                camera={{ position: [0, 2, 100], fov: 40 }}
                gl={{
                    toneMapping: THREE.ACESFilmicToneMapping,
                    toneMappingExposure: 1.0,
                    outputColorSpace: THREE.SRGBColorSpace,
                }}
            >
                <Suspense fallback={null}>
                    <Stage environment="night" intensity={0.01} adjustCamera={0.8} shadows={true}>
                        <Model />
                    </Stage>
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </main>
    );
}