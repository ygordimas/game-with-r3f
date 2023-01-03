import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Lights from "./components/Lights.jsx";
import { OrbitControls } from "@react-three/drei";
import Level from "./Level.jsx";
import { Physics, Debug } from "@react-three/rapier";
import { Player } from "./components/Player.jsx";

function App() {
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
        {/* <OrbitControls makeDefault /> */}
        <Suspense>
          <Physics>
            {/* <Debug /> */}
            <Lights />
            <Level />
            <Player />
          </Physics>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
