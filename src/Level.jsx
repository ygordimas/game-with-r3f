import * as THREE from "three";
import { BlockSpinner } from "./components/BlockSpinner";
import { BlockStart } from "./components/BlockStart";
import { BlockLimbo } from "./components/BlockLimbo";
import { BlockAxe } from "./components/BlockAxe";
import { useMemo } from "react";
import { BlockEnd } from "./components/BlockEnd";
import { Bounds } from "./components/Bounds";
import { Float, Text, useGLTF } from "@react-three/drei";

THREE.ColorManagement.legacyMode = false;
export const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

export const floor1Material = new THREE.MeshStandardMaterial({
  color: "#111111",
  metalness: 0,
  roughness: 0,
});
export const floor2Material = new THREE.MeshStandardMaterial({
  color: "#222222",
  metalness: 0,
  roughness: 0,
});
export const obstacleMaterial = new THREE.MeshStandardMaterial({
  color: "#ff0000",
  metalness: 0,
  roughness: 1,
});
export const wallMaterial = new THREE.MeshStandardMaterial({
  color: "#887777",
  metalness: 0,
  roughness: 0,
});

export default function Level({
  count = 5,
  types = [BlockAxe, BlockLimbo, BlockSpinner],
  seed = 0,
}) {
  const blocks = useMemo(() => {
    const blocks = [];

    for (let i = 0; i < count; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      blocks.push(type);
    }
    return blocks;
  }, [count, types, seed]);

  return (
    <>
      <BlockStart position={[0, 0, 0]} />
      {blocks.map((BlockType, index) => (
        <BlockType key={index} position={[0, 0, -(index + 1) * 4]} />
      ))}
      <BlockEnd position={[0, 0, -(count + 1) * 4]} />
      <Bounds length={count + 2} />
    </>
  );
}
