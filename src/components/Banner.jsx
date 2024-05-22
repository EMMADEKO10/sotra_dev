export default function Banner() {
    return (
        <>
            <div className="banner-area inc-shape inc-indicator content-less text-large">
                <div id="bootcarousel" className="carousel text-light slide carousel-fade animate_text" data-ride="carousel">

                    {/* <!-- Indicators for slides --> */}
                    <div className="carousel-indicator">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <ol className="carousel-indicators">
                                        <li data-target="#bootcarousel" data-slide-to="0" className="active"></li>
                                        <li data-target="#bootcarousel" data-slide-to="1"></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Wrapper for slides --> */}
                    <div className="carousel-inner carousel-zoom">
                        <div className="carousel-item active">
                            <div className="slider-thumb bg-cover" style={{ backgroundImage: "url('src/assets/hero section/group-diverse-teens-young-people-doing-activities-together-celebrating-world-youth-skills-day (1).jpg')" }}></div>

                            <div className="box-table">
                                <div className="box-cell shadow dark">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-9">
                                                <div className="content">
                                                    <h4 data-animation="animated slideInDown">Votre innovation mérite d'être vue</h4>
                                                    <h2 data-animation="animated slideInRight">Transformez vos idées<strong>en réalisations concrètes</strong></h2>
                                                    <a data-animation="animated fadeInUp" className="btn circle btn-theme border btn-md" href="#">Découvrez-en plus</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="slider-thumb bg-cover" style={{ backgroundImage: "url('src/assets/hero section/Sans titre-1.jpg')" }}></div>
                            <div className="box-table">
                                <div className="box-cell shadow dark">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-9">
                                                <div className="content">
                                                    <h4 data-animation="animated slideInDown">Investissez dans l'avenir</h4>
                                                    <h2 data-animation="animated slideInRight">Transformez votre portefeuille avec<strong>des investissements durables</strong></h2>
                                                    <a data-animation="animated fadeInUp" className="btn circle btn-theme border btn-md" href="#">Découvrez-en plus</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Wrapper for slides --> */}

                </div>
            </div>
        </>
    )
}
