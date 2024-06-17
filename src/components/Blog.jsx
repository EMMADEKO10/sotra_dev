

export default function Blog() {
    return (
        <>
            <div className="blog-area default-padding bottom-less bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h5>Dernières nouvelles</h5>
                                <h2>
                                Restez informé avec nous des <br /> dernières et populaires nouvelles
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
                                            <img src="/blogs/side-view-people-chatting-work.jpg" alt="Thumb" />
                                            <span className="date">
                                                24 <strong>Août</strong>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="info">
                                        <h4>
                                            <a href="#">Avantage franchise à conclu peu disposé. </a>
                                        </h4>
                                        <div className="meta">
                                            <ul>
                                                <li>By <a href="#">Jones</a></li>
                                                <li><a href="#"><i className="fas fa-comments"></i> 12 Commentaires</a></li>
                                            </ul>
                                        </div>
                                        <p>
                                        Le tribunal est de nouveau en congé comme je le suis. Plus de 16 ans pour former le colonel no on be. Donc un conseil à peine barton processus.
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
                                            <img src="/blogs/medium-shot-photographer-groom.jpg" alt="Thumb" />
                                            <span className="date">
                                                18 <strong>Sep</strong>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="info">
                                        <h4>
                                            <a href="#">Extrêmement dépendant il gentleman s’améliorant.</a>
                                        </h4>
                                        <div className="meta">
                                            <ul>
                                                <li>By <a href="#">Spark</a></li>
                                                <li><a href="#"><i className="fas fa-comments"></i> 26 Commentaires</a></li>
                                            </ul>
                                        </div>
                                        <p>
                                        Le tribunal est de nouveau en congé comme je le suis. Plus de 16 ans pour former le colonel no on be. Donc un conseil à peine barton processus.
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
                                            <img src="/blogs/photo-serious-black-man-holds-chin-carries-yellow-mug-drink-looks-directly-camera-wears-red-hat-shirt.jpg" alt="Thumb" />
                                            <span className="date">
                                                05 <strong>Jul</strong>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="info">
                                        <h4>
                                            <a href="#">Il a écrit comme un bruit connu.</a>
                                        </h4>
                                        <div className="meta">
                                            <ul>
                                                <li>By <a href="#">Mohin</a></li>
                                                <li><a href="#"><i className="fas fa-comments"></i> 00 Commentaires</a></li>
                                            </ul>
                                        </div>
                                        <p>
                                        Le tribunal est de nouveau en congé comme je le suis. Plus de 16 ans pour former le colonel no on be. Donc un conseil à peine barton processus.
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
