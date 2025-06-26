import { useState } from "react";
import { convertCurrency } from "../services/api";

export const useCurrencyConverter = () => {
    const [formData , setFormData]= useState({
        from:'',
        to:'',
        amount:''
    })

    const [result, setResult] = useState(null)
    const [error , setError] = useState('')

    const handleChange = (e) => {
        const { name, value}= e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]:value
        }))
    }

    const handleSummit = async (e) => {
        e.preventDefault()
        const response = await convertCurrency(formData)
        if(response.error){
            setError(response.message)
            setResult(null)
        }else{
            setResult(response.data)
            setError('')
        }
    }
    return{
        formData,
        result,
        error,
        handleChange,
        handleSummit,
    }
}