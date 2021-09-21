import React from 'react'
import phoneImg from './images/phone.svg'
import {useGlobalContext} from './context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext()
 
  return (
    <section className="hero"
    onMouseOver={closeSubmenu}>
      <div className="hero-center">
      <article className="heor-info">
        <h1>Payments infrastructure for the internet</h1>
        <p>Hi, My name is CHARAN. Im a WEB DEVELOPER.I made this Landing Page by one of the tutorial of FREECODECAMP by CODING ADDICT</p>
        <button className="btn">Start Now</button>
      </article>
      <article className="hero-images">
        <img src={phoneImg} alt="" className="phone-img"/>
      </article>


      </div>
     
    </section>
  )
}

export default Hero
