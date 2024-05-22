
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
                                <h5>Evénements à venir</h5>
                                <h2>
                                Rejoignez notre événement à venir et impliquez-vous
                                </h2>
                            </div>
                            <div className="col-lg-6 right-info">
                                <p>
                                Tout est mélancolique, rarement, mais la sollicitude habite la projection. La connexion stimule l’estimation de l’excellence et de l’impression.
                                </p>
                                <a className="btn circle btn-md btn-gradient wow fadeInUp" href="#">Voir tous les <i className="fas fa-angle-right"></i></a>
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
                                    12 <strong>Août</strong>
                                </div>
                            </div>
                            <div className="info">
                                <div className="time"><i className="fas fa-clock"></i> 8:00 am - 16:00 pm</div>
                                <h4>
                                    <a href="#">Nourriture Healty pour les pauvres</a>
                                </h4>
                                <p>
                                Appelé bien que la longueur d’excuse vous en ayez besoin qu’il ait. Tout ce qui nous jette sur l’entrée résolue ensemble gracieuse. Mme assurée a ajouté privé marié enlevé croire qu’elle n’a pas été plusieurs excité. familles particulières sensibles.
                                </p>
                                <a className="btn circle btn-theme border btn-md" href="#">Savoir davantage</a>
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
                                    <a href="#">Installations médicales pour les personnes</a>
                                </h4>
                                <p>
                                Appelé bien que la longueur d’excuse vous en ayez besoin qu’il ait. Tout ce qui nous jette sur l’entrée résolue ensemble gracieuse. Mme assurée a ajouté privé marié enlevé croire qu’elle n’a pas été plusieurs excité. familles particulières sensibles.
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
                                    18 <strong>Juil</strong>
                                </div>
                            </div>
                            <div className="info">
                                <div className="time"><i className="fas fa-clock"></i> 8:30 am - 16:45 pm</div>
                                <h4>
                                    <a href="#">Compétences de vie pour les enfants en Afrique du Sud</a>
                                </h4>
                                <p>
                                Appelé bien que la longueur d’excuse vous en ayez besoin qu’il ait. Tout ce qui nous jette sur l’entrée résolue ensemble gracieuse. Mme assurée a ajouté privé marié enlevé croire qu’elle n’a pas été plusieurs excité. familles particulières sensibles.
                                </p>
                                <a className="btn circle btn-theme border btn-md" href="#">Savoir davantage</a>
                            </div>
                        </div>
                        {/* <!-- End Single Item  --> */}
                    </div>
                </div>
            </div>
        </>
    )
}
