import React from 'react';
//import Table from "react-bootstrap/Table";
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
  Table,
  Row
} from 'reactstrap';
const GridCompras = ({ posts, loading }) => {
  if (loading) return <h2>Loading...</h2>;
  //debugger;
  return (

    <Table striped bordered hover variant="ligh">
    <thead>
      <tr>
        <th>Nº</th>
        <th>Serie</th>
        <th>Numero</th>
        <th>Fecha Emisión</th>
        <th>Fecha Vencimiento</th>
        <th>Total</th>
        <th>Detalle</th>
      </tr>
    </thead>
    <tbody>
        {
            posts.map(
                (post,i)=>(
                    <tr>
                    <td>{i+1}</td>
                    <td>{post.serieComprobante}</td>
                    <td>{post.numeroComprobante}</td>
                    <td>{post.fechaEmision}</td>
                    <td>{post.fechaVencimiento}</td>
                    <td>{post.total}</td>
                    <td>{"Detalle"}</td>
                  </tr> 
                )
            )
        }


      
    </tbody>
  </Table>







  );
};

export default GridCompras;