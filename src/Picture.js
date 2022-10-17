import React, { Component } from 'react';
import U4_PA1 from './U4_PA1.PNG';
export class Picture extends Component {

  render() {
    return(
      <div className="picture">
      <img alt="rock" src={U4_PA1} />
      <p>Guess what this is.</p>
      </div>
    )
  }

}

export default Picture;