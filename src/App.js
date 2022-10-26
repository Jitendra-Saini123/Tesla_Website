// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { useState } from "react";
import ReactDom from "react-dom/client";
import styled from "./styled-components";


const App = () => {
    let time = new Date().toLocaleTimeString();
    const[ctime,setCtime] = useState(time);
    const UpdateTime = () =>{
        let time = new Date().toLocaleTimeString();
        setCtime(time);

    };
    setInterval(UpdateTime,1000);
    return(
        <>
        <Head>
            <h1>Digital Clock Made by Jitendra</h1>
        </Head>
        
        <Header>
        <h1>{ctime}</h1>
        </Header>
        </>
    );

};
const Head=styled.div`
h1{
    font-size:70px;
    display:flex;
    justify-content:center;
    color:indigo;
}

`
const Header=styled.div`
h1{
    border:40px solid black;
    background-color:aqua;
    width:60vw;
    font-size:150px;
    margin:6vw;
    margin-left:12vw;
    padding:70px;
    display:flex;
    justify-content:center;
    border-radius:20%;
}

`
export default App;


