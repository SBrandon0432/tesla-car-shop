import React, {useRef, useEffect} from "react";
import { ReactThreeFiber, Canvas, useFrame, extend, useThree } from 'react-three-fiber';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
extend({OrbitControls});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>
    }
  }
}

const Controls = () => {
  const {
    camera,
    gl
  } = useThree();
  const controls = useRef<any>();
  useFrame((state) => controls.current.update());
  return < orbitControls ref={controls} args={[camera, gl.domElement]} />; // was the capital of Orbit vs orbit
}

const Box = (props: any) => {
  const ref = useRef<any>();
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

     <Box position={[1,1,0]}/>
     <axesHelper args={[5]}/>
     <Controls/>
    </Canvas>
  )
}


export default ThreeD;