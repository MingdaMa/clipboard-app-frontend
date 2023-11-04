const url = 'http://localhost:8080/api'
import axios from 'axios'

const getAxiosInstance = () => {
    const defaultOptions = {
        baseURL: url,
        method: 'get',
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      };
    
      // Create instance
      let instance = axios.create(defaultOptions);
    
      return instance;
}

export default getAxiosInstance;

