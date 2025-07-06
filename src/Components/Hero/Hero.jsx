import React from 'react'
import "./Hero.css"
import heroVideo from "../../assets/ocean video.mp4"
import {  useNavigate } from 'react-router-dom'

const Hero = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <section className="hero-section">
      <div className="header">
          <h3> Dr. Serena Blake, <br/> PsyD (Clinical Psychologist)</h3>
      </div>
      <div className="hero">
        <video src={heroVideo} type='video/mp4' autoPlay loop muted className="hero-video">
         
        </video>
      </div>
         <div className="hero-content">
        <h2>Psychological Care for <br /> <br/> Change, Insight, and Well-Being</h2>
        <p>
          Offering individual psychotherapy for adults via telehealth in Michigan and <u>most U.S. states</u> through PSYPACT participation.
        </p>
        <button className="hero-button" onClick={(handleClick)}>SCHEDULE A CONSULTATION</button>
      </div>
    </section>

   
  )
}

export default Hero