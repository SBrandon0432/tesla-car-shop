import React, {lazy, Suspense} from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {useFLTF} from '@react-three/drei';

const Model = props =>{


  const model = new useLoader(
    GLTFLoader, props.path
  )

  return (
    <Suspense>
      <primitive object={model.scene} scale={'.50'} position={[0,0,0]}/>
    </Suspense>
  )

}

export default Model