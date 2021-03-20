import React,{useState} from 'react'

const useForm = validate => {
    const [state, setstate] = useState({campo:""})
    const [errors,setErrors] = useState({})

    const OnChange = (e)=>{
        setstate({...state,campo:e.target.value})
    }
    const OnSubmit = (e)=>{
        e.preventDefault()
        setErrors(validate(state))
    }
    return {OnSubmit,OnChange,state,errors}
}

export default useForm
