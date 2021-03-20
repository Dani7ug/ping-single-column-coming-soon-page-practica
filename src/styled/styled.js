import Styled,{css} from "styled-components";


const Img = Styled.img`
 width:600px;
 margin:10px 0px 100px 0;

 @media (max-width:600px){
     width:350px;
     height:350px;
 }
 @media (max-width:400px){
     width:320px;
     height:350px;
 }
`
const Container = Styled.div`
font-family:'Libre Franklin', sans-serif;
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
 padding:30px 20px;
`
const Formulario = Styled.form`
 text-align:center;
   width:40%;
 @media (max-width:770px){
     width:90%;
 }
`
const Btn = Styled.button`
 border-radius:none;
 border-radius:30px;
 height:46px;
`
const Input = Styled.input`
 border-radius:none;
 border-radius:30px;
 padding:10px 30px;
 margin: 0 -15px ;
 &::placeholder{
     color:hsl(0, 0%, 59%);
 }
 @media (max-width:770px){
     margin:0 ;
 }
 ${(props) =>
     props.validacion &&
     css`
     border:1px solid hsl(354, 100%, 66%);
     `
 }
`
const ContInput = Styled.div`
 padding:0;
 @media (max-width:770px){
     margin:0 0 15px 0;
 }
`
const Social = Styled.div`
@media (max-width:570px){
    margin:20px 0 20px 0;
}
`
const TextError = Styled.p`
color:hsl(354, 100%, 66%);
text-align:start;
margin:0 0 0 20px;
@media (max-width:767px){
     text-align:center;
 }
`
const Title = Styled.h1`
margin:50px 0px 20px 0;
color:hsl(0, 0%, 59%);
`
const B = Styled.b`
color:#1a1a1a;
`
const Copyright = Styled.p`
 color:hsl(0, 0%, 59%);
`
export {Img,Container,Formulario,Btn,Input,ContInput,Social,TextError,Title,B,Copyright}