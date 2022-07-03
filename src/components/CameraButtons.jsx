import React from "react";
import state from "../state";
import Color from "./Color";

const CameraButtons = ({}) => {


  const sets = {
    1: {
      cameraPos: [7,7,7],
      target: [4,0,0]
    },
    2: {
      cameraPos: [-3,7,7],
      target: [-4,0,0]
    }
  }

  const handleClick = (num) => {
    state.cameraPos.set(...sets[num].cameraPos)
    state.target.set(...sets[num].target)
    state.shouldUpdate = true;
  }

  return (

    <div className="camera__buttons">
      <button className=" camera__buttons camera__buttons--left"
        onClick={(e)=> {
          handleClick(2)
        }}

      >
          {'<'}
      </button>
      <button className=" camera__buttons camera__buttons--right"
        onClick={(e)=> {
          handleClick(1)
        }}
      >
          {'>'}
      </button>
    </div>
  )


}

export default CameraButtons;