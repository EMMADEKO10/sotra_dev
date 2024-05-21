import React from 'react'

export default function AboutArea() {
  return (
    <>
          <div className="about-area default-padding">
              <div className="container">
                  <div className="row align-center">

                      <div className="col-lg-6 popular-causes">
                          <div className="causes-box">
                              <h4> <i className="fas fa-bolt"></i> Popular Causes</h4>
                              <div className="item">
                                  <div className="thumb">
                                      <img src="assets/img/800x800.png" alt="Thumb" />
                                  </div>
                                  <div className="info">
                                      <span className="cats">
                                          Education
                                      </span>
                                      <h4>
                                          <a href="#">Give Education To Africa</a>
                                      </h4>
                                      <div className="progress-box">
                                          <p>Raised : $6,230 <span className="float-right">Goal : $8,400</span></p>
                                          <div className="progress">
                                              <div className="progress-bar" role="progressbar" data-width="87"></div>
                                          </div>
                                          <span>Fund collect : 87%</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="item">
                                  <div className="thumb">
                                      <img src="assets/img/800x800.png" alt="Thumb" />
                                  </div>
                                  <div className="info">
                                      <span className="cats">
                                          Water
                                      </span>
                                      <h4>
                                          <a href="#">Water For All Children</a>
                                      </h4>
                                      <div className="progress-box">
                                          <p>Raised : $970 <span className="float-right">Goal : $1,800</span></p>
                                          <div className="progress">
                                              <div className="progress-bar" role="progressbar" data-width="55"></div>
                                          </div>
                                          <span>Fund collect : 55%</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="item">
                                  <div className="thumb">
                                      <img src="assets/img/800x800.png" alt="Thumb" />
                                  </div>
                                  <div className="info">
                                      <span className="cats">
                                          Food
                                      </span>
                                      <h4>
                                          <a href="#">Healthy Food</a>
                                      </h4>
                                      <div className="progress-box">
                                          <p>Raised : $2,400 <span className="float-right">Goal : $4,300</span></p>
                                          <div className="progress">
                                              <div className="progress-bar" role="progressbar" data-width="77"></div>
                                          </div>
                                          <span>Fund collect : 77%</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-lg-6 info">
                          <h5>About Us</h5>
                          <h2 className="text-blur">About</h2>
                          <h2 className="area-title">We’re worldwide non-profit charity ogranization.</h2>
                          <p>
                              Principles travelling frequently far delightful its especially acceptance. Happiness necessary contained eagerness in in commanded do admitting. Favourable continuing difficulty had her solicitude far. Nor doubt off widow all death aware offer. We will up able in both do sing.
                          </p>
                          <p>
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore nesciunt ad suscipit iusto dolorum quae recusandae quo illum libero excepturi, provident facere. Delectus possimus cupiditate voluptatum sapiente eos, vitae, repellat.
                          </p>
                          <ul>
                              <li>
                                  <h5>168K</h5>
                                  <span>Plants Protected</span>
                              </li>
                              <li>
                                  <h5>5M Ton </h5>
                                  <span>Water Conserved</span>
                              </li>
                              <li>
                                  <h5>37K Sqmi.</h5>
                                  <span>Ocean Proteced</span>
                              </li>
                          </ul>
                          <a className="btn circle btn-theme border btn-md" href="#">become a volunteer</a>
                      </div>

                  </div>
              </div>
          </div>
    </>
  )
}
