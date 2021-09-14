import React from "react";

var SocialCrisies = React.createClass({
    render: function() {
      return (
        <div>
          
          <section className="header shadow-sm col-sm-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <div  className="navbar-brand" href="#">Crisis</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-8">
                    <li className="nav-item">
                      <button type="button" className="btn btn-primary shadow"><i className="fas fa-plus" /> New Post</button>
                    </li>
                    <form className="d-flex col-9 ms-5">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                  </ul>
                  <div className="d-flex">
                    <button type="button" className="btn btn-primary shadow">
                      <i className="fas fa-sign-in-alt" />
                      Login
                    </button>
                    <button type="button" className="btn btn-primary shadow ms-2"> 
                      <i className="fas fa-user-plus" /> 
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </section>
          <section className="tags mt-5 col-sm-12">
            <div className="container">
              <div className="row">
                <div className="d-flex justify-content-center col-sm-12" style={{height: 'auto'}}>
                  <div className="col-md-12 col-sm-12 col-12 d-flex justify-content-center" style={{height: 'auto'}}>
                    {/* Card 1 */}
                    <div className="card col-2  shadow me-4 float-start">
                      <div className="card-body">
                        <h5 className="card-title">International Social Issues</h5>
                        <div  href="#" className="btn btn-primary">
                          <i className="fas fa-angle-double-right" /> More
                        </div>
                      </div>
                    </div>
                    {/* End Card */}
                    {/* Card 2 */}
                    <div className="card col-2  shadow me-4 float-start ">
                      <div className="card-body">
                        <h5 className="card-title">International Social Issues</h5>
                        <div  href="#" className="btn btn-primary">
                          <i className="fas fa-angle-double-right" /> More
                        </div>
                      </div>
                    </div>
                    {/* End Card */}
                    {/* Card 3 */}
                    <div className="card col-2  shadow me-4 float-start ">
                      <div className="card-body">
                        <h5 className="card-title">International Social Issues</h5>
                        <div  href="#" className="btn btn-primary">
                          <i className="fas fa-angle-double-right" /> More
                        </div>
                      </div>
                    </div>
                    {/* End Card */}
                    {/* Card 4 */}
                    <div className="card col-2  shadow me-4 float-start ">
                      <div className="card-body">
                        <h5 className="card-title">International Social Issues</h5>
                        <div  href="#" className="btn btn-primary">
                          <i className="fas fa-angle-double-right" /> More
                        </div>
                      </div>
                    </div>
                    {/* End Card */}
                    {/* Card 5 */}
                    <div className="card col-2  shadow me-4 float-start ">
                      <div className="card-body">
                        <h5 className="card-title">International Social Issues</h5>
                        <div  href="#" className="btn btn-primary">
                          <i className="fas fa-angle-double-right" /> More
                        </div>
                      </div>
                    </div>
                    {/* End Card */}
                  </div>			
                </div>
              </div>
            </div>
          </section>
          <section className="filtter">
            <div className="container">
              <div className="row">
                <div className="col-12 mt-5 bg-light p-1 rounded d-flex justify-content-center" style={{height: '50px'}}>
                  <div className=" d-flex flex-row col-6">
                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                      <div className="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          HIGHEST SCORING
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                          <li><div  className="dropdown-item" href="#">Dropdown link</div></li>
                          <li><div  className="dropdown-item" href="#">Dropdown link</div></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row-reverse col-6">
                    <button className="btn btn-primary me-2">WEEK</button>
                    <button className="btn btn-primary me-2">
                      <i className="fas fa-bars" />
                    </button>
                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                      {/* City Button */}
                      <div className="btn-group me-2" role="group">
                        <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fas fa-city" /> City
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                          <li><div  className="dropdown-item" href="#">Dropdown link</div></li>
                          <li><div  className="dropdown-item" href="#">Dropdown link</div></li>
                        </ul>
                      </div>
                      {/* End */}
                      {/* State Button */}
                      <div className="btn-group me-2" role="group">
                        <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fas fa-flag-usa" /> State
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                          <li><div  className="dropdown-item" href="#">Dropdown link</div></li>
                          <li><div  className="dropdown-item" href="#">Dropdown link</div></li>
                        </ul>
                      </div>
                      {/* End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="posts">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 mt-1 p-1">
                  {/* card */}
                  <div className="float-start col-3 p-1">
                    <div className="card shadow">
                      <img src="https://picsum.photos/200/150" className="card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                        <h6 className="card-title">Card title</h6>
                        <div className="col-12 d-flex justify-content-center" style={{height: '30px'}}>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-arrow-up" /> 3,000
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="far fa-comment-alt" /> 2,00
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-eye" />12k
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card */}
                  {/* card */}
                  <div className="float-start col-3 p-1">
                    <div className="card shadow">
                      <img src="https://picsum.photos/200/150" className="card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                        <h6 className="card-title">Card title</h6>
                        <div className="col-12 d-flex justify-content-center" style={{height: '30px'}}>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-arrow-up" /> 3,000
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="far fa-comment-alt" /> 2,00
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-eye" />12k
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card */}
                  {/* card */}
                  <div className="float-start col-3 p-1">
                    <div className="card shadow">
                      <img src="https://picsum.photos/200/150" className="card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                        <h6 className="card-title">Card title</h6>
                        <div className="col-12 d-flex justify-content-center" style={{height: '30px'}}>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-arrow-up" /> 3,000
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="far fa-comment-alt" /> 2,00
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-eye" />12k
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card */}
                  {/* card */}
                  <div className="float-start col-3 p-1">
                    <div className="card shadow">
                      <img src="https://picsum.photos/200/150" className="card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                        <h6 className="card-title">Card title</h6>
                        <div className="col-12 d-flex justify-content-center" style={{height: '30px'}}>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-arrow-up" /> 3,000
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="far fa-comment-alt" /> 2,00
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-eye" />12k
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card */}
                  {/* card */}
                  <div className="float-start col-3 p-1">
                    <div className="card shadow">
                      <img src="https://picsum.photos/200/150" className="card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                        <h6 className="card-title">Card title</h6>
                        <div className="col-12 d-flex justify-content-center" style={{height: '30px'}}>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-arrow-up" /> 3,000
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="far fa-comment-alt" /> 2,00
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-eye" />12k
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card */}
                  {/* card */}
                  <div className="float-start col-3 p-1">
                    <div className="card shadow">
                      <img src="https://picsum.photos/200/150" className="card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                        <h6 className="card-title">Card title</h6>
                        <div className="col-12 d-flex justify-content-center" style={{height: '30px'}}>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-arrow-up" /> 3,000
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="far fa-comment-alt" /> 2,00
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-eye" />12k
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card */}
                  {/* card */}
                  <div className="float-start col-3 p-1">
                    <div className="card shadow">
                      <img src="https://picsum.photos/200/150" className="card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                        <h6 className="card-title">Card title</h6>
                        <div className="col-12 d-flex justify-content-center" style={{height: '30px'}}>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-arrow-up" /> 3,000
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="far fa-comment-alt" /> 2,00
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-eye" />12k
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card */}
                  {/* card */}
                  <div className="float-start col-3 p-1">
                    <div className="card shadow">
                      <img src="https://picsum.photos/200/150" className="card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                        <h6 className="card-title">Card title</h6>
                        <div className="col-12 d-flex justify-content-center" style={{height: '30px'}}>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-arrow-up" /> 3,000
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="far fa-comment-alt" /> 2,00
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-eye" />12k
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card */}
                  {/* card */}
                  <div className="float-start col-3 p-1">
                    <div className="card shadow">
                      <img src="https://picsum.photos/200/150" className="card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                        <h6 className="card-title">Card title</h6>
                        <div className="col-12 d-flex justify-content-center" style={{height: '30px'}}>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-arrow-up" /> 3,000
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="far fa-comment-alt" /> 2,00
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-eye" />12k
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card */}
                  {/* card */}
                  <div className="float-start col-3 p-1">
                    <div className="card shadow">
                      <img src="https://picsum.photos/200/150" className="card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                        <h6 className="card-title">Card title</h6>
                        <div className="col-12 d-flex justify-content-center" style={{height: '30px'}}>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-arrow-up" /> 3,000
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="far fa-comment-alt" /> 2,00
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-eye" />12k
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card */}
                  {/* card */}
                  <div className="float-start col-3 p-1">
                    <div className="card shadow">
                      <img src="https://picsum.photos/200/150" className="card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                        <h6 className="card-title">Card title</h6>
                        <div className="col-12 d-flex justify-content-center" style={{height: '30px'}}>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-arrow-up" /> 3,000
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="far fa-comment-alt" /> 2,00
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-eye" />12k
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card */}
                  {/* card */}
                  <div className="float-start col-3 p-1">
                    <div className="card shadow">
                      <img src="https://picsum.photos/200/150" className="card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                        <h6 className="card-title">Card title</h6>
                        <div className="col-12 d-flex justify-content-center" style={{height: '30px'}}>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-arrow-up" /> 3,000
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="far fa-comment-alt" /> 2,00
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-eye" />12k
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card */}
                  {/* card */}
                  <div className="float-start col-3 p-1">
                    <div className="card shadow">
                      <img src="https://picsum.photos/200/150" className="card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                        <h6 className="card-title">Card title</h6>
                        <div className="col-12 d-flex justify-content-center" style={{height: '30px'}}>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-arrow-up" /> 3,000
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="far fa-comment-alt" /> 2,00
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-eye" />12k
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card */}
                  {/* card */}
                  <div className="float-start col-3 p-1">
                    <div className="card shadow">
                      <img src="https://picsum.photos/200/150" className="card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                        <h6 className="card-title">Card title</h6>
                        <div className="col-12 d-flex justify-content-center" style={{height: '30px'}}>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-arrow-up" /> 3,000
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="far fa-comment-alt" /> 2,00
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-eye" />12k
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card */}
                  {/* card */}
                  <div className="float-start col-3 p-1">
                    <div className="card shadow">
                      <img src="https://picsum.photos/200/150" className="card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                        <h6 className="card-title">Card title</h6>
                        <div className="col-12 d-flex justify-content-center" style={{height: '30px'}}>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-arrow-up" /> 3,000
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="far fa-comment-alt" /> 2,00
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-eye" />12k
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card */}
                  {/* card */}
                  <div className="float-start col-3 p-1">
                    <div className="card shadow">
                      <img src="https://picsum.photos/200/150" className="card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                        <h6 className="card-title">Card title</h6>
                        <div className="col-12 d-flex justify-content-center" style={{height: '30px'}}>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-arrow-up" /> 3,000
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="far fa-comment-alt" /> 2,00
                          </div>
                          <div className="col-4  p-1" style={{height: '30px', fontWeight: 'bold'}}>
                            <i className="fas fa-eye" />12k
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card */}
                </div>
              </div>
            </div>
          </section>
          <section className="bottom-menu position-fixed col-12 col-sm-12" style={{zIndex: 9999, bottom: '0px'}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <div  className="navbar-brand" href="#">Crisis</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-8">
                    <li className="nav-item">
                      <button type="button" className="btn btn-primary shadow"><i className="fas fa-plus" /> New Post</button>
                    </li>
                    <form className="d-flex col-9 ms-5">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                  </ul>
                  <div className="d-flex">
                    <button type="button" className="btn btn-primary shadow">
                      <i className="fas fa-sign-in-alt" />
                      Login
                    </button>
                    <button type="button" className="btn btn-primary shadow ms-2"> 
                      <i className="fas fa-user-plus" /> 
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </section>
        </div>
      );
    }
  });

  export default SocialCrisies;