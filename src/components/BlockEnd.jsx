import { boxGeometry, floor1Material } from "../Level";
import { Hamburger } from "./Hamburger";

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
    </group>
  );
}
