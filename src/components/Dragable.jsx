import React, {useRef, useEffect, useState} from "react";
import {DragControls} from 'three/examples/jsm/controls/DragControls';
import {extend, useThree} from 'react-three-fiber';
extend({DragControls})


const Dragables = (props) => {
  const groupRef = useRef();
  const [children, setChildren] = useState([]);
  const {camera, gl} = useThree();
  useEffect(()=> {
    setChildren(groupRef.current.children)
  },[])

  return (
    <group ref={groupRef}>
      <dragControls args={[children, camera, gl.domElement]}/>
      {props.children}
    </group>
  )
}

export default Dragables;