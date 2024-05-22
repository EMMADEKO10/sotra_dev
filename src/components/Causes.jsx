// import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Causes() {
  return (
    <>
          <div className="causes-area bg-gray default-padding bottom-less">
              <div className="container">
                  <div className="heading-left">
                      <div className="row">
                          <div className="col-lg-6 left-info">
                              <h5>Recent Causes</h5>
                              <h2>
                                  Donate to charity causes around the world.
                              </h2>
                          </div>
                          <div className="col-lg-6 right-info">
                              <p>
                                  Everything melancholy uncommonly but solicitude inhabiting projection off. Connection stimulated estimating excellence an to impression.
                              </p>
                              <NavLink to ='/projet'><a className="btn circle btn-md btn-gradient wow fadeInUp" >View All <i className="fas fa-angle-right"></i></a>
                              </NavLink>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container">
                  <div className="causes-items">
                      <div className="row">
                          {/* <!-- Single Item --> */}
                          <div className="single-item col-lg-4 col-md-6">
                              <div className="item">
                                  <div className="thumb">
                                      <a href="#">
                                          <img src="assets/img/800x600.png" alt="Thumb" />
                                          <span className="overlay">
                                              <strong>Created : </strong> Nov 7, 2020
                                          </span>
                                      </a>
                                  </div>
                                  <div className="info">
                                      <h4>
                                          <a href="#">Give Education To Africa</a>
                                      </h4>
                                      <p>
                                          Especially do at he possession insensible manner sympathize boisterous it.
                                      </p>
                                      <div className="progress-box">
                                          <div className="progress">
                                              <div className="progress-bar" role="progressbar" data-width="50">
                                                  <span>50%</span>
                                              </div>
                                          </div>
                                          <p>Raised : $4200 <span>Goal : $8400</span></p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          {/* <!-- End Single Item -->
              <!-- Single Item --> */}
                          <div className="single-item col-lg-4 col-md-6">
                              <div className="item">
                                  <div className="thumb">
                                      <a href="#">
                                          <img src="assets/img/800x600.png" alt="Thumb" />
                                          <div className="trend">
                                              <i className="fas fa-bolt"></i> Trend
                                          </div>
                                          <span className="overlay">
                                              <strong>Created : </strong> Jul 15, 2020
                                          </span>
                                      </a>
                                  </div>
                                  <div className="info">
                                      <h4>
                                          <a href="#">Water For All Children</a>
                                      </h4>
                                      <p>
                                          Especially do at he possession insensible manner sympathize boisterous it.
                                      </p>
                                      <div className="progress-box">
                                          <div className="progress">
                                              <div className="progress-bar" role="progressbar" data-width="69">
                                                  <span>69%</span>
                                              </div>
                                          </div>
                                          <p>Raised : $6230 <span>Goal : $8400</span></p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          {/* <!-- End Single Item -->
              <!-- Single Item --> */}
                          <div className="single-item col-lg-4 col-md-6">
                              <div className="item">
                                  <div className="thumb">
                                      <a href="#">
                                          <img src="assets/img/800x600.png" alt="Thumb" />
                                          <span className="overlay">
                                              <strong>Created : </strong> Dec 26, 2020
                                          </span>
                                      </a>
                                  </div>
                                  <div className="info">
                                      <h4>
                                          <a href="#">Food for Syrian</a>
                                      </h4>
                                      <p>
                                          Especially do at he possession insensible manner sympathize boisterous it.
                                      </p>
                                      <div className="progress-box">
                                          <div className="progress">
                                              <div className="progress-bar" role="progressbar" data-width="45">
                                                  <span>45%</span>
                                              </div>
                                          </div>
                                          <p>Raised : $4230 <span>Goal : $8400</span></p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          {/* <!-- End Single Item --> */}
                      </div>
                  </div>
              </div>
          </div>
          

    </>
  )
}
