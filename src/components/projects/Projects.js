import React, { useState, useEffect } from 'react'
import './Projects.css'
import { Fade } from 'react-reveal'
import ApolloClient, { gql } from 'apollo-boost'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { featured_projects } from '../../data/featured_projects.json'
import Project from '../project/Project'
import Section from '../section/Section'
import FeaturedProject from '../featuredProject/FeaturedProject'

const useStyles = makeStyles((theme) => ({
  moreProjects: {
    '&': {
      margin: '20px auto',
      backgroundColor: '#39b175',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#0be779',
        boxShadow: 'none',
      },
    },
    '& > *': {
      color: 'white',
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
