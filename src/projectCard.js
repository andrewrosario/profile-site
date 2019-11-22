import React from 'react';
import { Card } from 'react-bootstrap'

const ProjectCard = (props) => {
    const {name, image, description, technologies, deployLink, gitHub } = props.project
    return ( 
        <Card className='m-2'>
            
            <Card.Body>
                <Card.Title><a href={deployLink}>{name}</a></Card.Title>
                <Card.Text className='mb-0'>
                    <p>{description}<br></br><br></br>
                    Technologies: {technologies}<br></br><br></br></p>
                </Card.Text>
                <a href={deployLink}><Card.Img className='mb-3' variant="top" src={image} alt={`Homepage for ${name}`}/></a>
                <a href={gitHub[0]}><img src='./github.svg' width='8%'></img></a>
            </Card.Body>
        </Card>
     );
}
 
export default ProjectCard;