import React, {useRef, useEffect} from "react";
import { ReactThreeFiber, Canvas, useFrame, extend, useThree } from 'react-three-fiber';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
extend({OrbitControls});


const Controls = () => {
  const {
    camera,
    gl
  } = useThree();
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return < orbitControls ref={controls} args={[camera, gl.domElement]} />; // was the capital of Orbit vs orbit
}

const Box = (props) => {
  const ref = useRef();
  useFrame(state => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01

  })

  return (
    <mesh ref={ref} {...props}>
      <boxBufferGeometry/>
      <meshBasicMaterial color='blue'/>
    </mesh>
  )
}


const ThreeD = () => {

  return (
    <Canvas className="ThreeD"
      camera={{position:[3,3,3]}}
    >

     <Controls/>
     <axesHelper args={[5]}/>
     <Box position={[1,1,0]}/>
      <mesh>
        <meshBasicMaterial side={THREE.FrontSide}/>
        <coneGeometry>
          <vector3 attachArray='vertices'/>
        </coneGeometry>
      </mesh>
    </Canvas>
  )
}


export default ThreeD;