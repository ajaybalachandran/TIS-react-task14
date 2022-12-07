<section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12 mb-5">
                    <div className="mb-3 col-lg-4 col-md-6 col-sm-6 mx-auto text-center">
                        {/* <label className="form-label h4">Search</label> */}
                        <div className="row search">
                          <div className="col-10">
                            <input
                              type = "text"
                              className="form-control"
                              placeholder="Search Here"
                              value={filter} 
                              onChange={searchText.bind(this)}
                            />
                          </div>
                          <div className="col-2">
                            <i className="fa-solid fa-magnifying-glass"></i>
                          </div>
                        </div>
                        
                       
                    </div>
                </div>

                {props.children}
                
                {dataSearch.map((item, index)=>{

                    return(
                        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                            <div className="card p-0 overflow-hidden h-100 shadow" >
                                <img src={item.img} className="card-img-top" alt={item.title + "image"}/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <div className="card-text">
                                        <p>{item.desc}</p>
                                        <p>{item.price}</p>
                                        <input type='submit' value='Buy Now' className="btn btn-primary"></input>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>