import React, {lazy} from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {useFLTF} from '@react-three/drei';

const Model = props =>{


  const model = useLoader(
    GLTFLoader, props.path
  )

  // const model = useGLTF('/scene.gltf')
  // const { nodes, materials } = useGLTF("/scene.gltf");

  // console.log(model)
  return (
   <primitive object={model.scene} scale={'.50'} position={[0,0,0]}/>
    // null
  )

}

export default Model