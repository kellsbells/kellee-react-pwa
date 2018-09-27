import React from 'react';
import '../App.css';
import resume from '../Kellee-Martins-Resume.pdf'

const About = () => (
  <section id="about" className="About gradient">
    <div className="About-container">
      <h3>the nutshell</h3>

      <div className="About-text">
        <h4>My personal statement:</h4>
        <p>“My vision is to be an honest, hard working and positive leader and to be recognized internationally within the development community. I am committed to growing as a developer as I continue voraciously and intentionally learning. My mission is to create a beautiful web experience accessible to users all over the world.”</p>
      </div>

      <div className="About-text">
        <h4>What I'm doing in my 9-5:</h4>
        <p>ReactJS, Redux, ES6, NodeJS, MongoDb, Webpack, SCSS, AngularJS, Firebase, D3, Git, Jira</p>
      </div>

      <div className="About-text">
        <h4>What I've done before:</h4>
        <p>HTML5, CSS3, VueJS, jQuery, PHP, WordPress, Photoshop, Shopify, Bitbucket</p>
      </div>

      <div className="About-text">
        <h4>What I'm doing in my spare time:</h4>
        <p>ReactNative, AWS, Angular, TypeScript, GraphQL, Python</p>
      </div>
      
      <div className="About-text">
        <a className="button" href={resume} download="">Download Resume</a>
      </div>
      
    </div>
  </section>
);

export default About;
