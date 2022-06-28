import React, {useRef, useEffect, Suspense, lazy, useState} from "react";
import { Canvas, useFrame, extend, useThree, useLoader } from 'react-three-fiber';
import * as THREE from 'three'
import { Physics, Debug } from "@react-three/cannon";
import Color from '../components/Color';
import Box from '../components/Box';
import Background from "../components/Background";
import Bulb from "../components/Bulb";
import Controls from "../components/Controls";
import Floor from "../components/Floor";
import Dragables from "../components/Dragable";
const Model = lazy(() => import("../components/Model"));

function App() {



  const handleClick = (e) => {
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

      {/* <Dragables>

        <Suspense fallback={null}>
          <Model
          args={[10,10,10]}
          path={'/tesla_model_3/scene.gltf'}
          />
        </Suspense>
      </Dragables> */}

        <Controls />
        <axesHelper args={[5]}/>

        <Physics allowSleep={false} iterations={15} gravity={[0, -200, 0]}>
            <Debug color="black" scale={1.1}>
              <Dragables>

              <Suspense fallback={null}>
                  <Box position={[4,2,0]} />
              </Suspense>
              </Dragables>

            <Suspense fallback={null}>
              <Box position={[-4,2,0]}/>
            </Suspense>

          <Floor position={[0,-.5,0]}/>
          </Debug>
        </Physics >

        <Suspense fallback={null}>
          <Background/>
        </Suspense>


      </Canvas>
    </div>
  );

}

export default App;
