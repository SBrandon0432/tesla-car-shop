import { useBox } from "@react-three/cannon";
import React from "react";

const BoundingBox = ({
  position = [0,0,0],
  offset = [0,0,0],
  dims = [1,1,1],
  visible = false,
  children
}) => {


  const [ref, api] = useBox(()=>({mass:1, args: dims, position: position}))


  return (
    <group ref={ref} api={api}>
      <mesh scale={dims} visible={visible}>
        <boxBufferGeometry/>
        <meshPhysicalMaterial wireframe={true}/>
      </mesh>
      <group position={offset}>
        {children}
      </group>

    </group>
  )
}

export default BoundingBox
