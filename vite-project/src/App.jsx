import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <nav className="navbar"></nav>
    <ul>
    <li><a href="#about">About Me</a></li>
    <li><a href="#Skills">Skills</a></li>
    <li><a href="#Contact">Contact</a></li>
    <li><a href="#Projects">Projects</a></li>
    </ul>
    
      <header className="header">
        <h1>Pooja S</h1>
        <p>A Student</p>
      </header>

      <section id="about"className="about">
        <h2>About Me</h2>
        <p>
          I am a student with passionate coder who thrives on solving complex problems and turning ideas into fuctional solutions.
        </p>
      </section>

      <section id="Skills"className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>Advanced java</li>
          <li>c++</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML/CSS</li>
          <li>Git/GitHub</li>
        </ul>
      </section>

      <section id="Contact"className="Contact">
      <h2>Contact</h2>
      <ul>
        <li>pooja13705@gmail.com</li>
        <li>
          <h2>Github</h2>
          <a href="https://github.com/pooja07115/mern-stack" target="blank" rel="noopener noreferrer">
          View profile
          </a>
          </li>
      </ul>
      </section>
     
      <section id="Projects"className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Project 1</h3>
            <p>A web app for managing tasks.</p>
            <a href="https://github.com/your-username/project1" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
          <li>
            <h3>Project 2</h3>
            <p>A personal blog built with React.</p>
            <a href="https://github.com/your-username/project2" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        </ul>
      </section>

      <footer className="footer">
        <p>Created using React</p>
      </footer>
   
    </>
  )
}

export default App
