import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Lights from "./components/Lights.jsx";
import { OrbitControls } from "@react-three/drei";
import Level from "./Level.jsx";
import { Physics, Debug } from "@react-three/rapier";
import { Player } from "./components/Player.jsx";
import { Interface } from "./components/Interface.jsx";
import useGame from "./stores/useGame";
import * as THREE from "three";
import { Effects } from "./components/Effects.jsx";
THREE.ColorManagement.legacyMode = false;

function App() {
  const blocksCount = useGame((state) => state.blocksCount);
  const blocksSeed = useGame((state) => state.blocksSeed);
  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [2.5, 4, 6],
        }}
      >
        <color args={["#252731"]} attach="background" />
        {/* <OrbitControls makeDefault /> */}
        <Suspense>
          <Physics>
            {/* <Debug /> */}
            <Lights />
            <Level count={blocksCount} seed={blocksSeed} />
            <Player />
          </Physics>
        </Suspense>
        <Effects />
      </Canvas>
      <Interface />
    </>
  );
}

export default App;
