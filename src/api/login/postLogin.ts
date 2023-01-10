import axios from "axios";

export type TypeLoginParam = {
    username:string;
    password:string;
    rememberMe:boolean
}

const postLogin = async (formData:TypeLoginParam) => {
    const response = await axios.post('/api/authenticate', formData);
    return response.data;
}

export default postLogin;