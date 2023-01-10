import axios from "axios";

const getAccount = async (token:string) => {
    const response = await axios.get('/api/account',{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

export default getAccount;