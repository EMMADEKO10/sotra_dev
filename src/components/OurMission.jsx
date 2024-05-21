import React from 'react'

export default function OurMission() {
    return (
        <>
            <div className="mission-area half-bg default-padding-bottom bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 thumb-box">
                            <div className="thumb">
                                <div className="thumb-1">
                                    <img src="assets/img/800x800.png" alt="Thumb" />
                                </div>
                                <div className="thumb-2">
                                    <img src="assets/img/800x800.png" alt="Thumb" />
                                    <a href="https://www.youtube.com/watch?v=owhuBrGIOsE" className="popup-youtube light video-play-button item-center">
                                        <i className="fa fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 info">
                            <h5>Our Mission</h5>
                            <h2 className="text-blur">Mission</h2>
                            <h2 className="area-title">We believe that we can save more lifes with you.</h2>
                            <p>
                                Their end whole might began her. Behaved the comfort another fifteen eat. Partiality had his themselves ask pianoforte increasing discovered. So mr delay at since place whole above miles.
                            </p>
                            <h4>Our strategic priorities up to 2020 are:</h4>
                            <ul>
                                <li>Protecting charities from abuse or mismanagement</li>
                                <li>Enabling trustees to run their charities effectively </li>
                                <li>Encouraging greater transparency and accountability</li>
                            </ul>
                            <a className="btn circle btn-theme border btn-md" href="#">Join With Us</a>
                        </div>
                    </div>
                </div>
            </div> 
        </>)
}