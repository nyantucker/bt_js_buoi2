import React, { Component } from 'react'

export default class Glass_BackG extends Component {
  render() {
    return (
      <div>
  <img 
  style={{position: 'absolute', width: '100%', height: '100%', backgroundColor: 'black', opacity: '0.3', top: 0, left: 0, zIndex: -2}} 
  src="./glassesImage/background.jpg" alt />
      </div>
    )
  }
}
