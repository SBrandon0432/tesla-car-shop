import React, { Suspense, lazy } from "react";
import { Canvas, useFrame, extend, useThree, useLoader } from 'react-three-fiber';
import * as THREE from 'three'
import BoundingBox from "./BoundingBox";
import Dragables from "./Dragable";
const Model = lazy(() => import("./Model"));


const Cars = ({}) => {
  return (

  <Suspense fallback={null}>

    <Dragables transformGroup>
      <BoundingBox
        position={[4,0.57,1]}
        dims={[2.5,4,8]}
        >
          <Model
          path={'/tesla_model_3/scene.gltf'}
          scale={new Array(3).fill(0.01)}
          />
      </BoundingBox>
    </Dragables>

      <BoundingBox
        position={[-4,0,1]}
        dims={[2.5,4,7]}
        >
          <Dragables>
            <Model
            path={'/tesla_roadster_2020/scene.gltf'}
            scale={new Array(3).fill(1.36)}
            />
          </Dragables>
      </BoundingBox>

    {/* <Dragables transformGroup> */}

      <BoundingBox
        position={[7.6,1.4,1.2]}
      >
        <group rotation={[0, 260.6, 0]}>
          <Model
            path={'/mech_drone/scene.gltf'}
            scale={new Array(3).fill(1.36)}
            />
          </group>
       </BoundingBox>
    {/* </Dragables> */}

    </Suspense>

  );

}


export default Cars