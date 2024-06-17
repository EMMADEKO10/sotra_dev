import {Pagination } from 'antd';
import Navbar from '../../components/Navbars/NavBar';
import Footer from '../../components/Footer';

const Blogs = () => {
    return (
      <div>
        <Navbar />
        {/* Début Breadcrumb */}
        <div
          className="breadcrumb-area relative text-center shadow-lg bg-fixed p-12 bg-cover bg-center"
          style={{ backgroundImage: "url('assets/img/2440x1578.png')" }}
        >
          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative container mx-auto z-10">
            <div className="breadcrumb-items">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Blogs
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fin Breadcrumb */}

        {/* Début Blog */}
        <div className="blog-area full-blog right-sidebar full-blog default-padding">
          <div className="container">
            <div className="blog-items">
              <div className="row">
                <div className="blog-content col-lg-8 col-md-12">
                  <div className="blog-item-box">
                    {/* Article Unique */}
                    <div className="single-item">
                      <div className="item wow fadeInUp">
                        <div className="thumb">
                          <a href="#">
                            <img
                              src="assets/img/1500x700.png"
                              alt="Thumbnail"
                            />
                          </a>
                        </div>
                        <div className="info">
                          <div className="tags">
                            <a href="#">Don</a>
                            <a href="#">Pauvreté</a>
                          </div>
                          <div className="meta">
                            <ul>
                              <li>
                                <i className="fas fa-calendar-alt"></i> 18 Nov,
                                2020
                              </li>
                              <li>
                                Par <a href="#">Park Lee</a>
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <a href="#">
                              La découverte incommode sérieusement aucun ordre
                              donné
                            </a>
                          </h4>
                          <p>
                            Erreur de positionnement vers son peu de pays
                            demandé. Vous avez ravi deux raptueux en fonction de
                            l'objection du bonheur quelque chose la partialité
                            non affectée. Incommode donc l'intention défectueuse
                            convaincue. A mené des revenus eux-mêmes et des
                            maisons
                          </p>
                          <a
                            className="btn circle btn-theme border btn-md"
                            href="#"
                          >
                            En savoir plus{" "}
                            <i className="fas fa-long-arrow-alt-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Fin Article Unique */}
                    {/* Autre Article Unique... */}
                  </div>

                  {/* Pagination */}
                  <div className="row">
                    <div className="col-md-12 pagi-area text-center">
                      <Pagination
                        defaultCurrent={1}
                        total={50}
                      />
                    </div>
                  </div>
                </div>
                {/* Début Sidebar */}
                <div className="sidebar wow fadeInLeft col-lg-4 col-md-12">
                  <aside>
                    {/* Zone de recherche */}
                    <div className="sidebar-item search">
                      <div className="sidebar-info">
                        <form>
                          <input
                            type="text"
                            name="text"
                            className="form-control"
                            placeholder="Recherche"
                          />
                          <button type="submit">
                            <i className="fas fa-search"></i>
                          </button>
                        </form>
                      </div>
                    </div>

                    {/* Zone de don */}
                    <div className="sidebar-item donation">
                      <div
                        className="sidebar-info"
                        style={{
                          backgroundImage: "url(assets/img/800x800.png)",
                        }}
                      >
                        <h4>Plus de 365 000+ personnes ont été aidées</h4>
                        <a href="#">
                          Faire un don maintenant{" "}
                          <i className="fas fa-angle-right"></i>
                        </a>
                      </div>
                    </div>

                    {/* Articles récents */}
                    <div className="sidebar-item recent-post">
                      <div className="title">
                        <h4>Articles récents</h4>
                      </div>
                      <ul>
                        <li>
                          <div className="thumb">
                            <a href="#">
                              <img
                                src="/img/800x800.png"
                                alt="Thumb"
                              />
                            </a>
                          </div>
                          <div className="info">
                            <a href="#">
                              Participer à la réunion du personnel gérer dédié
                            </a>
                            <div className="meta-title">
                              <span className="post-date">
                                <i className="fas fa-clock"></i> 12 fév, 2020
                              </span>
                            </div>
                          </div>
                        </li>
                        {/* Ajoutez d'autres éléments d'articles récents ici... */}
                      </ul>
                    </div>

                    {/* Liste des catégories */}
                    <div className="sidebar-item category">
                      <div className="title">
                        <h4>Liste des catégories</h4>
                      </div>
                      <div className="sidebar-info">
                        <ul>
                          <li>
                            <a href="#">
                              national <span>(69)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              national <span>(25)</span>
                            </a>
                          </li>
                          {/* Ajoutez d'autres catégories ici... */}
                        </ul>
                      </div>
                    </div>

                    {/* Galerie */}
                    <div className="sidebar-item gallery">
                      <div className="title">
                        <h4>Galerie</h4>
                      </div>
                      <div className="sidebar-info">
                        <ul>{/* Ajoutez des images de la galerie ici... */}</ul>
                      </div>
                    </div>

                    {/* Archives */}
                    <div className="sidebar-item archives">
                      <div className="title">
                        <h4>Archives</h4>
                      </div>
                      <div className="sidebar-info">
                        <ul>
                          <li>
                            <a href="#">août 2020</a>
                          </li>
                          <li>
                            <a href="#">sept 2020</a>
                          </li>
                          {/* Ajoutez d'autres mois d'archives ici... */}
                        </ul>
                      </div>
                    </div>

                    {/* Suivez-nous */}
                    <div className="sidebar-item social-sidebar">
                      <div className="title">
                        <h4>Suivez-nous</h4>
                      </div>
                      <div className="sidebar-info">
                        <ul>
                          <li className="facebook">
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          {/* Ajoutez d'autres liens de réseaux sociaux ici... */}
                        </ul>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="sidebar-item tags">
                      <div className="title">
                        <h4>Tags</h4>
                      </div>
                      <div className="sidebar-info">
                        <ul>
                          <li>
                            <a href="#">Mode</a>
                          </li>
                          {/* Ajoutez d'autres tags ici... */}
                        </ul>
                      </div>
                    </div>
                  </aside>
                </div>

                {/* Fin Sidebar */}
              </div>
            </div>
          </div>
        </div>
        {/* Fin Blog */}
        <Footer />
      </div>
    )
}

export default Blogs;
