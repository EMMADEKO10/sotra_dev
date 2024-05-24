

export default function Donnation() {
  return (
    <>
          <div className="donation-area text-light bg-gray default-padding">
              {/* <!-- Fixed BG--> */}
              <div className="fixed-bg" style={{ backgroundImage: "url('assets/img/blogs/side-view-people-chatting-work.jpg')" }}></div> 

              {/* <!-- End Fixed BG--> */}
              <div className="container">
                  <div className="row align-center">
                      <div className="col-lg-6 info">
                          <h5>Faire un don maintenant</h5>
                          <h2 className="area-title">Faites un don aujourd’hui et participez à sauver le monde</h2>
                          <p>
                          Dessins sir gay ensemble propriétaire avait la loi la plus petite. Autrefois accueilli assisté déclaré met dit déverrouillé. Jennings n’a survécu à aucun logement dénotant en particulier comme il le croyait. Comportement excellent middleton être comme il s’éloigne de la curiosité nous-mêmes. Pour chercher deux cousins réguliers parmi.
                          </p>
                          <div className="question">
                              <div className="icon">
                                  <i className="fas fa-phone"></i>
                              </div>
                              <div className="info">
                                  <h5>Vous avez des questions sur les dons? </h5>
                                  <span>Appelez maintenant: +2433456789</span>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6 donation-form">
                          <div className="form-box">
                              <form action="#">
                                  <div className="row">
                                      <div className="col-lg-6">
                                          <div className="form-group">
                                              <label htmlFor="Amount">Montant</label>
                                              <div className="input-group">
                                                  <input type="text" className="form-control" id="Amount" placeholder="$129.00" required />
                                                  <span className="input-group-addon"><i className="fas fa-dollar-sign"></i></span>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-6">
                                          <div className="form-group">
                                              <label htmlFor="donateType">Fréquence</label>
                                              <select id="donateType" className="form-control">
                                                  <option value="once">une fois</option>
                                                  <option value="weekly">Hebdomadaire</option>
                                                  <option value="Fortnightly">Tous les quinze jours</option>
                                                  <option value="Monthly">Mensuel</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="col-md-12">
                                          <div className="form-group">
                                              <label htmlFor="cardNumber">Numéro de carte</label>
                                              <div className="input-group">
                                                  <input type="text" className="form-control" id="cardNumber" placeholder="Valid Card Number" required />
                                                  <span className="input-group-addon"><i className="fas fa-credit-card"></i></span>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-7 col-sm-7 col-xs-8">
                                          <div className="form-group">
                                              <div className="row">
                                                  <div className="col-sm-12">
                                                      <label htmlFor="expMonth">Date d expiration</label>
                                                  </div>
                                              </div>
                                              <div className="row">
                                                  <div className="col-md-6 col-sm-6 col-xs-6">
                                                      <input type="text" className="form-control" id="expMonth" placeholder="MM" required data-stripe="exp_month" />
                                                  </div>
                                                  <div className="col-md-6 col-sm-6 col-xs-6">
                                                      <input type="text" className="form-control" name="expYear" placeholder="YY" required data-stripe="exp_year" />
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-5 col-sm-5 col-xs-4 pull-right">
                                          <div className="form-group">
                                              <label htmlFor="cvCode">CV Code</label>
                                              <input type="password" className="form-control" id="cvCode" placeholder="CV" required data-stripe="cvc" />
                                          </div>
                                      </div>
                                      <div className="col-md-12">
                                          <button className="btn btn-theme effect btn-md" type="submit">Faire un don maintenant</button>
                                      </div>
                                  </div>
                              </form>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}
