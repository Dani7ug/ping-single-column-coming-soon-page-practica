export default function valideInfo(state){
    const expresionRegular =/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    let errors = {}
   if(!expresionRegular.test(state.campo)){
        errors.state = "el email no es correcto"
        errors.bool = "false"
    }
    return errors
}