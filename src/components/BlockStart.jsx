import { boxGeometry, floor1Material } from "../Level";
import { Float, Text, useGLTF } from "@react-three/drei";

export function BlockStart({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <Float>
        <Text
          maxWidth={0.25}
          lineHeight={0.75}
          textAlign="right"
          position={[0.75, 0.65, 0]}
          rotation-y={-0.25}
          font="./bebas-neue-v9-latin-regular.woff"
          scale={0.5}
        >
          Marble Race
          <meshBasicMaterial toneMapped={false} />
        </Text>
      </Float>
      <mesh
        geometry={boxGeometry}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        material={floor1Material}
        receiveShadow
      />
    </group>
  );
}
