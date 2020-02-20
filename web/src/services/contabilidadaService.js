import axios from 'axios';
import { obtenerAuthToken } from "./authService";

export async function _obtenerProveedor(proveedorId){

    const resultado = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/proveedor/${proveedorId}`, {
        headers: {
            Authorization: `Bearer ${await obtenerAuthToken()}`
        }
    })
    return resultado.data;
};


export async function _guardarCompras(request){

    const resultado = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/Compras`, request,{
        headers: {
            Authorization: `Bearer ${await obtenerAuthToken()}`
        }
    });
    return resultado.data;
}

export async function _obtenerCompras(){

    const resultado = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/Compras`, {
        headers: {
            Authorization: `Bearer ${await obtenerAuthToken()}`
        }
    });
    return resultado.data;
}

export default {
    _obtenerProveedor,
    _obtenerCompras,
    _guardarCompras
  };