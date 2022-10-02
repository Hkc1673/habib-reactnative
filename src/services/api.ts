import { ENV_CONFIG } from '@config/envConfig';
import axios, {AxiosInstance} from 'axios';


const apiInstance: AxiosInstance = axios.create({
  baseURL: ENV_CONFIG.API_URL,
  withCredentials: false,
});

apiInstance.interceptors.request.use(async (config) => {

  config.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhYmlia2M3MUBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vSGtjMTY3MyIsImlhdCI6MTY2NDU3MjE5OSwiZXhwIjoxNjY1MDA0MTk5fQ.D2zrmU6jr9yECvkvPEOqQxgg_K8NsZSMvpT7Pwsn6Lk"
  }
  return config;

});

apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      (error.response && error.response.status === 401) ||
      (error.response && error.response.status === 403)
    ) {
      console.log("Error", error)
    }
    if(error.response && error.response.status === 400){
      console.log("status 400")
    }
    if(error.response && error.response.status === 404){
        console.log("status 404", error.config.url)
      }
    return Promise.reject(error);
  }
);

export default apiInstance 
