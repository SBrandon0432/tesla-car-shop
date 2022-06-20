import React, {useRef, useEffect, Suspense} from "react";
import { ReactThreeFiber, Canvas, useFrame, extend, useThree, useLoader } from 'react-three-fiber';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import wood from '../Assets/wood.jpg';
import sky from '../Assets/sky.jpg'
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
  const texture = useLoader(THREE.TextureLoader, wood);
  useFrame(state => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01

  })

  return (
    <mesh ref={ref} {...props} castShadow>
      {/* <boxBufferGeometry/> */}
      <sphereBufferGeometry args={[1,100,100]}/>
      <meshPhysicalMaterial
        map={texture}
        metalness={0}
        reflectivity={1}
        clearcoat={1}
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


const Background = (props) => {
  const texture = useLoader(THREE.TextureLoader, sky);
  return (
    <primitive attach='background' object={texture}/>
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
      <Suspense fallback={null}>
        <Box position={[0,1,0]}/>
      </Suspense>
      <Suspense fallback={null}>
        <Background/>
      </Suspense>
      <Floor position={[0,-.5,0]}/>
    </Canvas>
  )
}


export default ThreeD;