import React, { Component } from 'react'

export default class Glass_Product_Item extends Component {
  render() {
    let {id,url} = this.props.item
    return (
      <div className='col-2'>
        <button onClick={()=>{this.props.handleTestItem(id)}} style={{border:'none',background:'none'}}><img style={{width:'100%'}} src={url}></img></button>
      </div>
    )
  }
}
