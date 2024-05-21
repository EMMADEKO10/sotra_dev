import React from 'react'

export default function Donnation() {
  return (
    <>
          <div className="donation-area text-light bg-gray default-padding">
              {/* <!-- Fixed BG--> */}
              {/* <div className="fixed-bg" style={{ backgroundImage: 'url(assets/img/2440x1578.png)' }}></div> */}

              {/* <!-- End Fixed BG--> */}
              <div className="container">
                  <div className="row align-center">
                      <div className="col-lg-6 info">
                          <h5>Donate Today</h5>
                          <h2 className="area-title">Donate today and get involved to save the world</h2>
                          <p>
                              Drawings sir gay together landlord had law smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves. For looking two cousins regular amongst.
                          </p>
                          <div className="question">
                              <div className="icon">
                                  <i className="fas fa-phone"></i>
                              </div>
                              <div className="info">
                                  <h5>Have any question about donation? </h5>
                                  <span>Call Now: +123 3456789</span>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6 donation-form">
                          <div className="form-box">
                              <form action="#">
                                  <div className="row">
                                      <div className="col-lg-6">
                                          <div className="form-group">
                                              <label htmlFor="Amount">Amount</label>
                                              <div className="input-group">
                                                  <input type="text" className="form-control" id="Amount" placeholder="$129.00" required />
                                                  <span className="input-group-addon"><i className="fas fa-dollar-sign"></i></span>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-6">
                                          <div className="form-group">
                                              <label htmlFor="donateType">Frequency</label>
                                              <select id="donateType" className="form-control">
                                                  <option value="once">Once</option>
                                                  <option value="weekly">Weekly</option>
                                                  <option value="Fortnightly">Fortnightly</option>
                                                  <option value="Monthly">Monthly</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="col-md-12">
                                          <div className="form-group">
                                              <label htmlFor="cardNumber">Card Number</label>
                                              <div className="input-group">
                                                  <input type="text" className="form-control" id="cardNumber" placeholder="Valid Card Number" required />
                                                  <span className="input-group-addon"><i className="fas fa-credit-card"></i></span>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-7 col-sm-7 col-xs-8">
                                          <div className="form-group">
                                              <div className="row">
                                                  <div className="col-sm-12">
                                                      <label htmlFor="expMonth">Expiration Date</label>
                                                  </div>
                                              </div>
                                              <div className="row">
                                                  <div className="col-md-6 col-sm-6 col-xs-6">
                                                      <input type="text" className="form-control" id="expMonth" placeholder="MM" required data-stripe="exp_month" />
                                                  </div>
                                                  <div className="col-md-6 col-sm-6 col-xs-6">
                                                      <input type="text" className="form-control" name="expYear" placeholder="YY" required data-stripe="exp_year" />
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-5 col-sm-5 col-xs-4 pull-right">
                                          <div className="form-group">
                                              <label htmlFor="cvCode">CV Code</label>
                                              <input type="password" className="form-control" id="cvCode" placeholder="CV" required data-stripe="cvc" />
                                          </div>
                                      </div>
                                      <div className="col-md-12">
                                          <button className="btn btn-theme effect btn-md" type="submit">Donate Now</button>
                                      </div>
                                  </div>
                              </form>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}
