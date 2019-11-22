import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { projects } from './projects'
import ProjectCard from './projectCard'
import { Link } from "react-router-dom"

const Portfolio = () => {
    return ( 
        <>
            <Row id='nav' className='w-100'>
                <button><Link to='/about'>About</Link></button>
                {/* <button><Link to='/resume'>Resume</Link></button> */}
                <button><Link to='/'>Home</Link></button>
            </Row>
            <Col lg={{span: 10, offset:1}} className='p-0'>
                <div id='scroll'>
                    {projects().map( (e, i) => <ProjectCard project={e} key={i} />)}
                </div>
            </Col>
        </>
     );
}
 
export default Portfolio;