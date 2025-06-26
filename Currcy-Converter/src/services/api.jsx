import axios from 'axios';

export const convertCurrency = async (formData) => {
    try{
        return await axios.post('http://127.0.0.1:5174/api/v1/convert', formData)
    }catch{
        return{
            error:true,
            message:error.response.data
        }
    }
}