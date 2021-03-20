import React from 'react'
import Image from "./images/illustration-dashboard.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebookF,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons"
import Icon from "./images/logo.svg"
import useForm from './componentes/useForm'
import { Img,Container, Formulario, Btn,Input, ContInput, Social, TextError, Title } from './styled/styled'
import validate from "./componentes/validateInfo"

const App = () => {
  const {OnSubmit,OnChange,state,errors} = useForm(validate)
  const iconos = [
    {
      id:1,
      icono:faFacebookF
    },
    {
      id:2,
      icono:faTwitter
    },
    {
      id:3,
      icono:faInstagram
    }
  ]
  return (
    <Container className="container text-center ">
        <img src={Icon} alt=""/>
        <Title className="display-4">  We are launching <b>soon!</b></Title>
        <p> Subscribe and get notified</p>
        <Formulario className="" onSubmit={OnSubmit}>
            <div className="form-group row my-4">
          <ContInput className="col-md-9">
          <Input type="text" className="form-control col-md-9" onChange={OnChange} value={state.campo} placeholder="your email address" validacion={errors.bool}/>
          {errors.state && <TextError>{errors.state}</TextError>}
          </ContInput>
          <Btn className="btn btn-primary col-md-3">Notify Me</Btn>
          </div>

        </Formulario>
        <Img src={Image} alt=""/>
        <Social className=" row">
          {iconos.map(ico =>(
            <a className=" col-4" key={ico.id}>
            <FontAwesomeIcon icon={ico.icono}  className=""/>   
              </a> 
          ))}
        </Social>
        <p>&copy; Copyright Ping. All rights reserved.</p>
    </Container>
  )
}

export default App

