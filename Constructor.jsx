import React, { Component } from 'react'

class Constructor extends Component {
    constructor(){
        super()
        // console.log("m constructor hon")
        this.state ={
            name: "Zainab"
        }
    }
  render() {
    // console.log("M render hon")
    return (
      <>
      <h2>Constructor in Life cycle Method.</h2>
      <h3> hello, {this.state.name}</h3>

        
      </>
    )
  }
}

export default Constructor
