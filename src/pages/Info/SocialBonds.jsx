import React from "react"
import { Button, List, Input, Divider, Tag, Space, Avatar, Tooltip } from "antd"
import "animate.css/animate.min.css"
import Navbar from "../../components/Navbars/NavBar"
import Footer from "../../components/Footer"
import RetourEnHaut from "../../components/bouton/RetourEnHaut"

const { TextArea } = Input

const SocialBonds = () => {
  return (
    <>
      <Navbar />
      {/* Section Breadcrumb avec effet parallaxe */}
      <div
        className="breadcrumb-area relative text-center shadow-lg p-12 bg-cover bg-center"
        style={{
          backgroundImage: "url(/sotradonsImage/10.jpg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto z-10">
          <div className="breadcrumb-items">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Social Bonds
            </h2>
            <nav className="text-white">
              <a
                href="/"
                className="hover:underline"
              >
                Accueil
              </a>{" "}
              &gt; <span>Social Bonds</span>
            </nav>
          </div>
        </div>
      </div>
      
      <div className="  bg-fixed bg-gray-100 blog-area single full-blog full-blog default-padding py-5 animate__animated animate__fadeInUp">
        <div className="container mx-auto ">
          <div className="blog-items">
            <div className="row justify-center">
              <div className="blog-content col-lg-10 offset-lg-1 col-md-12">
                <div className="item">
                  <div className="blog-item-box shadow-lg rounded-lg p-6 bg-white">
                    {/* Start Post Thumb */}
                    <div className="thumb w-full h- flex items-center justify-center opacity-90">
                      <img
                        src="/socialbonds.jpg"
                        alt="Thumb"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>

                    {/* End Post Thumb */}

                    <div className="info">
                      <div className="container mx-auto px-4 py-12 animate__animated animate__fadeInUp">
                        <div className="max-w-3xl mx-auto">
                          <div className="tags mb-4">
                            <Tag color="blue">Social Bonds</Tag>
                            <Tag color="green">Investissement Social</Tag>
                          </div>
                          <div className="meta mb-4">
                            <Space>
                              <span>
                                <i className="fas fa-calendar-alt"></i> 05 jui,
                                2024
                              </span>
                              <span>
                                Par <a href="#">Christelle Haridi</a>
                              </span>
                            </Space>
                          </div>
                          <h3 className="text-4xl font-bold mb-4 leading-snug text-gray-900">
                            Comprendre les Social Bonds sur la RSE Market Place
                          </h3>
                          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
                            Les Social Bonds sont des instruments financiers
                            innovants qui permettent aux entreprises et aux
                            investisseurs de financer des projets sociaux
                            vérifiés via une plateforme dédiée, assurant ainsi
                            un impact positif mesurable sur la société tout en
                            maximisant la transparence et la traçabilité des
                            fonds investis.
                          </p>
                          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
                            Chaque Social Bond, évalué à 1000 USD, représente
                            une contribution directe à des initiatives sociales
                            sélectionnées par des organisations spécialisées.
                            Ces projets sont rigoureusement évalués et suivis
                            par des entités indépendantes comme la Fondation
                            SARA, garantissant ainsi leur alignement avec des
                            normes strictes en matière d'impact social et de
                            gestion financière responsable.
                          </p>

                          <blockquote className="border-l-4 border-gray-300 pl-4 mb-6 italic text-gray-600 leading-relaxed animate__animated animate__fadeInUp">
                            "Les Social Bonds facilitent l'allocation efficace
                            des ressources vers des projets sociaux, avec un
                            suivi transparent des impacts et des contributions
                            financières."{" "}
                            <cite className="block mt-2 font-medium">
                              – Al Kitenge
                            </cite>
                          </blockquote>

                          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
                            La RSE Market Place fournit une infrastructure
                            sécurisée où les sponsors peuvent investir en toute
                            confiance, sachant que leurs contributions sont
                            utilisées de manière efficace pour générer un impact
                            social positif mesurable. La supervision régulière
                            par la Fondation Entreprendre assure que tous les
                            projets financés via les Social Bonds respectent les
                            critères établis et fournissent des bénéfices
                            tangibles à la communauté.
                          </p>
                          <h4 className="text-3xl font-semibold mb-4 leading-snug text-gray-900">
                            Fonctionnement des Social Bonds
                          </h4>
                          <ul className="list-disc list-inside mb-6 text-lg text-gray-700 leading-relaxed">
                            <li>
                              Les sponsors acquièrent des Social Bonds pour
                              financer des projets sociaux sélectionnés avec
                              soin.
                            </li>
                            <li>
                              Les projets sont proposés par des organisations
                              accréditées et évalués selon des critères stricts
                              par la Fondation SARA.
                            </li>
                            <li>
                              La Fondation Entreprendre supervise la régulation
                              et le reporting des projets financés.
                            </li>
                            <li>
                              Les sponsors ont la possibilité de diversifier
                              leurs investissements sur plusieurs projets,
                              augmentant ainsi leur impact global.
                            </li>
                            <li>
                              À la fin de chaque période, les Social Bonds
                              accumulés par chaque sponsor sont comptabilisés
                              pour mesurer leur engagement et leur impact
                              social.
                            </li>
                          </ul>

                          <div className="row">
                            <div className="col-lg-6 mb-6">
                              <p className="text-lg text-gray-700 leading-relaxed">
                                En investissant dans des Social Bonds, les
                                sponsors renforcent leur visibilité et leur
                                réputation en tant que leaders engagés dans le
                                développement durable et la responsabilité
                                sociale. Cela leur permet également de réduire
                                les risques associés à leurs investissements,
                                tout en maximisant leur influence positive sur
                                la société.
                              </p>
                            </div>
                            <div className="col-lg-6">
                              <p className="text-lg text-gray-700 leading-relaxed">
                                La structure transparente de la RSE Market Place
                                garantit que chaque dollar investi est suivi et
                                évalué pour son efficacité et son impact,
                                offrant aux sponsors des rapports détaillés sur
                                l'utilisation de leurs fonds et les résultats
                                obtenus.
                              </p>
                            </div>
                          </div>

                          {/* Tags and Social Share */}
                          <div className="post-tags share flex justify-between items-center my-12">
                            <div className="tags">
                              <Tag color="magenta">Investissement</Tag>
                              <Tag color="magenta">Impact Social</Tag>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RetourEnHaut />
      <Footer />
    </>
  )
}

export default SocialBonds
