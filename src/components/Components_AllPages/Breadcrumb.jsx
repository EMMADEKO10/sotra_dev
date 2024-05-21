import React from 'react'

export default function Breadcrumb() {
  return (
    <div>
          {/* <!-- Start Breadcrumb 
    ============================================= --> */}
          <div className="breadcrumb-area text-center shadow dark bg-fixed padding-xl text-light" style={{ backgroundImage: "url('assets/img/2440x1578.png')" }}>
              <div className="container">
                  <div className="breadcrumb-items">
                      <div className="row">
                          <div className="col-lg-12">
                              <h2>Blog Grid</h2>
                          </div>
                      </div>
                      <ul className="breadcrumb">
                          <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
                          <li><a href="#">Blog Grid</a></li>
                          <li className="active">Single</li>
                      </ul>
                  </div>
              </div>
          </div>
          {/* <!-- End Breadcrumb --> */}
    </div>
  )
}
