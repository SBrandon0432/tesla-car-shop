import React from "react";
import state from "../state";
import Color from "./Color";

const CameraButtons = ({}) => {


  const sets = {
    //model 3
    1: {
      cameraPos: [7,7,7],
      target: [4,0,0],
      name: 'Capot001_CAR_PAINT_0'
    },
    //sport
    2: {
      cameraPos: [-3,7,7],
      target: [-4,0,0],
      name: 'TRDEF-Body_car_main_paint_0'
    }
  }

  const handleClick = (num) => {
    state.cameraPos.set(...sets[num].cameraPos)
    state.target.set(...sets[num].target)
    state.activeMeshName = sets[num].name
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