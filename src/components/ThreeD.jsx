import React, {useRef, useEffect} from "react";
import { ReactThreeFiber, Canvas, useFrame, extend, useThree, useLoader } from 'react-three-fiber';
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
    <mesh ref={ref} {...props} castShadow>
      <boxBufferGeometry/>
      <meshPhysicalMaterial
        color='blue'
        transparent={true}
        roughness={0}
        clearcoat={1}
        transmission={1}
        reflectivity={1}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

const Floor = (props) => {

  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[20,1,10]}/>
      <meshPhysicalMaterial/>
    </mesh>
  )
}


const Bulb = (props) => {

  return (
    <mesh {...props}>
      <pointLight castShadow/>
      <sphereBufferGeometry args={[0.2]}/>
      <meshPhongMaterial emissive={'red'}/>
    </mesh>
  )
}

const ThreeD = () => {

  return (
    <Canvas className="ThreeD"
      shadows
      camera={{position:[1,5,1]}}
    >

      <ambientLight intensity={0.5}/>
      <Bulb position={[0, 3, 0]}/>
      <Controls/>
      <axesHelper args={[5]}/>
      <Box position={[0,1,0]}/>
      <Floor position={[0,-.5,0]}/>
    </Canvas>
  )
}


export default ThreeD;