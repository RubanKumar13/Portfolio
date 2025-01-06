import React from 'react'
import B  from '../gif.gif'
function About() {
  return (
    <>
    <div className="container-fluid">
    <div className="row">
    <div className="card c3">
      <div className="card-title">
        <h3 className='c1'>About me</h3>
      </div>
    <div className="card-body">
        <div className="col-lg-6 col-md-12" id='f2'>        
                    <p> Motivated and detail-oriented Bachelor of Computer Application (BCA) graduate with a solid foundation in computer scienece principles and web development.Skilled in variour programming languages including HTML ,CSS, Javascript, java and Python and experieneced in developing web design.Adept at problem-solving and eager to apply techcinal knowledge in a practial setting. </p>
                    <h3><b>Skills</b></h3>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Javascript</li>
                      <li>Java</li>
                      <li>Python</li>
                      <li>SQL</li>
                      <li>Observation</li>
                      <li>Time Management</li>
                    </ul>
                    <h3>Internship</h3>
                    <p>Izeon Innovation PVT LTD</p>
                    <h4>Course</h4>
                    <p>Java Full Stack Developer</p>
              </div>
              <div className="col-lg-6 col-md-12">
                    <img className='h1' src={B} alt="not avaiable"/>
                </div>
                </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default About