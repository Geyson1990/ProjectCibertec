import React, { useState, useEffect } from "react";

import axios from "axios";
//import Pagination from "react-bootstrap/Pagination";
//import Pagination from "../../../components/Pagination/Pagination.js";
import GridCompras from "./GridCompras";
//import getConsultar from "../../services/certificadoService.js";
import {_obtenerCompras} from './../../../services/contabilidadaService';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from 'reactstrap';
const Compras = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const [ error, guardarError ] = useState(false);
  const stateInicial = {
    TipoDocumento: "",
    NumeroDocumento: "",
    NombresEstudiante: "",
    FechaSolicitud: "",
    EstadoSolicitud: ""
  };

  // certificado = state actual
  // actualizarCertificado = fn para cambiar el state
  const [certificado, actualizarCertificado] = useState(stateInicial);

  // actualiza el state
  const actualizarState = e => {
    
    actualizarCertificado({
      ...certificado,
      [e.target.name]: e.target.value
    });
  };

  // pasamos la cita al componente principal
  const enviarValores = e => {
    e.preventDefault();

    console.log(certificado);

    // pasar la cita hacia el componente principal
    // crearCertificado(certificado)
    // Reiniciar el state (reiniciar el form)

    actualizarCertificado(certificado);

  
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
    
      const res = await _obtenerCompras();
        //const res= getConsultar(certificado);
      //console.log(abc);
  debugger;
      setPosts(res);
      console.log("Hello:", res);
  
      setLoading(false);
    };

    fetchPosts();
  }, [certificado]);

  console.log(posts);


  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  //debugger;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  //Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  function actualizarValores(e) {
    //onsole.log(e.target.value);
   
    //setConsulta(oConsulta);
  }

  return (
    <div className="card mt-2 py-2 center">


      <Form className="center" onSubmit={enviarValores}>
        <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label">
            Tipo de comprobante:
          </label>
          <div className="col-sm-8 col-lg-4 ">
            <select name="TipoDocumento" className="form-control" onChange={actualizarState} value={certificado.tipoDocumento}>
              <option value="0">Seleccione...</option>
              <option value="1">Boleta</option>
              <option value="2">Factura</option>
            </select>
          </div>

          <label className="col-sm-4 col-lg-2 col-form-label">
            Número de comprobante:
          </label>
          <div className="col-sm-8 col-lg-4">
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese el N° comprobante"
              name="NumeroComprobante"
              id="NumeroComprobante"
              onChange={actualizarState}
            />
          </div>
        </div>

       
          <label className="col-sm-4 col-lg-2 col-form-label">
            Fecha de solicitud:
          </label>
          <div className="col-sm-8 col-lg-4">
            <input
              type="date"
              className="form-control"
              name="FechaSolicitud"
              id="FechaSolicitud"
              onChange={actualizarState} 
              value={certificado.fechaSolicitud}
            />
          </div>

        
        <div className="card-body center ">
          <input
            type="submit"
           // onClick={actualizarValores()}
            className="btn btn-dark col-2 nl-2"
            value="Buscar"
          />
          <input
            type="reset"
            className="btn btn-dark col-2 ml-2"
            value="Limpiar"
          />
        </div>

        

        <GridCompras
        posts={currentPosts} 
        loading={loading} />

        {/*<div className="">
          <Pagination
            postPerPage={postPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>*/}
      </Form>
    </div>
  );
};

export default Compras;
