import React, {useRef, useEffect, Suspense, lazy, useState} from "react";
import { ReactThreeFiber, Canvas, useFrame, extend, useThree, useLoader } from 'react-three-fiber';
import Color from '../components/Color';
import * as THREE from 'three'
import Box from '../components/Box';
import Background from "../components/Background";
import Bulb from "../components/Bulb";
import Controls from "../components/Controls";
import Floor from "../components/Floor";
const Model = lazy(() => import("../components/Model"));

function App() {



  const handleClick = (e) => {
    console.log(e.target.style)
    if (!window.activeMesh) return;
    window.activeMesh.material.color = new THREE.Color(e.target.style.background);
  }

  return (
    <div className='App'>
      <Color handleClick={handleClick}/>
      <Canvas className="ThreeD"
        shadows
        camera={{position:[10,10,10]}}
        >

        <ambientLight intensity={1.5}/>
        <Bulb position={[0, 3, 0]}/>

        {/* <Suspense fallback={null}>
          <Model
          args={[10,10,10]}
          path={'/tesla_model_3/scene.gltf'}
          />
        </Suspense> */}

        <Controls/>
        <axesHelper args={[5]}/>

      <Suspense fallback={null}>
          <Box position={[4,2,0]} />
      </Suspense>

        <Suspense fallback={null}>
          <Box position={[-4,2,0]}/>
        </Suspense>

        <Suspense fallback={null}>
          <Background/>
        </Suspense>

        {/* <Floor position={[0,-.5,0]}/> */}

      </Canvas>
    </div>
  );

}

export default App;
