import React, {useRef} from "react";
import { ReactThreeFiber, Canvas, useFrame, extend, useThree, useLoader } from 'react-three-fiber';
import * as THREE from 'three';
import { useBox } from "@react-three/cannon";


const Floor = (props) => {

  return (
    <mesh
    {...props}
    receiveShadow


    >
      <boxBufferGeometry args={[20,1,10]}/>
      <meshPhysicalMaterial/>
    </mesh>
  )
}

export default Floor;