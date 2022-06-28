import React, {useRef, useEffect, useState} from "react";
import {DragControls} from 'three/examples/jsm/controls/DragControls';
import {extend, useThree} from 'react-three-fiber';
extend({DragControls})


const Dragables = (props) => {
  const groupRef = useRef();
  const controlsRef = useRef();
  const [children, setChildren] = useState([]);
  const {camera, gl, scene} = useThree();

  useEffect(()=> {
    setChildren(groupRef.current.children)
  },[])


  useEffect(()=> {
    controlsRef.current.addEventListener(
      'hoveron',
       e => scene.orbitControls.enabled = false
    )
  },[children])

  return (
    <group ref={groupRef}>
      <dragControls
      ref={controlsRef}
      args={[children, camera, gl.domElement]}/>
      {props.children}
    </group>
  )
}

export default Dragables;