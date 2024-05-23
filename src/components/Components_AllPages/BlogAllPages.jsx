// import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Table from '../../components/Components_AllPages/TableProjet'
import { useState } from 'react';

export default function BlogAllPages() {
    const [isListProjet, setIsListProjet] = useState(false)
    
    function handleClickIconList(){
        setIsListProjet(!isListProjet)
    }
  return (
    <div>
      {/* <!-- Start Blog
    ============================================= --> */}
    <div className="block blog-area full-blog blog-standard full-blog grid-colum mt-10  pr-20">
              {/* Barre de recherche */}
              <div className="input-group mb-3 mr-20 items-center justify-center flex gap-10 pr-10">
                  <span className="input-group-text">
                      <i className="bi bi-search"></i>
                  </span>
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Rechercher un projet ..."
                  />
                  <MenuIcon onClick={handleClickIconList} className=''/>
              </div>

    </div>
    {/* <!-- End Blog --> */}
          {isListProjet ? (<BlogArea />):( <Table />)}

    </div>
  )
}

function BlogArea(){
    return(
        <div>
            <div className="container">
                <div className="blog-items content-less">
                    <div className="blog-content">
                        <div className="blog-item-box">
                            <div className="row">
                                {/* <!-- Single Item --> */}
                                <div className="col-lg-4 col-md-6 single-item">
                                    <div className="item wow fadeInUp" data-wow-delay="500ms">
                                        <div className="thumb">
                                            <a href="#">
                                                <img src="assets/img/800x600.png" alt="Thumb" />
                                            </a>
                                        </div>
                                        <div className="info">
                                            <div className="tags">
                                                <a href="#">Poor</a>
                                                <a href="#">Health</a>
                                            </div>
                                            <div className="meta">
                                                <ul>
                                                    <li><i className="fas fa-calendar-alt"></i> 05 Dec, 2020</li>
                                                    <li>By <a href="#">Park Lee</a></li>
                                                </ul>
                                            </div>
                                            <h4>
                                                <a href="#">Lasting out end article express fortune demands own charmed</a>
                                            </h4>
                                            <div className='flex flex-col'>
                                                <a className="btn circle btn-theme border btn-sm" href="#">Read More <i className="fas fa-long-arrow-alt-right"></i></a>
                                                <a className="btn circle btn-theme border btn-sm" href="#">Modifier </a>
                                                <a className="btn circle btn-theme border btn-sm" href="#">Supprimer </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Single Item -->
                            <!-- Single Item --> */}
                            
                                <div className="col-lg-4 col-md-6 single-item">
                                    <div className="item wow fadeInUp" data-wow-delay="600ms">
                                        <div className="thumb">
                                            <a href="#">
                                                <img src="assets/img/800x600.png" alt="Thumb" />
                                            </a>
                                        </div>
                                        <div className="info">
                                            <div className="tags">
                                                <a href="#">Education</a>
                                                <a href="#">Donate</a>
                                            </div>
                                            <div className="meta">
                                                <ul>
                                                    <li><i className="fas fa-calendar-alt"></i> 26 Sep, 2020</li>
                                                    <li>By <a href="#">Park Lee</a></li>
                                                </ul>
                                            </div>
                                            <h4>
                                                <a href="#">Surprise steepest recurred landlord mr wandered</a>
                                            </h4>
                                            <a className="btn circle btn-theme border btn-sm" href="#">Read More <i className="fas fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Single Item -->
                            <!-- Single Item --> */}
                                <div className="col-lg-4 col-md-6 single-item">
                                    <div className="item wow fadeInUp" data-wow-delay="700ms">
                                        <div className="thumb">
                                            <a href="#">
                                                <img src="assets/img/800x600.png" alt="Thumb" />
                                            </a>
                                        </div>
                                        <div className="info">
                                            <div className="tags">
                                                <a href="#">Water</a>
                                                <a href="#">Pure</a>
                                            </div>
                                            <div className="meta">
                                                <ul>
                                                    <li><i className="fas fa-calendar-alt"></i> 18 Nov, 2020</li>
                                                    <li>By <a href="#">Park Lee</a></li>
                                                </ul>
                                            </div>
                                            <h4>
                                                <a href="#">Old insipidity motionless continuing law shy partiality.</a>
                                            </h4>
                                            <a className="btn circle btn-theme border btn-sm" href="#">Read More <i className="fas fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Single Item -->
                            <!-- Single Item --> */}
                                <div className="col-lg-4 col-md-6 single-item">
                                    <div className="item wow fadeInUp" data-wow-delay="500ms">
                                        <div className="thumb">
                                            <a href="#">
                                                <img src="assets/img/800x600.png" alt="Thumb" />
                                            </a>
                                        </div>
                                        <div className="info">
                                            <div className="tags">
                                                <a href="#">Children</a>
                                                <a href="#">Help</a>
                                            </div>
                                            <div className="meta">
                                                <ul>
                                                    <li><i className="fas fa-calendar-alt"></i> 30 Dec, 2020</li>
                                                    <li>By <a href="#">John</a></li>
                                                </ul>
                                            </div>
                                            <h4>
                                                <a href="#">Inquietude simplicity terminated she compliment</a>
                                            </h4>
                                            <a className="btn circle btn-theme border btn-sm" href="#">Read More <i className="fas fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Single Item -->
                            <!-- Single Item --> */}
                                <div className="col-lg-4 col-md-6 single-item">
                                    <div className="item wow fadeInUp" data-wow-delay="600ms">
                                        <div className="thumb">
                                            <a href="#">
                                                <img src="assets/img/800x600.png" alt="Thumb" />
                                            </a>
                                        </div>
                                        <div className="info">
                                            <div className="tags">
                                                <a href="#">Africa</a>
                                                <a href="#">School</a>
                                            </div>
                                            <div className="meta">
                                                <ul>
                                                    <li><i className="fas fa-calendar-alt"></i> 05 Dec, 2020</li>
                                                    <li>By <a href="#">Park Lee</a></li>
                                                </ul>
                                            </div>
                                            <h4>
                                                <a href="#">Lasting out end article express fortune demands own charmed</a>
                                            </h4>
                                            <a className="btn circle btn-theme border btn-sm" href="#">Read More <i className="fas fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Single Item -->
                            <!-- Single Item --> */}
                                <div className="col-lg-4 col-md-6 single-item">
                                    <div className="item wow fadeInUp" data-wow-delay="700ms">
                                        <div className="thumb">
                                            <a href="#">
                                                <img src="assets/img/800x600.png" alt="Thumb" />
                                            </a>
                                        </div>
                                        <div className="info">
                                            <div className="tags">
                                                <a href="#">Child</a>
                                                <a href="#">Health</a>
                                            </div>
                                            <div className="meta">
                                                <ul>
                                                    <li><i className="fas fa-calendar-alt"></i> 26 Sep, 2020</li>
                                                    <li>By <a href="#">Park Lee</a></li>
                                                </ul>
                                            </div>
                                            <h4>
                                                <a href="#">Surprise steepest recurred landlord mr wandered.</a>
                                            </h4>
                                            <a className="btn circle btn-theme border btn-sm" href="#">Read More <i className="fas fa-long-arrow-alt-right"></i></a>
                                            
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Single Item --> */}
                            </div>

                            {/* <!-- Pagination --> */}
                            <div className="row">
                                <div className="col-md-12 pagi-area text-center">
                                    <nav aria-label="navigation">
                                        <ul className="pagination">
                                            <li className="page-item"><a className="page-link" href="#"><i className="fas fa-angle-double-left"></i></a></li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#"><i className="fas fa-angle-double-right"></i></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}