import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Bounds, BakeShadows } from "@react-three/drei";

import Robot from "./components/Robot";

export default function App() {
  return (
    <Canvas
      orthographic
      shadows
      dpr={[1, 2]}
      camera={{ position: [50, 0, 120], zoom: 0 }}
    >
      <color attach="background" args={["#252530"]} />
      <ambientLight intensity={0.25} />
      <hemisphereLight intensity={0.125} color="#8040df" groundColor="red" />
      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1}>
          <Robot scale={0.1} />
        </Bounds>
        <BakeShadows />
      </Suspense>
      <OrbitControls
        makeDefault
        minAzimuthAngle={0}
        maxAzimuthAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
        enableZoom={true}
        enablePan={true}
        zoomSpeed={0.3}
      />
      <gridHelper
        args={[500, 500, "#000000", "#101010"]}
        position={[0, -20, 62]}
      />
    </Canvas>
  );
}
