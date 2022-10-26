import styled from "./styled-components";
export default function TeslaSection(props){
    return(
        <>
        <MainSection bg={props.bgimage}>
            <car>
                <h1>{props.name}</h1>
                <p>{props.tagline}</p>

            </car>
            <Buttons>
                <LButton>
                    {props.lbuttontext}
                </LButton>
                <RButton>
                    {props.rbuttontext}
                </RButton>
             </Buttons>
        </MainSection>
        </>
    )
}
const MainSection=styled.div`
background-image:url(images/${props=>props.bg});
background-repeat:no-repeat;
background-position:center;
background-size:cover;
height:100vh;

`
const Car=styled.div`
display:flex;
padding-top:40vh;
position:fixed;
flex-direction:column;
align-items:center;
justify-content:center;
`
const Buttons=styled.div`
text-align:center;
paddinf-top:48vh;

`
const LButton=styled.a`
background:rgb(25,30,35);
color: #fff;
height:20px;
width:200px;
padding:10px;
margin:60vh 1rem;
border-radius:100px;
border:none;
display:inline-block;
opacity:0.8;


`
const RButton=styled.a`
background:#fff;
color:#000;
height:20px;
width:200px;
padding:10px;
margin:60vh 1rem;
border-radius:100px;
border:none;
display:inline-block;
opacity:0.8;
`