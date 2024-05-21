import React from 'react'

export default function Activity() {
  return (
    <>
          <div className="we-do-area half-bg default-padding bottom-less bg-gray">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8 offset-lg-2">
                          <div className="site-heading text-center">
                              <h5>What we do</h5>
                              <h2>
                                  We Donate to charity causes <br /> around the world.
                              </h2>
                              <div className="heading-divider"></div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container">
                  <div className="wedo-items text-center">
                      <div className="row">
                          {/* <!-- Single Item --> */}
                          <div className="single-item col-lg-3 col-md-6">
                              <div className="item">
                                  <i className="flaticon-water-bottle"></i>
                                  <h4>Water Delivery</h4>
                                  <p>
                                      Always length letter adieus add number moment she. Promise few compass.
                                  </p>
                              </div>
                          </div>
                          {/* <!-- End Single Item -->
              <!-- Single Item --> */}
                          <div className="single-item col-lg-3 col-md-6">
                              <div className="item">
                                  <i className="flaticon-pharmacy"></i>
                                  <h4>Medicine Help</h4>
                                  <p>
                                      Always length letter adieus add number moment she. Promise few compass.
                                  </p>
                              </div>
                          </div>
                          {/* <!-- End Single Item -->
              <!-- Single Item --> */}
                          <div className="single-item col-lg-3 col-md-6">
                              <div className="item">
                                  <i className="flaticon-planet-earth"></i>
                                  <h4>Save Plants</h4>
                                  <p>
                                      Always length letter adieus add number moment she. Promise few compass.
                                  </p>
                              </div>
                          </div>
                          {/* <!-- End Single Item -->
              <!-- Single Item --> */}
                          <div className="single-item col-lg-3 col-md-6">
                              <div className="item">
                                  <i className="flaticon-home"></i>
                                  <h4>We Build & Create</h4>
                                  <p>
                                      Always length letter adieus add number moment she. Promise few compass.
                                  </p>
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
