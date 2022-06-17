import React, {useRef} from "react";
import { Canvas, useFrame } from 'react-three-fiber';



const Box = () => {
  const ref = useRef<any>();
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

const ThreeD = () => {

  return (
    <Canvas className="ThreeD">
     <Box />
    </Canvas>
  )
}


export default ThreeD;