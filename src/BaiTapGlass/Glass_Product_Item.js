import React, { Component } from 'react'

export default class Glass_Product_Item extends Component {
  render() {
    let {id,url} = this.props.item
    return (
      <div className='col-4' style={{boxShadow:`rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px`}}>
        <button className='m-4' onClick={()=>{this.props.handleTestItem(id)}} style={{border:'none',background:'none'}}><img style={{width:'100%'}} src={url}></img></button>
      </div>
    )
  }
}


