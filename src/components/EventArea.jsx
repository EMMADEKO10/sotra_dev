import React from 'react'

export default function EventArea() {
    return (
        <>
            <div className="event-area carousel-shadow default-padding bg-gray">
                {/* <!-- Fixed Shape --> */}
                <div className="shape-bottom-left">
                    <img src="assets/img/shape/8.png" alt="Shape" />
                </div>
                {/* <!-- Fixed Shape --> */}
                <div className="container">
                    <div className="heading-left">
                        <div className="row">
                            <div className="col-lg-6 left-info">
                                <h5>Upcoming Events</h5>
                                <h2>
                                    Join to our upcoming event and get involved
                                </h2>
                            </div>
                            <div className="col-lg-6 right-info">
                                <p>
                                    Everything melancholy uncommonly but solicitude inhabiting projection off. Connection stimulated estimating excellence an to impression.
                                </p>
                                <a className="btn circle btn-md btn-gradient wow fadeInUp" href="#">View All <i className="fas fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="event-items event-carousel owl-carousel owl-theme">
                        {/* <!-- Single Item  --> */}
                        <div className="item">
                            <div className="thumb">
                                <img src="assets/img/2440x1578.png" alt="Thumb" />
                                <div className="date">
                                    12 <strong>Aug</strong>
                                </div>
                            </div>
                            <div className="info">
                                <div className="time"><i className="fas fa-clock"></i> 8:00 am - 16:00 pm</div>
                                <h4>
                                    <a href="#">Healty Food For Poor People</a>
                                </h4>
                                <p>
                                    Called though excuse length ye needed it he having. Whatever throwing we on resolved entrance together graceful. Mrs assured add private married removed believe did she no he several excited am. peculiar families sensible.
                                </p>
                                <a className="btn circle btn-theme border btn-md" href="#">Know More</a>
                            </div>
                        </div>
                        {/* <!-- End Single Item  -->
            <!-- Single Item  --> */}
                        <div className="item">
                            <div className="thumb">
                                <img src="assets/img/2440x1578.png" alt="Thumb" />
                                <div className="date">
                                    25 <strong>Dec</strong>
                                </div>
                            </div>
                            <div className="info">
                                <div className="time"><i className="fas fa-clock"></i> 10:00 am - 17:30 pm</div>
                                <h4>
                                    <a href="#">Medical Facilities for People</a>
                                </h4>
                                <p>
                                    Called though excuse length ye needed it he having. Whatever throwing we on resolved entrance together graceful. Mrs assured add private married removed believe did she no he several excited am. peculiar families sensible.
                                </p>
                                <a className="btn circle btn-theme border btn-md" href="#">Know More</a>
                            </div>
                        </div>
                        {/* <!-- End Single Item  -->
            <!-- Single Item  --> */}
                        <div className="item">
                            <div className="thumb">
                                <img src="assets/img/2440x1578.png" alt="Thumb" />
                                <div className="date">
                                    18 <strong>Jul</strong>
                                </div>
                            </div>
                            <div className="info">
                                <div className="time"><i className="fas fa-clock"></i> 8:30 am - 16:45 pm</div>
                                <h4>
                                    <a href="#">Lifeskills for Children in South Africa</a>
                                </h4>
                                <p>
                                    Called though excuse length ye needed it he having. Whatever throwing we on resolved entrance together graceful. Mrs assured add private married removed believe did she no he several excited am. peculiar families sensible.
                                </p>
                                <a className="btn circle btn-theme border btn-md" href="#">Know More</a>
                            </div>
                        </div>
                        {/* <!-- End Single Item  --> */}
                    </div>
                </div>
            </div>
        </>
    )
}
