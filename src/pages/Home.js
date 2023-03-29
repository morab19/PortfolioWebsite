import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import Typewriter from 'typewriter-effect'

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> 
          <Typewriter
              options={{
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  strings: ["Hi, my name is Bryan"]
              }} 
          />
        </h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/bryan-mora-a5bb1323a/" target="_blank">
            <LinkedInIcon/>
          </a>
          <a href = "mailto:smithmora.bryan@gmail.com?Subject=" target="_blank">
            <EmailIcon />
          </a>
          <a href="https://github.com/morab19" target="_blank">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Kotlin, C#</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;