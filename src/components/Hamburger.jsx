import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Hamburger() {
  const hamburger = useGLTF("./hamburger.glb");
  hamburger.scene.children.forEach((mesh) => {
    mesh.castShadow = true;
  });
  return (
    <RigidBody
      type="fixed"
      colliders="hull"
      restitution={0.2}
      friction={0}
      position={[0, 0.25, 0]}
    >
      <primitive object={hamburger.scene} scale={0.2} />
    </RigidBody>
  );
}
