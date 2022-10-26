import React from "react";

export default class State extends React.Component{
    constructor(){
        super()
       this.state={name:"codeplanet"}
       this.changeName=this.changeName.bind(this)
    }
    changeName(){
        this.setState({name:'jitendra'})
    }
    render(){
        return <>
        <p>{this.state.name}</p>
        <button onClick={this.changeName}>click here</button>
         </>
        

    }
}