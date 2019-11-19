import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";

const Resume = () => {
    return ( 
        <>
            <Row id='nav' className='w-100'>
                <button><Link to='/about'>About</Link></button>
                <button><Link to='/portfolio'>Portfolio</Link></button>
                <button><Link to='/'>Home</Link></button>
            </Row>
            <Row className='w-100'>
                <Col lg={{span: 8, offset: 2}}>
                    <iframe src="/rosario-resume.pdf" width='100%'>
                    </iframe>
                </Col>
            </Row>
        </>
     );
}
 
export default Resume;