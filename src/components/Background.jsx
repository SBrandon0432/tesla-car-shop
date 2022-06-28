import React, {useRef, useMemo} from "react";
import { ReactThreeFiber, Canvas, useFrame, extend, useThree, useLoader } from 'react-three-fiber';
import * as THREE from 'three';
import shop from '../Assets/autoshop.jpg';


const Background = (props) => {
  const {gl} = useThree();
  const texture = useLoader(THREE.TextureLoader, shop);
  // const formatted = new THREE.WebGLCubeRenderTarget(texture.image.height).fromEquirectangularTexture(gl , texture);  does not work idk why

  texture.encoding = THREE.sRGBEncoding;
  texture.mapping = THREE.EquirectangularReflectionMapping;
  return (
    <primitive attach='background' object={texture}/>
  )

}

export default Background;