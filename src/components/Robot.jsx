import React, { useRef } from "react";
import { useGLTF, Clone } from "@react-three/drei";

const Robot = (props) => {
  const group = useRef();
  const robot = useRef();

  const { nodes } = useGLTF("/glb/friman.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <group ref={robot} name="_Robot">
        <Clone object={nodes.node_id2} />
        <Clone object={nodes.node_id4} />
        <Clone object={nodes.node_id6} />
        <Clone object={nodes.node_id8} />
        <Clone object={nodes.node_id10} />
      </group>
    </group>
  );
};

export default Robot;
