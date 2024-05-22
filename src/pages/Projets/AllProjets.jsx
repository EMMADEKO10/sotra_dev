// import React from 'react'
import HeaderTop from '../../components/HeaderTop'
import Header from '../../components/Header'
import Breadcrumb from '../../components/Components_AllPages/Breadcrumb'
import BlogAllPages from '../../components/Components_AllPages/BlogAllPages'
import Footer from '../../components/Footer'

export default function AllProjets() {
  return (
    <div>
          {/* <!-- Preloader Start --> */}
          {/* <div className ="se-pre-con"></div> */}
          {/* <!-- Preloader Ends --> */}

          <Header />
          <HeaderTop />
          <Breadcrumb />
          <BlogAllPages />

          <Footer />
    </div>
  )
}
