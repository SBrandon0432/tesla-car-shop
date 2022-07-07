import React, {useRef} from "react";
import { ReactThreeFiber, Canvas, useFrame, extend, useThree, useLoader } from 'react-three-fiber';
import * as THREE from 'three';
import { useBox,usePlane } from "@react-three/cannon";


const Floor = (props) => {

  const [ref, api] = useBox(()=> ({args: [20,1,10], ...props}));

  return (
    <mesh
    {...props}
    receiveShadow
    ref={ref}
    >
      <boxBufferGeometry args={[200,1,200]}/>
      <meshPhysicalMaterial transparent opacity={.2}/>
    </mesh>
  )
}

export default Floor;