import React from 'react'

export default function Volonteer() {
  return (
    <>
          <div className="volunteer-area text-center default-padding">
              {/* <!-- Fixed Shape --> */}
              <div className="shape-bottom">
                  <img src="assets/img/shape/7.png" alt="Shape" />
              </div>
              {/* <!-- Fixed Shape --> */}
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8 offset-lg-2">
                          <h5>Become a Volunteer</h5>
                          <h2 className="text-blur">Volunteer</h2>
                          <h2 className="area-title">We’ve funded 120,00 charity projects for 20M people around the world.</h2>
                          <p>
                              Replied joy age visitor nothing cottage. Mrs door paid led loud sure easy read. Hastily at perhaps as neither or ye fertile tedious visitor. Use fine bed none call busy dull when. Quiet ought match my right by table means. Principles up do in me favourable affronting. Twenty mother denied effect we to do on.
                          </p>
                          <form action="#">
                              <input type="email" placeholder="Your Email" className="form-control" name="email" />
                              <button type="submit"> Join Now</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}
