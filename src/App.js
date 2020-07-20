import React, { useState, useEffect } from 'react';
import './App.css';
import Productos from './pages/Productos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,

} from "react-router-dom";
import Login from './pages/Login';

import Registro from './pages/Registro';
import Detalle from './pages/Detalle';
import NotFound from './pages/NotFound';
import { Navbar, Fade } from 'react-bootstrap';
import AppContext from './config/AppContext';
import Home from './pages/Home';


function App() {
  const [loggedIn, setLoggedin] = useState(localStorage.getItem('loggedin') || false);
  const [usuario, setUsuario] = useState(localStorage.getItem('usuario') || '');


  // useEffect(() => {
  //   localStorage.setItem('loggedin', loggedIn);
  //   localStorage.setItem('usuario', usuario);
  // }, []);

  const updateSession = (loggedInU, nombreU) => {
    setLoggedin(loggedInU);
    setUsuario(nombreU);
    localStorage.setItem('loggedin', loggedIn);
    localStorage.setItem('usuario', usuario);
  };

  const logOut=()=>{
    setLoggedin(false);
    setUsuario(undefined);
    localStorage.removeItem('loggedin');
    localStorage.removeItem('usuario');
  };

  if (loggedIn) {
    return (
      <Router>
        <Navbar bg="dark" variant="dark" fixed="top" sticky="top">
          <Navbar.Brand >
            <Link to="/home/" className="navbar-brand">Home</Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/productos/" className="navbar-brand">Cocteles</Link>
          </Navbar.Brand>          
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand>  {'¡Bienvenido'.concat(' ', usuario, '!')}
            </Navbar.Brand>
            <Navbar.Text>
              <Link to="/login/" className="navbar-brand" onClick={logOut}>Log Out</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <AppContext.Provider value={{ updateSession: updateSession }}>
          <Fade>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
            
              <Route path="/productos">
                <Productos />
              </Route>
              <Route path="/detalle/:id" component={Detalle}>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route>
                <NotFound></NotFound>
              </Route>
            </Switch>
          </Fade>
        </AppContext.Provider >

      </Router >
    );
  }
  else {
    return (
      <Router>
        <Navbar bg="dark" variant="dark" fixed="top" sticky="top">
          <Navbar.Brand>
            <Link to="/registro/" className="navbar-brand">Registro</Link>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Link to="/login/" className="navbar-brand">Login</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <AppContext.Provider value={{ updateSession: updateSession }}>
          <Fade>
            <Switch>
              <Route path="/registro">
                <Registro />
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/">
                <Login />
              </Route>
              <Route>
                <NotFound></NotFound>
              </Route>
            </Switch>
          </Fade>
        </AppContext.Provider>
      </Router>
    );
  }
}

export default App;
