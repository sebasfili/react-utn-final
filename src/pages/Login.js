import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../config/AppContext';
import '../assets/styles/Login.css';
import { Button, Form, Container, Alert } from 'react-bootstrap';
import firebase from '../config/firebase';

function Login(props) {
    const history = useHistory();
    const [validated, setValidated] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [showError, setShowError] = useState(false);
    const context = useContext(AppContext);


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            // const provider = new firebase.auth.GoogleAuthProvider();
            // firebase.auth().signInWithPopup(provider);
            firebase.auth().signInWithEmailAndPassword(email, contraseña)
                .then((data) => {
                    context.updateSession(true, email, data.user.uid);
                    setShowSuccess(true);
                    history.push('/');

                }).catch((error) => {
                    setError(error.message);
                    setShowError(true);
                });

        }
        event.preventDefault();
        setValidated(true);
    };


    return (
<div className="bgLogin">
        <Container className="container-size">
            <Form action="#" noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email"
                        value={email}
                        onChange={n => setEmail(n.target.value)}
                        required />
                    <Form.Text className="text-muted">
                        No compartiremos tú e-mail con nadie.
                        </Form.Text>
                    <Form.Control.Feedback type="invalid">El usuario es requerido</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="contraseña"
                        value={contraseña}
                        onChange={n => setContraseña(n.target.value)}
                        required />
                    <Form.Control.Feedback type="invalid">El password es requerido</Form.Control.Feedback>
                </Form.Group>
                <Button variant="danger" type="submit" block >
                    Ingresar
                    </Button>
                <Alert variant="danger" show={showError} onClose={() => setShowError(false)} dismissible>
                    <Alert.Heading>Error </Alert.Heading>
                    <p>
                        {error}
                    </p>
                </Alert>
                <Alert show={showSuccess} variant="success" onClose={() => setShowSuccess(false)} dismissible>
                    <Alert.Heading>¡Ingresó con éxito!</Alert.Heading>
                </Alert>
            </Form>
        </Container>
        </div>
    );
}
export default Login;