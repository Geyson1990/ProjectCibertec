
import axios from 'axios';

//const baseURLEnviroment = 'http://10.36.132.79/ws/api';
/*PRE-PRODUCCION*/
//const baseURLEnviroment = 'http://10.200.4.32:8061/api/';
/*DESARROLLO*/
//const baseURLEnviroment = 'https://localhost:44386/api/';
const baseURLEnviroment =process.env.REACT_APP_API_ENDPOINT + '/api';

const httpService = axios.create({
  baseURL: baseURLEnviroment
});

function setJwt(jwt) {
  httpService.defaults.headers.common['Authorization'] = 'Bearer ' + jwt;
}

export default {
  setJwt,
  get: httpService.get,
  post: httpService.post,
  put:httpService.put
};
