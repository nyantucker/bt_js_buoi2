import React, { Component } from 'react'
import Glass_Product_Item from './Glass_Product_Item'

export default class Glass_Product extends Component {
  renderProducts = () => {
    return this.props.data.map((item,index)=>{
      return <Glass_Product_Item item={item} key={index} handleTestItem={this.props.handleTestItem} />
    })
  }
  render() {
    return (
      <div className='row m-2' style={{height:'100%'}} >
        {this.renderProducts()}
      </div>
    )
  }
}
