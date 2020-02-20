import React, { useState, useEffect } from "react";
import 'moment/locale/es-do';
import { DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import axios from "axios";

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
import { _guardarCompras } from "../../../services/contabilidadaService";
import ModalAviso from "../../Mensajes/ModalAviso";

const Compras = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(10);
    const [error, guardarError] = useState(false);
    const [FechaInicio, setFechaInicio] = useState("");
    const [FechaFin, setFechaFin] = useState("");

    const [lgShow, setLgShow] = useState(false);
    const handleLgClose = () => setLgShow(false);

    const stateInicial = {
        TipoDocumento: "",
        NumeroDocumento: "",
        NombresEstudiante: "",
        FechaSolicitud: "",
        EstadoSolicitud: ""
    };
    const [state, setState] = useState({
        datePickerDate: '2015-05-13',
        datePickerDateEnd: '2015-05-13',
        datePickerInputDate: null,
        datePickerInputDate2: null,
        showInput: true,
        disabled: false
    });
    const onClear = () => {
        setState({
            datePickerDate: null,
            datePickerDateEnd: null
        });
    };

    // pasamos la cita al componente principal
    const enviarValores = e => {
        e.preventDefault();

        let request = {
            "NUMERO_COMPROBANTE": document.getElementById("NumeroComprobante").value,
            "SERIE_COMPROBANTE": document.getElementById("SerieComprobante").value,
            "FECHA_EMISION": document.getElementById("FechaVencimiento").value,
            "FECHA_VENCIMIENTO": document.getElementById("FechaVencimiento").value,//document.getElementById("FechaVencimiento").value,
            "SUBTOTAL": parseFloat(document.getElementById("Subtotal").value),
            "IGV": parseFloat(document.getElementById("IGV").value),
            "TOTAL": parseFloat(document.getElementById("Total").value),
            "PROVEEDOR": Number(document.getElementById("IdProveedor").value),
            "CLIENTE": 1,
            "TIPO_COMPROBANTE": Number(document.getElementById("IdTipoComprobante").value),
            "MONEDA": Number(document.getElementById("IdMoneda").value),
            "CONDICION_PAGO": Number(document.getElementById("IdCondicionPago").value),
            "USUARIO": 1,
            "FECHA_CREACION": "",
            "ESTADO": 1
        };
        fnGuardarCompras(request);

    };


    const fnGuardarCompras = async (request) => {
        setLoading(true);

        const res = await _guardarCompras(request);

        if (res.length > 0) {
            setLgShow(true);
        }
        

        setLoading(false);
    };







    return (
        <div className="animated fadeIn">
            <Row>
                <Col xs="12">
                    <Card>
                        <CardHeader>
                            <i className="fa fa-search"></i>Formulario de Búsqueda
                        </CardHeader>
                        <CardBody>
                            <Form className="form-horizontal" onSubmit={enviarValores}>
                                <Row>
                                    <Col md="4">

                                        <FormGroup >
                                            <Label htmlFor="ccmonth">Tipo de comprobante</Label>
                                            <select name="IdTipoComprobante" id="IdTipoComprobante" className="form-control" style={{ fontSize: '0.875rem' }} >
                                                <option value="0">Seleccione</option>
                                                <option value="1">Boleta</option>
                                                <option value="2">Factura</option>
                                            </select>
                                        </FormGroup>
                                    </Col>

                                    <Col md="4">
                                        <FormGroup >
                                            <Label htmlFor="name">Número de serie</Label>
                                            <Input type="text" id="SerieComprobante" name="SerieComprobante" placeholder="Ingrese Número de Documento" maxLength={8} style={{ fontSize: '0.875rem' }} />
                                        </FormGroup>
                                    </Col>

                                    <Col md="4">
                                        <FormGroup>
                                            <Label htmlFor="name">Número de comprobante</Label>
                                            <Input type="text" id="NumeroComprobante" name="NumeroComprobante" placeholder="Ingrese Numero comprobante" maxLength={150} style={{ fontSize: '0.875rem' }} />
                                        </FormGroup>
                                    </Col>

                                    <Col md="4">
                                        <FormGroup >
                                            <Label htmlFor="ccmonth">Condicion de Pago</Label>
                                            <select name="IdCondicionPago" id="IdCondicionPago" className="form-control" style={{ fontSize: '0.875rem' }} >
                                                <option value="0">Seleccione</option>
                                                <option value="1">Contado</option>
                                                <option value="2">Crédito</option>
                                            </select>
                                        </FormGroup>
                                    </Col>

                                    <Col md="4">
                                        <FormGroup >
                                            <Label htmlFor="ccmonth">Moneda</Label>
                                            <select name="IdMoneda" id="IdMoneda" className="form-control" style={{ fontSize: '0.875rem' }} >
                                                <option value="0">Seleccione</option>
                                                <option value="1">Soles</option>
                                                <option value="2">Dólares</option>
                                                <option value="3">Euros</option>
                                            </select>
                                        </FormGroup>
                                    </Col>

                                    <Col md="4">
                                        <FormGroup >
                                            <Label htmlFor="ccmonth">Proveedor</Label>
                                            <select name="IdProveedor" id="IdProveedor" className="form-control" style={{ fontSize: '0.875rem' }} >
                                                <option value="0">Seleccione</option>
                                                <option value="1">JUAN LOPEZ</option>
                                                <option value="2">JERIKO MAKO</option>
                                                <option value="3">LOPEZ ADRIAN</option>
                                            </select>
                                        </FormGroup>
                                    </Col>

                                    <Col md="4">
                                        <FormGroup>
                                            <Label htmlFor="name">Fecha de emisión</Label>

                                            <DatePickerInput
                                                id="FechaEmision"
                                                name="FechaEmision"
                                                disabled={state.disabled}
                                                displayFormat='DD/MM/YYYY'
                                                returnFormat='YYYY-MM-DD'
                                                className='my-react-component'
                                                onChange={(dateStringInicio) => {
                                                    document.getElementById('FechaVencimiento').value = "";
                                                    setFechaInicio(dateStringInicio)
                                                }}
                                                showOnInputClick
                                                closeOnClickOutside
                                                placeholder='Fecha de inicio'
                                                onClear={onClear}
                                                maxDate={new Date()}
                                                readOnly
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col md="4">
                                        <FormGroup>
                                            <Label htmlFor="select">Fecha de vencimiento</Label>
                                            <DatePickerInput
                                                id="FechaVencimiento"
                                                name="FechaVencimiento"
                                                disabled={state.disabled}
                                                displayFormat='DD/MM/YYYY'
                                                returnFormat='YYYY-MM-DD'
                                                className='my-react-component'
                                                onChange={(dateStringFin) => { setFechaFin(dateStringFin) }}
                                                showOnInputClick
                                                closeOnClickOutside
                                                placeholder='Fecha de vencimiento'
                                                onClear={onClear}
                                                maxDate={new Date()}
                                                readOnly
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col md="4">
                                        <FormGroup >
                                            <Label htmlFor="name">Subtotal</Label>
                                            <Input type="text" id="Subtotal" name="Subtotal" placeholder="Ingrese Subtotal" maxLength={8} style={{ fontSize: '0.875rem' }} />
                                        </FormGroup>
                                    </Col>

                                    <Col md="4">
                                        <FormGroup>
                                            <Label htmlFor="name">IGV</Label>
                                            <Input type="text" id="IGV" name="IGV" placeholder="Ingrese IGV" maxLength={150} style={{ fontSize: '0.875rem' }} />
                                        </FormGroup>
                                    </Col>
                                    <Col md="4">
                                        <FormGroup>
                                            <Label htmlFor="name">Total</Label>
                                            <Input type="text" id="Total" name="Total" placeholder="Ingrese Total" maxLength={150} style={{ fontSize: '0.875rem' }} />
                                        </FormGroup>
                                    </Col>



                                </Row>
                                <Row>
                                    <Col sm="12" style={{ textAlign: 'center' }}>
                                        <Button type="submit" color="primary">Registrar</Button>{' '}
                                        <Button type="reset" color="secondary" >Cancelar</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <ModalAviso
                isOpen={lgShow}
                toggle={setLgShow}
                className={'modal-info'}
                headerText={'Mensaje Importante'}
                bodyText={'El registro fue registrado satisfactoriamente.'}
                primary={true}
                primaryClick={e => setLgShow(false)}
                primaryText={'Ok'}
                secondary={false}
                secondaryClick={() => { }}
                secondaryText={'Cancelar'} />
        </div>
    );
};

export default Compras;
