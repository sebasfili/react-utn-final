import React, { useState } from 'react';
import '../assets/styles/Registro.css';
import firebase from '../config/firebase';
import { Button, Form, Col, Alert } from 'react-bootstrap';


function Registro(props) {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [documento, setDocumento] = useState("");
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [reContraseña, setReContraseña] = useState("");
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState('');
    const [validated, setValidated] = useState(false);

    const handleFormSubmit = ((event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();

        }
        else {
            firebase.auth().createUserWithEmailAndPassword(email, contraseña)
                .then((data) => {
                    firebase.firestore().collection('users').add({
                        firstname: nombre,
                        lastname: apellido,
                        email: email,
                        userid: data.user.uid,
                    }).then((data) => {
                        console.log(data);
                        setShowSuccess(true);
                    }).catch((error) => {
                        setError(error);
                        setShowError(true);
                    });
                }).catch((error) => {
                    setError(error.message);
                    setShowError(true);
                });
        }
        event.preventDefault();
        setValidated(true);
    });

    return (
        <div>

            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                <div class="containerRegistro">
                    <h2>Registro de Cliente</h2>
                    <Form.Row >
                        <Col>
                            <Form.Label htmlFor="nombre">Nombre</Form.Label>
                            <Form.Control type="text" name="nombre" required
                                value={nombre}
                                onChange={n => setNombre(n.target.value)} />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="apellido">Apellido</Form.Label>
                            <Form.Control type="text" name="apellido" required
                                value={apellido}
                                onChange={n => setApellido(n.target.value)}
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Label htmlFor="documento">Documento</Form.Label>
                            <Form.Control type="number" name="documento"
                                value={documento}
                                onChange={n => setDocumento(n.target.value)} />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="email">E-mail</Form.Label>
                            <Form.Control type="email" name="email" placeholder="email@dominio.com"
                                value={email}
                                onChange={n => setEmail(n.target.value)}
                                required />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Label htmlFor="contraseña">Contraseña</Form.Label>
                            <Form.Control type="password" name="contraseña"
                                value={contraseña}
                                onChange={n => setContraseña(n.target.value)}
                                required />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="recontraseña">Repetir Contraseña</Form.Label>
                            <Form.Control type="password" name="reContraseña"
                                value={reContraseña}
                                onChange={n => setReContraseña(n.target.value)}
                                required />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Button variant="danger" block type="submit" >
                                ¡Registrarme! </Button>

                        </Col>
                        <Col>
                            <Button type="button" variant="secondary" block>Cancelar</Button>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Alert variant="danger" show={showError} onClose={() => setShowError(false)} dismissible>
                                <Alert.Heading>Error </Alert.Heading>
                                <p>
                                    {error}
                                </p>
                            </Alert>
                            <Alert show={showSuccess} variant="success" onClose={() => setShowSuccess(false)} dismissible>
                                <Alert.Heading>¡Registrado con éxito!</Alert.Heading>
                                Haga clic aqui para <Alert.Link to="/login">ingresar.</Alert.Link>
                            </Alert>
                        </Col>
                    </Form.Row>
                </div>
            </Form>
        </div>
    );
}

export default Registro;