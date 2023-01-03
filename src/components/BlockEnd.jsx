import { boxGeometry, floor1Material } from "../Level";
import { Hamburger } from "./Hamburger";
import { Float, Text, useGLTF } from "@react-three/drei";

export function BlockEnd({ position = [0, 0, 0], children }) {
  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        position={[0, 0, 0]}
        scale={[4, 0.2, 4]}
        material={floor1Material}
        receiveShadow
      />
      <Hamburger />
      <Text
        font="./bebas-neue-v9-latin-regular.woff"
        scale={2}
        position={[0, 2.25, 2]}
      >
        FINISH
        <meshBasicMaterial toneMapped={false} />
      </Text>
    </group>
  );
}
