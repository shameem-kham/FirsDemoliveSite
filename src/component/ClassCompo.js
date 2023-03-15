import React  from "react";

class ClassCompo extends React.Component{
    constructor(){
        super()
        this.state= { name:'shameem', color:'green', age:0}
    }

    changeName = (e) =>{
           
       if(e.target.id === 'name'){

        this.setState({name:e.target.value})
       }
       if(e.target.id === 'color'){

          this.setState({color:e.target.value})
       }
       if(e.target.id==='age'){
        
        this.setState({age:e.target.value},this.checkAge)  // this is a example of callback function line number 21 to 32

       }
    }

    checkAge = () =>{

        if(this.state.age>=21){
           console.log("age is valid")
        }
        else{
            console.log("age is not valid")
        }
    }
   
    render(){
        return(
            <div>
                <h1>class component</h1>
                <h2>this is h2 tag</h2>
                <input type="text" id="name" placeholder="enter your name" onChange={this.changeName} />
                <input type="text" id="color" placeholder="enter your color" onChange={this.changeName} />
                <input type="text" id="age" placeholder="enter your age" onChange={this.changeName} />
                <h3>my name is {this.state.name}</h3>
                <h3>my name is {this.state.color}</h3>
                <h3>my age is {this.state.age}</h3>
            </div>
        )
    }
}
export default ClassCompo