import React from 'react';
import { Container } from 'react-bootstrap';

function Imagen(props) {

    return (
        <div>

            <img width={200}
                height={200}
                className="align-self-start mr-3"
                src={props.data.strDrinkThumb} alt="imagenProducto" />

        </div>
    );
}

export default Imagen;