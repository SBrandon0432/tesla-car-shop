import React, {useRef} from "react";
import { ReactThreeFiber, Canvas, useFrame, extend, useThree, useLoader } from 'react-three-fiber';
import * as THREE from 'three';
import Color from "./Color";
import wood from '../Assets/wood.jpg';


const handlePointerDown = (e) => {
  e.object.active = true;
  if (window.activeMesh) {
    scaleDown(window.activeMesh)
    window.activeMesh.active = false
  }
  window.activeMesh = e.object;
}
const handlePointerEnter = (e) => {
  e.object.scale.x = 1.5
  e.object.scale.y = 1.5
  e.object.scale.z = 1.5

}
const handlePointerLeave = (e) => {
  if (!e.object.active) {
    scaleDown(e.object)
  }

}
const scaleDown = object => {
  object.scale.x = 1
  object.scale.y = 1
  object.scale.z = 1
}

const Box = (props) => {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, wood);
  useFrame(state => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  })

  return (
    <mesh ref={ref} {...props}
      castShadow
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      >
      <boxBufferGeometry/>
      <meshPhysicalMaterial
        map={texture}
        metalness={0}
        reflectivity={1}
        clearcoat={1}
        />
    </mesh>
  )
}

export default Box;
