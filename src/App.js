import React from 'react'
import './App.scss'
import { Col, Row, Container, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Resume from './resume'
import Portfolio from './portfolio'
import About from './about'

function App() {
  return (
    <Container fluid className='App'>
        <Router>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/">
              <Col id='intro' className='pt-2 pb-2'>
                <h1 className='w-100 mb-3'>Andrew Rosario</h1>
                <Button as={Link} to='/about' className='col-3'>About</Button>
                <Button as={Link} to='/portfolio' className='col-3'>Portfolio</Button>
                {/* <Button as={Link} to='/resume' className='col-3'>Resume</Button> */}
              </Col>
            </Route>
          </Switch>
        </Router>
    </Container>
  );
}

export default App;
