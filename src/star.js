import React from "react";
 import starRatingComponent from 'react-this.state.'


function star(props) {
  return (
    <div>
      <starRatingComponent
      name="ratel"
      starCount={5}
      value={props.rate}      
      />
    </div>
  )
}

export default star
