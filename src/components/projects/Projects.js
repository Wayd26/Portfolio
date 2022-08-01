import React from 'react'
import './Projects.css'
import { Fade } from 'react-reveal'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { featured_projects } from '../../data/featured_projects.json'
import FeaturedProject from '../featuredProject/FeaturedProject'
import Section from '../section/Section'
// eslint-disable-next-line
import Project from '../project/Project'

const useStyles = makeStyles((theme) => ({
  moreProjects: {
    '&': {
      margin: '20px auto',
      backgroundColor: '#ffffff',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#78B4FB',
        color: '#fff',
        boxShadow: 'none',
      },
    },  
    '& > * ': {
      padding: 4,
      fontSize: '15px',
      fontWeight: '600',
    },
  },
}))

const Projects = () => {

  const classes = useStyles()

    return (
      <Section title="Projects">
        <div className="projects-content">
          <ul className="projects-list">
            {featured_projects.map((featuredProject) => {
              return (
                <li key={`featured-project-${featuredProject.id}`}>
                  <Fade bottom duration={1000} distance="20px">
                    <FeaturedProject
                      logo={featuredProject.logo}
                      name={featuredProject.name}
                      link={featuredProject.link}
                      description={featuredProject.description}
                      colour={featuredProject.colour}
                      languages={featuredProject.languages}
                    />
                  </Fade>
                </li>
              )
            })}
            
          </ul>
          <Fade bottom duration={1000} distance="20px">
            <div className="more-projects-wrapper">
              <a
                className="project-link"
                href={'https://github.com/Wayd26'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className={classes.moreProjects}
                  type="button"
                  variant="contained"
                >
                  more projects
                </Button>
              </a>
            </div>
          </Fade>
        </div>
      </Section>
    )
  
}

export default Projects
