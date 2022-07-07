import React, {useRef} from "react";
import { ReactThreeFiber, Canvas, useFrame, extend, useThree, useLoader } from 'react-three-fiber';
import * as THREE from 'three';




const Bulb = (props) => {

  return (
    <mesh {...props}>
      <pointLight
        castShadow
        intensity={1}
        shadow-mapSize-height = {2**10}
        shadow-mapSize-width = {2**10}
        shadow-radius = {10}
        />
      <sphereBufferGeometry args={[0.2,20,20]} />
      <meshPhongMaterial />
    </mesh>
  )
}

export default Bulb;