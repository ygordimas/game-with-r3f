import { obstacleMaterial, boxGeometry } from "../Level";
import { RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function AxeObstacle({ position = [0, 0, 0] }) {
  const obstacle = useRef();
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const x = Math.sin(time + timeOffset) * 1.25;

    obstacle.current.setNextKinematicTranslation({
      x: position[0] + x,
      y: position[1] + 0.8,
      z: position[2],
    });
  });

  return (
    <RigidBody
      ref={obstacle}
      type="kinematicPosition"
      position={position}
      restitution={0.2}
      friction={0}
    >
      <mesh
        geometry={boxGeometry}
        material={obstacleMaterial}
        scale={[1.5, 1.5, 0.3]}
        castShadow
        receiveShadow
      />
    </RigidBody>
  );
}
