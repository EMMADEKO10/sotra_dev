
export default function AboutArea() {
  return (
    <>
          <div className="about-area default-padding">
              <div className="container">
                  <div className="row align-center">

                      <div className="col-lg-6 popular-causes">
                          <div className="causes-box">
                              <h4> <i className="fas fa-bolt"></i> Causes populaires</h4>
                              <div className="item">
                                  <div className="thumb">
                                      <img src="assets/img/800x800.png" alt="Thumb" />
                                  </div>
                                  <div className="info">
                                      <span className="cats">
                                          Education
                                      </span>
                                      <h4>
                                          <a href="#">Donner l’éducation en République Démocratique du Congo</a>
                                      </h4>
                                      <div className="progress-box">
                                          <p>Recueilli : $6,230 <span className="float-right">Objectif : $8,400</span></p>
                                          <div className="progress">
                                              <div className="progress-bar" role="progressbar" data-width="87"></div>
                                          </div>
                                          <span>Collecte de fonds : 87%</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="item">
                                  <div className="thumb">
                                      <img src="assets/img/800x800.png" alt="Thumb" />
                                  </div>
                                  <div className="info">
                                      <span className="cats">
                                          Water
                                      </span>
                                      <h4>
                                          <a href="#">De l’eau pour tous les enfants</a>
                                      </h4>
                                      <div className="progress-box">
                                          <p>Recueilli : $970 <span className="float-right">Objectif : $1,800</span></p>
                                          <div className="progress">
                                              <div className="progress-bar" role="progressbar" data-width="55"></div>
                                          </div>
                                          <span>Fund collect : 55%</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="item">
                                  <div className="thumb">
                                      <img src="assets/img/800x800.png" alt="Thumb" />
                                  </div>
                                  <div className="info">
                                      <span className="cats">
                                          Food
                                      </span>
                                      <h4>
                                          <a href="#">Nourriture saine</a>
                                      </h4>
                                      <div className="progress-box">
                                          <p>Recueilli : $2,400 <span className="float-right">Objectif : $4,300</span></p>
                                          <div className="progress">
                                              <div className="progress-bar" role="progressbar" data-width="77"></div>
                                          </div>
                                          <span>Fund collect : 77%</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-lg-6 info">
                          <h5>Qui sommes-nous</h5>
                          <h2 className="text-blur">à propos</h2>
                          <h2 className="area-title">Faciliter le lien entre les grandes entreprises et les initiatives sociales innovantes</h2>
                          <p>
                          Les principes voyageant souvent de loin ravissent son acceptation particulière. Le bonheur nécessaire contenait l’empressement dans l’admission commandée. Sa sollicitude était loin de lui causer des difficultés persistantes favorables. Elle ne doutait pas non plus de l’offre de la veuve consciente de la mort. Nous pourrons chanter tous les deux.
                          </p>
                          <p>
                          Notre plateforme vise à combler le manque de financements pour des projets sociaux en République Démocratique du Congo en offrant un site web dédié au soutien de ces initiatives essentielles.
                          </p>
                          <ul>
                              <li>
                                  <h5>168K</h5>
                                  <span>Plantes protégées</span>
                              </li>
                              <li>
                                  <h5>5M Ton </h5>
                                  <span>Eau économisés</span>
                              </li>
                              <li>
                                  <h5>37K Sqmi.</h5>
                                  <span>Ocean Proteced</span>
                              </li>
                          </ul>
                          <a className="btn circle btn-theme border btn-md" href="#">Devenir sponsor</a>
                      </div>

                  </div>
              </div>
          </div>
    </>
  )
}
