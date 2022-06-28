import React, {lazy, Suspense} from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useBox } from '@react-three/cannon';

const Model = props =>{


  const model = useLoader(
    GLTFLoader, props.path
  )


  return (

      <primitive
      castShadows
      scale={props.scale}
      object={model.scene}
      />

  )

}

export default Model