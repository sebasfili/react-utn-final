import React, { useState, useEffect } from 'react';
import Etiqueta from '../presentacion/Etiqueta';
import { Container, Spinner } from 'react-bootstrap';
import firebase from '../config/firebase';

function Detalle(props) {
    const [postsFirebase, setPostsFirebase] = useState([]);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        firebase.firestore().doc('drinks/'.concat(props.match.params.id))
            .get()
            .then((query) => {
                let listado = [];
                listado.push({ id: query.id, ...query.data() });

                setPostsFirebase(listado);
                setSpinner(true);
            });
    }, []);

    return (
        <div>
            <Container>            
                <h2>Detalle</h2>                
                <Spinner animation="grow" variant="danger" size="lg" hidden={spinner} />
                {
                    postsFirebase.map(drink => <Etiqueta data={drink} carrito={true} />)
                }
            </Container>
        </div>
    );
}

export default Detalle;