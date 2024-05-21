import React from 'react'

export default function Blog() {
    return (
        <>
            <div className="blog-area default-padding bottom-less bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h5>Latest News</h5>
                                <h2>
                                    Stay Update with Us from <br /> latest & popular News
                                </h2>
                                <div className="heading-divider"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            {/* <!-- Single Item --> */}
                            <div className="single-item col-lg-4 col-md-6">
                                <div className="item">
                                    <div className="thumb">
                                        <a href="#">
                                            <img src="assets/img/800x600.png" alt="Thumb" />
                                            <span className="date">
                                                24 <strong>Aug</strong>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="info">
                                        <h4>
                                            <a href="#">Advantage frankness to concluded unwilling. </a>
                                        </h4>
                                        <div className="meta">
                                            <ul>
                                                <li>By <a href="#">Jones</a></li>
                                                <li><a href="#"><i className="fas fa-comments"></i> 12 Comments</a></li>
                                            </ul>
                                        </div>
                                        <p>
                                            Court in of leave again as am. Greater sixteen to forming colonel no on be. So an advice hardly barton process.
                                        </p>
                                        <a className="btn-more" href="#">Read More</a>
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
                                            <span className="date">
                                                18 <strong>Sep</strong>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="info">
                                        <h4>
                                            <a href="#">Extremely depending he gentleman improving.</a>
                                        </h4>
                                        <div className="meta">
                                            <ul>
                                                <li>By <a href="#">Spark</a></li>
                                                <li><a href="#"><i className="fas fa-comments"></i> 26 Comments</a></li>
                                            </ul>
                                        </div>
                                        <p>
                                            Court in of leave again as am. Greater sixteen to forming colonel no on be. So an advice hardly barton process.
                                        </p>
                                        <a className="btn-more" href="#">Read More</a>
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
                                            <span className="date">
                                                05 <strong>Jul</strong>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="info">
                                        <h4>
                                            <a href="#">Going as by do known noise he wrote round.</a>
                                        </h4>
                                        <div className="meta">
                                            <ul>
                                                <li>By <a href="#">Mohin</a></li>
                                                <li><a href="#"><i className="fas fa-comments"></i> 05 Comments</a></li>
                                            </ul>
                                        </div>
                                        <p>
                                            Court in of leave again as am. Greater sixteen to forming colonel no on be. So an advice hardly barton process.
                                        </p>
                                        <a className="btn-more" href="#">Read More</a>
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
