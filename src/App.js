import React from 'react';
import './App.css';
import { Col, Row, Container, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Resume from './resume'

function App() {
  return (
    <Container fluid className='App'>
      <Row>
        <Router>
          <Switch>
            <Route path="/about">
              {/* <About /> */}
            </Route>
            <Route path="/portfolio">
              {/* <Users /> */}
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/">
              <Col id='intro' lg={{span: 8, offset: 2}} className='pt-3 pb-3'>
                <h1 className='w-100 mb-3'>Andrew Rosario</h1>
                <Button as={Link} to='/about' className='col-3'>About</Button>
                <Button as={Link} to='/portfolio' className='col-3'>Portfolio</Button>
                <Button as={Link} to='/resume' className='col-3'>Resume</Button>
              </Col>
            </Route>
          </Switch>
        </Router>
      </Row>
    </Container>
  );
}

export default App;
