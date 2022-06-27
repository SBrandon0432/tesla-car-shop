import React from "react";

const Color = (props) => {

  const {handleClick} = props


  return (
    <div className="color">
        <div
        className="color__blue"
        onClick={handleClick}
        >

        </div>
    </div>
  )

}

export default Color