import axios from 'axios';
export async function obtenerToken(username, password){
    // crear el objeto que vamos a enviar
    const data = { username, password };
    // realizar el post a /account/token
    const response = await axios.post(process.env.REACT_APP_API_ENDPOINT+`/account/token`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    // obtener el token de la respuesta
    return response.data;
}

export async function refreshToken() {
    // crear el objeto que vamos a enviar
    const data = { refreshToken: localStorage.getItem("cibertec-refresh-token") };
    // realizar el post a /account/token
    const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/account/token/refresh`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    // obtener el token de la respuesta
    return response.data;
}



export async function obtenerAuthToken(){
    // buscar un token en el local storage
    var localStorageToken = localStorage.getItem("cibertec-token");

    if (!localStorageToken) {
        // si no existe, entonces retornar null
        return null;
    }

    // si el token existe en el local storage, verificar si ya expiró
    const expirationDateMs = Number(localStorage.getItem("cibertec-token-expiration-ms"));

    // debugger;

    if (new Date().getTime() < expirationDateMs) {
        // significa que el token es vpalido, entonces retornarlo
        return localStorageToken;
    }

    // en el caso contrario, significa que el token ya expiró
    // obtener un nuevo token, utilizando el refresh token
    const refreshResult = await refreshToken();

    // escribir el token en el local storage
    if (refreshResult.accessToken) {
        localStorage.setItem("cibertec-token", refreshResult.accessToken);
        localStorage.setItem("cibertec-refresh-token", refreshResult.refreshToken);
        const expirationDateMs = new Date().getTime() + refreshResult.expiresIn * 1000;
        localStorage.setItem("cibertec-token-expiration-ms", expirationDateMs.toString());
    }

    // retornar el token guardado en el local storage
    return localStorage.getItem("cibertec-token");
}


export default {
    obtenerToken,
    refreshToken,
    obtenerAuthToken
  };