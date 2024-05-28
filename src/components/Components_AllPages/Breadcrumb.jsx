// import React from 'react'

export default function Breadcrumb() {
  return (
    <div>
          {/* <!-- Start Breadcrumb 
    ============================================= --> */}
          <div className="breadcrumb-area text-center shadow dark bg-fixed padding-xl text-light" style={{ backgroundImage: "url('assets/img/blogs/side-view-people-chatting-work.jpg')" }}>
              <div className="container">
                  <div className="breadcrumb-items">
                      <div className="row">
                          <div className="col-lg-12">
                              <h2> Projets </h2>
                          </div>
                      </div>
                      <ul className="breadcrumb">
                          <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
                          <li><a href="#">Projet</a></li>
                          {/* <li className="active">Single</li> */}
                      </ul>
                  </div>
              </div>
          </div>
          {/* <!-- End Breadcrumb --> */}
    </div>
  )
}
