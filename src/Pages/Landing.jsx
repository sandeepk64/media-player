import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/Media-Video-Player-PNG-Free-Download.png'
import Card from 'react-bootstrap/Card';
import settings from '../assets/settings.gif'
import drumPlaying from '../assets/Drum-playing.jpg'
import equaliser from '../assets/feature3.jpg'


function Landing() {
  return (
    <>
      <div className="LandingSection container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p className='mt-3' style={{textAlign:'justify'}}>Media player app will allow user to add or remove tehir uploaded video from youtube and also allow them to arrange it in different categories by drag and drop. User can also have tghe provision to manage their watch history as well. What are you waiting for, lets start exploring our site!! </p>
            <Link to={'/home'} className='btn btn-info'>Get Started</Link>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
            <img src={landingImg} alt="landing page" />
          </div>
        </div>
        {/* features */}
        <div className="Features my-5">
          <h3 style={{marginBottom:'30px'}} className="text-center">Features</h3>
          <div className="row">
            <div className="col-lg-4">
              <Card style={{ width: '22rem',height:'400px' }}>
                <Card.Img variant="top" style={{height:'250px'}} className='img-fluid' src={settings} />
                  <Card.Body>
                    <Card.Title>Managing Videos</Card.Title>
                      <Card.Text>
                        User can upload or remove videos.
                      </Card.Text>
                  </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card style={{ width: '22rem',height:'400px' }}>
                <Card.Img variant="top" style={{height:'250px'}} className='img-fluid' src={drumPlaying} />
                  <Card.Body>
                    <Card.Title>Categorised videos</Card.Title>
                      <Card.Text>
                        User can Categorise videos.
                      </Card.Text>
                  </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card style={{ width: '22rem',height:'400px' }}>
                <Card.Img variant="top" style={{height:'250px'}} className='img-fluid' src={equaliser} />
                  <Card.Body>
                    <Card.Title>Managing History</Card.Title>
                      <Card.Text>
                        User can manage history
                      </Card.Text>
                  </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="my-5 row border rounded p-5">
          <div className="col-lg-5">
            <h2 className="text-warning">Simple, Fast and Powerful</h2>
            <p style={{textAlign:'justify'}}>
              <span className='fs-5'>Play everything </span>: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p style={{textAlign:'justify'}}>
              <span className='fs-5'>Play everything </span>: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p style={{textAlign:'justify'}}>
              <span className='fs-5'>Play everything </span>: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
            <iframe width="599" height="366" src="https://www.youtube.com/embed/jDjAwJ87PPM" title="Getting started with Vite js + React js + Bootstrap" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing