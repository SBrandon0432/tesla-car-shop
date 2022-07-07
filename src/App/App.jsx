import React, {useRef, useEffect, Suspense, lazy, useState} from "react";
import { Canvas, useFrame, extend, useThree, useLoader } from 'react-three-fiber';
import * as THREE from 'three'
import { Physics, Debug } from "@react-three/cannon";
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import Color from '../components/Color';
import Background from "../components/Background";
import Controls from "../components/Controls";
import Floor from "../components/Floor";
import Cars from "../components/Cars";
import CameraControls from "../components/CameraControls";
import CameraButtons from "../components/CameraButtons";
import state from "../state";
import Lights from "../components/Lights";
import Effects from "../components/Effects";

function App() {


  return (
    <div className='App' >
      <div className="controls">
        <CameraButtons />
        <Color/>
      </div>

      <Canvas className="ThreeD"
        shadows
        >
          <Lights/>
          <Controls />
          <CameraControls/>
        <axesHelper args={[5]}/>

        <Physics gravity={[0,0,0]}>
            <Cars/>
        </Physics>

        <Physics iterations={15} gravity={[0, -7, 0]}>
          <Floor position={[0,-.5,0]}/>
        </Physics >

        <Suspense fallback={null}>
          <Background/>
        </Suspense>

        <Effects/>
      </Canvas>
    </div>
  );

}

export default App;
