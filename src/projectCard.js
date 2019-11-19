import React from 'react';
import { Card } from 'react-bootstrap'

const ProjectCard = (props) => {
    const {name, image, description, technologies, deployLink, gitHub } = props.project
    return ( 
        <Card className='m-2'>
            <a href={deployLink}><Card.Img variant="top" src={image} alt={`Homepage for ${name}`}/></a>
            <Card.Body>
                <Card.Title><a href={deployLink}>{name}</a></Card.Title>
                <Card.Text>
                    {description}<br></br><br></br>
                    Technologies: {technologies}<br></br><br></br>
                    <a href={gitHub[0]}><img src='./github.svg' width='8%'></img></a>
                </Card.Text>
            </Card.Body>
        </Card>
     );
}
 
export default ProjectCard;