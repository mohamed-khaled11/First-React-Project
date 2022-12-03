import React, { Component } from 'react'
import MembersInfo from './MembersInfo'
export class ShowingBtn extends Component {
    constructor(){
        super()
        this.state ={
            info:MembersInfo,
            count:0
        }
        this.ClickHandler = this.ClickHandler.bind(this)
    }
    
    ClickHandler(){
        console.log(this.state.info[this.state.count].id)
        this.state.count +=1;
    }
  render() {
    return (
      <div>
        <button onClick={this.ClickHandler} type='button' className='btn btn-primary btn-lg btn-block'>Show</button>
      </div>
    )
  }
}

export default ShowingBtn