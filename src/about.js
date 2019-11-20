import React from 'react'

const About = () => {
    return ( 
        <div id='about'>
            <figure>
                <img id='profile-pic' src='./profile-square.jpg' width='50%'></img>
                <figcaption><h1>Hi! I'm Andy.</h1></figcaption>
            </figure>
            <div id='bio'>
                I'm a software engineer, educator, and life-long learner passionate about solving hard problems creatively and collaboratively.
                I have worked primarily in React and Ruby on Rails to complete projects, while developing APIs and relational databases to structure information.
                When I'm not working on software projects, my partner and I love to do DIY projects around the house, travel, and spending time with our family.
                <div id='links'>
                    <a href='https://github.com/andrewrosario'><img src='./github.svg'></img></a>
                    <a href='https://www.linkedin.com/in/andrew-rosario-20982333/'><img src='./linkedin.png'></img></a>
                </div>
            </div>  
        </div>
     );
}
 
export default About;