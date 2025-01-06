import React from 'react'
import './App.css'
import A from '../image1.jpg'
import { Link } from 'react-router-dom'
import './j.js'
function App() {
  return (
    <>
    <div className="container-fluid">
    <div className="row">
      <div className="col-12 ">
        <div className="card">
          <div className="card-header">
            <ul className="nav nav-pills nav-fills" id='pills-tab' role='tablist'>
              <li className="nav-item" role='presentation'>
              <i className="fa-brands fa-cloudversify a3"></i>
              </li>
              <li className="nav-item" role='presentation'>
                <p className='nav-link a4'><b>Developer</b></p>
              </li>
              <li className="nav-item" role='presentation'>
              <Link to='/'><button className='nav-link active' id='pills-home-tab' data-bs-toggle="pill"data-bs-target="#pills-home"type='button'role='tab'><i class="fa-solid fa-house-user"></i>&nbsp;Home</button></Link>
              </li>
              <li className="nav-item" role='presentation'>
              <Link to='/about'><button className='nav-link' onClick={fadeIntext} id='pills-about-tab f1' data-bs-toggle="pill"data-bs-target="#pills-about"type='button'role='tab'><i class="fa-solid fa-user-tie"></i>&nbsp;About</button></Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link to='/education'><button className='nav-link' onClick={fadeIntext} id='pills-education-tab ' data-bs-toggle="pill"data-bs-target="#pills-education"type='button'role='tab'><i class="fa-solid fa-user-graduate"></i>&nbsp;Education</button></Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link to='/project'><button className='nav-link' onClick={fadeIntext} id='pills-project-tab' data-bs-toggle="pill"data-bs-target="#pills-project"type='button'role='tab'><i class="fa-solid fa-diagram-project"></i>&nbsp;Project</button></Link>
              </li>
              <li className="nav-item"role='presentation'>
              <Link to='/contact'><button className='nav-link' onClick={fadeIntext} id='pills-contact-tab' data-bs-toggle="pill"data-bs-target="#pills-contact"type='button'role='tab'><i class="fa-solid fa-address-book"></i>&nbsp;Contact</button></Link>
              </li>
            </ul>
             <div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" tabindex="0"></div>
  <div className="tab-pane fade" id="pills-about" role="tabpanel" tabindex="0"></div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" tabindex="0"></div>
    <div className="tab-pane fade" id="pills-project" role="tabpanel" tabindex="0"></div>
    <div className="tab-pane fade" id="pills-education" role="tabpanel" tabindex="0"></div>
          </div>
          </div>
          <div className="card-body">
          <div className="row">
            <div className="col-lg-6 col-md-12 c2">
            <p className="b"><img src={A} alt="" className='b1' /></p>
            </div>
            <div className="col-lg-6 col-md-12 c4">
            <p className="a"></p>
            <h1 className='a1'> I Sathiesh Kumar R,</h1>
            <h1 id='a2'></h1>
          </div>
          </div>
          </div>  
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App