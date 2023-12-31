import React, { Component } from 'react'
import Glass_BackG from './Glass_BackG'
import Glass_Test from './Glass_Test'
import Glass_Text from './Glass_Text'
import Glass_Img from './Glass_Img'
import Glass_Product from './Glass_Product'
import Glass_Product_Item from './Glass_Product_Item'
import data from './dataGlasses.json'

export default class Glass_Layout extends Component {
    state = {
        data: data,
        dataTest:data[0]
    }
handleTestItem = (id) => {
   this.setState({
    dataTest: data[id-1]
   })
    }
  render() {
    return (
        <div style={{background:'url("./glassesImage/background.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center', width: '100%', height: '100%',position:'relative'}}>      
        <Glass_BackG />  
        <Glass_Text />
        <div className='container'>
            <div className='row'>
                <div style={{width: '400px', height: '600px'}} className='col-6 p-5'><Glass_Test dataTest={this.state.dataTest}/></div>
                <div style={{width: '400px', height: '600px'}} className='col-6 p-5'><Glass_Img/></div>
            </div>   
        </div>
            <div className='container d-flex justify-content-center align-items-center' style={{boxShadow:`rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`}}>
            <Glass_Product data={this.state.data} handleTestItem={this.handleTestItem}/>
            </div>
        </div>

    )
  }
}
