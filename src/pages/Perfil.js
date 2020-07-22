import React, { useState } from 'react';
import { Button, Form, Col, Alert } from 'react-bootstrap';

function Perfil(props) {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [documento, setDocumento] = useState("");
    const [email, setEmail] = useState("");


    return (<div>
        <Form>
            <div class="containerRegistro">
                <h2>Perfil de Cliente</h2>
                <Form.Row >
                    <Col>
                        <Form.Label htmlFor="nombre">Nombre</Form.Label>
                        <Form.Control type="text" name="nombre"
                            value={nombre}
                        />
                    </Col>
                    <Col>
                        <Form.Label htmlFor="apellido">Apellido</Form.Label>
                        <Form.Control type="text" name="apellido"
                            value={apellido}

                        />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Label htmlFor="documento">Documento</Form.Label>
                        <Form.Control type="number" name="documento"
                            value={documento}
                        />
                    </Col>
                    <Col>
                        <Form.Label htmlFor="email">E-mail</Form.Label>
                        <Form.Control type="email" name="email" placeholder="email@dominio.com"
                            value={email}

                        />
                    </Col>
                </Form.Row>
            </div>
        </Form>
    </div>
    );
}

export default Perfil;