import { boxGeometry, floor2Material } from "../Level";

export function Block({ position = [0, 0, 0], children }) {
  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={floor2Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
      {children}
    </group>
  );
}
