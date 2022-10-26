import React from "react";
import Header from "./header";
import Section from "./section";
import Footer from "./footer";

export default class Home extends React.Component{
    render(){
        return <>
        <Header/>
        <Section/>
        <Footer/>
        </>
    }
}