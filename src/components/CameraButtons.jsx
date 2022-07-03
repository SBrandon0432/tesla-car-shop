import React from "react";
import state from "../state";

const CameraButtons = ({}) => {


  return (

    <div className="camera__buttons">
      <button className=" camera__buttons camera__buttons--left">
          {'<'}
      </button>
      <button className=" camera__buttons camera__buttons--right">
          {'>'}
      </button>
    </div>
  )


}

export default CameraButtons;