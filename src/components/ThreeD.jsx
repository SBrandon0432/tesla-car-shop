import React, {useRef, useEffect, Suspense, lazy} from "react";
import { ReactThreeFiber, Canvas, useFrame, extend, useThree, useLoader } from 'react-three-fiber';
import * as THREE from 'three';
import Box from './Box';
import Background from "./Background";
import Bulb from "./Bulb";
import Controls from "./Controls";
const Model = lazy(() => import("./Model"));



const Floor = (props) => {

  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[20,1,10]}/>
      <meshPhysicalMaterial/>
    </mesh>
  )
}

const ThreeD = () => {


  return (
    <Canvas className="ThreeD"
      shadows
      camera={{position:[200,200,200]}}
    >

      <ambientLight intensity={0.5}/>
      <Bulb position={[0, 3, 0]}/>

      <Suspense fallback={null}>
        <Model args={[10,10,10]} path={'/tesla_model_3/scene.gltf'}/>
      </Suspense>

      <Controls/>
      <axesHelper args={[5]}/>

      <Suspense fallback={null}>
        <Box position={[4,2,0]}/>
      </Suspense>

      <Suspense fallback={null}>
        <Box position={[-5,2,0]}/>
      </Suspense>

      <Suspense fallback={null}>
        <Background/>
      </Suspense>

      <Floor position={[0,-.5,0]}/>

    </Canvas>
  )
}


export default ThreeD;