'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFBX, useGLTF, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

const AMONG_US_PATH = '/3D/among_us.glb';
const DELOREAN_PATH = '/3D/delorian/FINAL_MODEL_BTTF.fbx';

const AmongUsModel = () => {
    const { scene } = useGLTF(AMONG_US_PATH);
    return <primitive object={scene.clone()} scale={1} position={[-2, 0, 0]} />;
};

const DeloreanModel = () => {
    const fbx = useFBX(DELOREAN_PATH);
    return <primitive object={fbx} scale={1.2} position={[0.5, 0, 1.2]} />;
};

useGLTF.preload(AMONG_US_PATH);
useFBX.preload(DELOREAN_PATH);

export default function ExplorePage() {
    return (
        <main style={{ width: '100vw', height: '100vh', background: '#111' }}>
            <Canvas
                camera={{ position: [0, 2, 10], fov: 50 }}
                gl={{
                    toneMapping: THREE.ACESFilmicToneMapping,
                    toneMappingExposure: 1.2,
                    outputColorSpace: THREE.SRGBColorSpace,
                }}
            >
                <Suspense fallback={null}>
                    {/* Lighting */}
                    <ambientLight intensity={1.5} />
                    <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
                    <directionalLight position={[-5, 5, -5]} intensity={1} />
                    <Environment preset="night" />

                    <AmongUsModel />
                    <DeloreanModel />
                </Suspense>

                <OrbitControls makeDefault />
            </Canvas>
        </main>
    );
}