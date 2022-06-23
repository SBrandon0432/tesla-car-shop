import React, {useRef} from "react";
import { ReactThreeFiber, Canvas, useFrame, extend, useThree, useLoader } from 'react-three-fiber';
import * as THREE from 'three';




const Bulb = (props) => {

  return (
    <mesh {...props}>
      <pointLight castShadow/>
      <sphereBufferGeometry args={[0.2]}/>
      <meshPhongMaterial emissive={'red'}/>
    </mesh>
  )
}

export default Bulb;