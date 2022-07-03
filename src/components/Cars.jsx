import React, { Suspense, lazy } from "react";
import { Canvas, useFrame, extend, useThree, useLoader } from 'react-three-fiber';
import * as THREE from 'three'
import BoundingBox from "./BoundingBox";
import Dragables from "./Dragable";
const Model = lazy(() => import("./Model"));


const Cars = ({}) => {
  return (
  <Dragables transformGroup>

    <Suspense fallback={'lading'}>

    <BoundingBox
      visible
      position={[4,1,-1]}
      dims={[2.5,4,8]}
      >
      <Model
      path={'/tesla_model_3/scene.gltf'}
      scale={new Array(3).fill(0.01)}
      />
    </BoundingBox>

    <BoundingBox
      visible
      position={[-4,1,1]}
      dims={[2.5,4,7]}
      >
        <Model
        path={'/tesla_roadster_2020/scene.gltf'}
        scale={new Array(3).fill(1.36)}
        />
      </BoundingBox>
    </Suspense>
  </Dragables>

  );

}


export default Cars