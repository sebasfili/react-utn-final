import React, { useState, useEffect } from 'react';
import { Media, Button, Container, Spinner } from 'react-bootstrap';
import { Link } from "react-router-dom";
import firebase from '../config/firebase';


function Productos(props) {
    const [postsFirebase, setPostsFirebase] = useState([]);
    const [spinner, setSpinner] = useState(false);
    

    useEffect(() => {
        firebase.firestore().collection('drinks').get().then(query => {
            let listado = [];

            query.forEach(element => {
                listado.push({ id: element.id, ...element.data() });
            });
            setPostsFirebase(listado);
            setSpinner(true);
        });
    }, []);

    return (
        <div className="bgProductos">

            <h2>Nuestros Cócteles</h2>
            <Container>
                <Spinner animation="border" variant="primary" size="md" hidden={spinner} />
                <Spinner animation="border" variant="secondary" size="md" hidden={spinner} />
                <Spinner animation="border" variant="success" size="md" hidden={spinner} />
                <Spinner animation="border" variant="danger" size="md" hidden={spinner} />
                <Spinner animation="border" variant="warning" size="md" hidden={spinner} />
                <Spinner animation="border" variant="info" size="md" hidden={spinner} />
                <Spinner animation="border" variant="light" size="md" hidden={spinner} />
                <Spinner animation="border" variant="dark" size="md" hidden={spinner} />
            </Container>
            {
                <Container>{

                    postsFirebase.map((d) => <Media key={d.id}>
                        <img width={100}
                            height={100}
                            className="align-self-start mr-3"
                            src={d.thumbail} alt="imagenProducto" />
                        <Media.Body>
                            <h4>{d.nombre}</h4>
                            <p>
                                <b>Ingredientes: </b>{d.ingredientes}
                            </p>
                            <p><b>Precio: AR$</b>{d.precio}</p>
                            <p>SKU: {d.sku}</p>
                            <Link to={`/detalle/${d.id}`}>
                                <Button type="submit" variant="outline-light " size="lg">
                                    Ver Detalle</Button>
                            </Link>
                        </Media.Body>
                    </Media>)
                }
                </Container>
            }
        </div >
    );
};
export default Productos;
