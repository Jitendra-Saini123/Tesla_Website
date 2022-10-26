import React from "react";

export default class Counter extends React.Component{
    constructor(){
        super()
       this.state={counter:1}
       this.increment=this.increment.bind(this)
       this.decrement=this.decrement.bind(this)

        
    }

    increment(){
       this.setState({counter:this.state.counter+1})

    }
    decrement(){
       this.setState({counter:this.state.counter-1})

    }
    render(){
    return <>
    <button onClick={this.increment}>+</button>
    <p>{this.state.counter}</p>
    <button onClick={this.decrement}>-</button>
    
    
    </>
    }
}    