import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import {obtenerToken} from './services/authService';
//import  Login from '';
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const FrmLogin = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  // comprobar si existe un token
  React.useEffect(() => {
    if (localStorage.getItem("cibertec-token")) {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return <Login onAuthenticate={() => { setIsAuthenticated(true) }} />
  }
  return <Admin onSignOut={() => { setIsAuthenticated(false) }} />
}

const Login = () => {
  const validarCredenciales = async (username, password) => {
    const tokenData = await obtenerToken(username, password);
    console.log("nuevo token", tokenData.accessToken);
    // escribir el token en el local storage
    if (tokenData.accessToken) {
      localStorage.setItem("cibertec-token", tokenData.accessToken);
      localStorage.setItem("cibertec-refresh-token", tokenData.refreshToken);
      const expirationDateMs = new Date().getTime() + tokenData.expiresIn * 1000;
      localStorage.setItem("cibertec-token-expiration-ms", expirationDateMs.toString());
    }
    window.location.reload();
  }
  const iniciarSesion = (e) => {
    e.preventDefault();
    console.log("Se va a iniciar sesión");
    const username = e.target["username"].value;
    const password = e.target["password"].value;
    validarCredenciales(username, password);
  }
  return <div className="container-fluid shadow-sm p-3 mb-5 bg-white rounded mt-5" style={{ maxWidth: 480 }}>
    <h2 className="mb-3">Iniciar Sesión</h2>
    <form onSubmit={iniciarSesion}>
      <div className="form-group">
        <label>Usuario</label>
        <input type="text" name="username" className="form-control"></input>
      </div>
      <div className="form-group">
        <label>Contraseña</label>
        <input type="password" name="password" className="form-control"></input>
      </div>
      <div>
        <button className="btn btn-primary">Iniciar</button>
      </div>
    </form>
  </div>


}

const Admin = () => {


  return (
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
          <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
          <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
          <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
          <Route path="/" name="Home" render={props => <DefaultLayout {...props} />} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );

}

export default App;
