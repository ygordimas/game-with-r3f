import { boxGeometry, floor2Material } from "../Level";
import { SpinnerObstacle } from "./SpinnerObstacle";

export function BlockSpinner({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={floor2Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
      <SpinnerObstacle />
    </group>
  );
}
