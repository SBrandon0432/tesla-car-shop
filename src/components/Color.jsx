import React from "react";
import * as THREE from 'three'
import state from "../state";

const Color = (props) => {

  // const {handleClick} = props

  const handleClick = (e) => {
    if (!state.activeMesh) return;
    state.activeMesh.material.color = new THREE.Color(e.target.style.background);
  }

  return (
    <div className="color">
    <div
      className="color__blue"
      style={{background: 'blue'}}
      onClick={handleClick}
      >
    </div>

    <div
      className="color__yellow"
      style={{background: 'yellow'}}
      onClick={handleClick}
      >
    </div>

    <div
      className="color__white"
      onClick={handleClick}
      style={{background: 'white'}}
      >
    </div>
</div>
  )

}

export default Color