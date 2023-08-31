import React, { Component } from 'react'

export default class Glass_Test extends Component {
  render() {
    let {id,price,name,url,desc} = this.props.dataTest
    return (
      <div style={{position: 'relative',width: '100%', height: '100%'}} >
        <img
        style={{width: '100%', height: '100%'}}
        src="./glassesImage/model.jpg" alt />
        <div
        className='p-1'
        style={{width: '100%', height: '100px',backgroundColor: 'orange', opacity: '0.5',position: 'absolute',bottom: 0, left: 0}}>
            <h3 className='text-primary'>{name}</h3>
            <p>{desc}</p>
        </div>
        <img 
        style={{width: '50%', height: '100px',position: 'absolute',top: '20%', left: '25%',opacity: '0.5'}}
        src={url} alt=""></img>
      </div>
    )
  }
}
