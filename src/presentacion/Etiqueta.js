import { Alert, Button, Container } from 'react-bootstrap';
import React, { useState } from 'react';


function Etiqueta(props) {
    const [mostrar, setMostrar] = useState(false);

    return (
        <div>
            <div>
                <img width={100}
                    height={100}
                    className="align-self-start mr-3"
                    src={props.data.thumbail} alt="imagenProducto" />
            </div>
            <div>
                <label htmlFor="descripcionTexto" id={"desc" + props.data.id}><h3>{props.data.nombre}</h3></label>
            </div>
            <div>
                <label htmlFor="ingredientes" id={"ingr" + props.data.id}><b>Ingredientes: </b>{props.data.ingredientes}</label>
            </div>
            <div>
                <label htmlFor={props.data.id}><b>Precio: AR$ </b>{props.data.precio}</label>
            </div>
            <div>
                <label htmlFor={props.data.id}><b>Sku: </b>{props.data.sku}</label>
            </div>
            <div>
                <Button type="submit" variant="danger" size="lg" onClick={() => setMostrar(true)}>Comprar</Button>
                <Alert show={mostrar} variant="success">
                    <Button onClick={() => setMostrar(false)} variant="outline-success" block>
                        ¡¡¡Compra realizada con éxito!!! Aceptar para cerrar
                        </Button>
                </Alert>
            </div>
        </div>
    );
}
export default Etiqueta;