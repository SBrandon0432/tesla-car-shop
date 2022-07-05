import React, {lazy, Suspense} from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useBox } from '@react-three/cannon';

const Model = props =>{


  const model = useLoader(
    GLTFLoader, props.path
  )

  model.scene.traverse(child => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.FrontSide;
    }
  })
  console.log(model.scene)

  return (
      <primitive
        scale={props.scale}
        object={model.scene}
      />

  )

}

export default Model