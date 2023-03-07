import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
     <mesh>
      {/* creating a light to allow user to see */}
      <hemisphereLight intensity={0.15}
      groundColor="black" />
       <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />     
      <pointLight intensity={1} />
      <ambientLight intensity={0.1} />
      <primitive
      object={computer.scene} 
      scale={ 0.75 }
      position={[0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}     
      />
     </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
    frameLoop="demand"
    shadows
    camera={{ position: [20, 3, 5], fov: 25 }}  /* field of view  */  
    gl={{ preserveDrawingBuffer: true }}
    >
      {/* Adding a suspense from react to allow to show a loader as the model loads */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;