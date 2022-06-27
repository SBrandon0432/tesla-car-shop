import React from "react";
import * as THREE from 'three'

const Color = (props) => {


  const handleClick = (e) => {
    console.log(window.activeMesh.material.color)
    console.log(e.target)
    if (!window.activeMesh) return;
    window.activeMesh.material.color = new THREE.Color(e.target.style.Background);
  }

  return (
    <div className="color">
        <div
        className="color__blue"
        onClick={handleClick}
        >
        </div>

        <div
        className="color__yellow"
        onClick={handleClick}
        >
        </div>

        <div
        className="color__white"
        onClick={handleClick}
        >
        </div>
    </div>
  )

}

export default Color