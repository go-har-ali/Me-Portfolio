import React, { useEffect, useState } from 'react'
import project from '../Data/projects.json'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container projects-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'My Projects'.split('')}
            idx={15}
          />
        </h1>
        <div className="row justify-content-center">
          {project.map((data) => (
            <div
              key={data.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-3"
            >
              <div className="card bg-dark text-light card-custom ">
                <div className="img d-flex justify-content-center align-items-center">
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt={data.title}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title fs-1">{data.title}</h5>
                  <p className="card-text fs-4">{data.description}</p>
                  <a href={data.demo} className="btn btn-primary fs-3 mx-2">
                    Demo
                  </a>
                  <a href={data.source} className="btn btn-warning fs-3 mx-2">
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
