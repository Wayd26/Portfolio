import React, { useState } from 'react'
import './Home.css'
import Fade from 'react-reveal/Fade'
import { Bounce } from 'react-reveal'
import { Link } from 'react-scroll'
import Particles from 'react-particles-js'
import Typewriter from 'typewriter-effect'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle'
import Navbar from '../navbar/Navbar'
import config from '../../config'
import profile from '../../images/wayd.png'
import linkedin from '../../images/social/linkedin.png'

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <div className="home-wrapper">
      <div className="home">
        <Particles className="particles" params={config.particles} />
        <div className={`greeting${!imageLoaded ? ' hide' : ''}`}>
          <Fade bottom distance="40px">
            <img
              className="profile"
              alt="wassiou ayedoun profile"
              src={profile}
              onLoad={() => setImageLoaded(true)}
            />
            <h1 className="greeting-text">
              Hi, I'm <span className="name">Wassiou Ayedoun</span>.{' '}
              <span className="wave-emoji" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
            <h1 className="greeting-text">
              <Typewriter
                options={{
                  strings: [
                    'I like to implement awesome user interfaces.',
                    'I love learning new tech.',
                    'I love meeting new people.',
                    'I like solving complex problems using techs.',
                    'I create unique digital experiences.',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  cursor: '<',
                  delay: 200,
                }}
              />
            </h1>
            <Bounce cascade>
              <div className="links">
                <a
                  href="https://www.linkedin.com/in/Wayd26/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="Linkedin Logo" width="50px" />
                </a>
              </div>
            </Bounce>
            <div className="scroll-down">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}
              >
                <ArrowDropDownCircleIcon
                  fontSize="large"
                  style={{ pointerEvents: 'fill', cursor: 'pointer' }}
                />
              </Link>
            </div>
          </Fade>
        </div>
        <Navbar />
      </div>
    </div>
  )
}

export default Home
