import React, {useRef, useEffect} from "react";
import { Canvas, useFrame, extend, useThree } from 'react-three-fiber';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
extend({OrbitControls});

const Box = () => {
  const ref = useRef();
  useFrame(state => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01

  })

  return (
    <mesh ref={ref}>
    <boxBufferGeometry/>
    <meshBasicMaterial color='blue'/>
  </mesh>
  )
}



const Controls = () => {
  const {
    camera,
    gl
  } = useThree();
  // const controls = useRef();
  // useFrame((state) => controls.current.update());
  return <orbitControls  args={[camera, gl.domElement]} />; // was the capital of Orbit vs orbit
}

const ThreeD = () => {

  return (
    <Canvas className="ThreeD"
      camera={{position:[3,3,3]}}
    >

     {/* <Box /> */}
     <axesHelper args={[5]}/>
     <Controls/>
    </Canvas>
  )
}


export default ThreeD;