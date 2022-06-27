import React from "react";
import * as THREE from 'three'

const Color = (props) => {

  const {handleClick} = props

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