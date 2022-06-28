import React, {useRef} from "react";
import { ReactThreeFiber, Canvas, useFrame, extend, useThree, useLoader } from 'react-three-fiber';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
extend({OrbitControls});


const Controls = () => {
  const {
    camera,
    gl
  } = useThree();
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return < orbitControls
  attach='orbitControls'
  ref={controls}
  args={[camera, gl.domElement]} />; // was the capital of Orbit vs orbit
}

export default Controls;