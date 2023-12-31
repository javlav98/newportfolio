import React from 'react'
import './AboutCore.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faNodeJs, faReact, faGitAlt, faBootstrap, faNpm} from '@fortawesome/free-brands-svg-icons'

function AboutHeader() {
  return (
    <div className='titleContainer'>
      <h1>About me</h1>
    </div>
  )
}

function AboutImageBody() {
  return (
    <div className='pContainer'>
      <img src="me.jpeg" alt="placeholder" width='300' className='pic'/>
      <p className='aboutText'>
        Hello, I'm Javier Lavin, a Web Developer from the Southern California region based 
        in Riversdie, CA. I graduated from the University of California, Irvine with a degree 
        in History and an interest in Web Development. I'm currently attending W3school's coding 
        bootcamp to further my knowledge in the subject and make a breakthrough into the tech industry.
        I'm fairly new in the field but have about 2 years of web development under my belt. My experiences 
        include W3Schools Bootcamp open source projects, small business freelancing, and various exciting 
        projects that I've woked on through out my career. With a passion for creating exceptional digital 
        experiences and from designing responsive user interfaces to building robust back-end solutions, I 
        thrive in delivering high-quality web applications that meet client objectives.
      </p>
    </div>
  )
}

function SkillsHeader() {
  return (
    <div className='skillsheaderConatiner'>
      <h1>Skills</h1>
    </div>
  )
}

function SkillsBody() {
  return (
    <div className='cardContainer'>
      <ul className='list'>
        <li className='listItem'><FontAwesomeIcon icon={faHtml5} size='2x' className='icon'/>HTML</li>
        <li className='listItem'><FontAwesomeIcon icon={faCss3Alt} size='2x' className='icon'/>CSS</li>
        <li className='listItem'><FontAwesomeIcon icon={faJsSquare} size='2x' className='icon'/>Javascript</li>
        <li className='listItem'><FontAwesomeIcon icon={faReact} size='2x' className='icon'/>React</li>
        <li className='listItem'><FontAwesomeIcon icon={faBootstrap} size='2x' className='icon'/>Bootstrap</li>
        <li className='listItem'><FontAwesomeIcon icon={faNodeJs} size='2x' className='icon'/>NodeJs</li>
        <li className='listItem'><FontAwesomeIcon icon={faGitAlt} size='2x' className='icon'/>Git</li>
        <li className='listItem'><FontAwesomeIcon icon={faNpm} size='2x' className='icon'/>npm</li>
      </ul>
    </div>
  )
}

export default function AboutCore() {
  return (
    <div>
      <AboutHeader />
      <AboutImageBody />
      <SkillsHeader />
      <SkillsBody />
    </div>
  )
}