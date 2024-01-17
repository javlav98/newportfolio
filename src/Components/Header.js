import React from 'react'
import './Header.css'

export default function Header() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('nextSection');
    nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='header-page'>
      <h1 className='name-logo'>Javier L.</h1>
      <p>
        I am Javier Lavin, a Full Stack web developer with a fervor for transforming ideas into immersive digital experiences.
      </p>
      <a href='#nextSection' className='scroll-arrow' onClick={scrollToNextSection}>
        <span class="material-symbols-outlined">
          expand_more
        </span>
      </a>
    </div>
  )
}