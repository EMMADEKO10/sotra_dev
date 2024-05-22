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
                              <h5>Causes récentes</h5>
                              <h2>
                              Faites un don à des causes caritatives dans le monde entier.
                              </h2>
                          </div>
                          <div className="col-lg-6 right-info">
                              <p>
                              Tout est mélancolique, rarement, mais la sollicitude habite la projection. La connexion stimule l’estimation de l’excellence et de l’impression.
                              </p>
                              <NavLink to ='/projet'><a className="btn circle btn-md btn-gradient wow fadeInUp" >Voir plus<i className="fas fa-angle-right"></i></a>
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
                                              <strong>Créé : </strong> Nov 7, 2020
                                          </span>
                                      </a>
                                  </div>
                                  <div className="info">
                                      <h4>
                                          <a href="#">Donner l’éducation à l’Afrique</a>
                                      </h4>
                                      <p>
                                      Surtout en possession d’une manière insensible sympathiser avec elle.
                                      </p>
                                      <div className="progress-box">
                                          <div className="progress">
                                              <div className="progress-bar" role="progressbar" data-width="50">
                                                  <span>50%</span>
                                              </div>
                                          </div>
                                          <p>Recueilli : $4200 <span>Objectif : $8400</span></p>
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
                                              <i className="fas fa-bolt"></i> Tendance
                                          </div>
                                          <span className="overlay">
                                              <strong>Créé : </strong> Jul 15, 2020
                                          </span>
                                      </a>
                                  </div>
                                  <div className="info">
                                      <h4>
                                          <a href="#">De l’eau pour tous les enfants</a>
                                      </h4>
                                      <p>
                                      Surtout en possession d’une manière insensible sympathiser avec elle.
                                      </p>
                                      <div className="progress-box">
                                          <div className="progress">
                                              <div className="progress-bar" role="progressbar" data-width="69">
                                                  <span>69%</span>
                                              </div>
                                          </div>
                                          <p>Recueilli : $6230 <span>Objectif : $8400</span></p>
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
                                              <strong>Créé : </strong> Dec 26, 2020
                                          </span>
                                      </a>
                                  </div>
                                  <div className="info">
                                      <h4>
                                          <a href="#">Nourriture pour les Syriens</a>
                                      </h4>
                                      <p>
                                      Surtout en possession d’une manière insensible sympathiser avec elle.
                                      </p>
                                      <div className="progress-box">
                                          <div className="progress">
                                              <div className="progress-bar" role="progressbar" data-width="45">
                                                  <span>45%</span>
                                              </div>
                                          </div>
                                          <p>Recueilli : $4230 <span>Objectif : $8400</span></p>
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
