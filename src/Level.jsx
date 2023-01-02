import * as THREE from "three";
import { BlockSpinner } from "./components/BlockSpinner";
import { BlockStart } from "./components/BlockStart";
import { BlockLimbo } from "./components/BlockLimbo";

import { LimboObstacle } from "./components/LimboObstacle";
import { BlockAxe } from "./components/BlockAxe";
import { Block } from "./components/Block";
import { useRef, useEffect, useMemo } from "react";
import { AxeObstacle } from "./components/AxeObstacle";
import { BlockEnd } from "./components/BlockEnd";
import { Hamburger } from "./components/Hamburger";

THREE.ColorManagement.legacyMode = false;

export const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

export const floor1Material = new THREE.MeshStandardMaterial({
  color: "limegreen",
});
export const floor2Material = new THREE.MeshStandardMaterial({
  color: "greenyellow",
});
export const obstacleMaterial = new THREE.MeshStandardMaterial({
  color: "orangered",
});
export const wallMaterial = new THREE.MeshStandardMaterial({
  color: "slategrey",
});

export default function Level({
  count = 5,
  types = [BlockAxe, BlockLimbo, BlockSpinner],
}) {
  const blocks = useMemo(() => {
    const blocks = [];

    for (let i = 0; i < count; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      blocks.push(type);
    }
    return blocks;
  }, [count, types]);

  useEffect(() => {
    console.log(blocks);
  }, []);

  return (
    <>
      <BlockStart position={[0, 0, 0]} />
      {blocks.map((BlockType, index) => (
        <BlockType key={index} position={[0, 0, -(index + 1) * 4]} />
      ))}
      <BlockEnd position={[0, 0, -(count + 1) * 4]} />
    </>
  );
}
