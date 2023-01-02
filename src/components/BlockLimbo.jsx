import { boxGeometry, floor2Material, obstacleMaterial } from "../Level";
import { LimboObstacle } from "./LimboObstacle";

export function BlockLimbo({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={floor2Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
      <LimboObstacle position={position} />
    </group>
  );
}
