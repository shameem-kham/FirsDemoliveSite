import  { Component } from 'react'

export class ComponentWillMount extends Component {
    constructor(){
        super()
        this.state = {msg : 'this is my initial phase'}
    }  
    componentWillMount(){
        this.setState = ({msg:'this is update phase'})
    }

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
      </div>
    )
  }
}

export default ComponentWillMount
