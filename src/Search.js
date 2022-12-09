import React, {useState} from "react";
import data from "./data"
import "./search.css"
const Search = (props) => {
    console.log(props);
    const [filter, setFilter] = useState('');
    const searchText = (event) => {
        setFilter(event.target.value) ; 
    }
    //--------------------
    var smallData
    if(props.a !== 'none'){
      smallData = data.cardData.filter(item=> item.desc===props.a)
      // console.log(smallData);

    }
    else{
      smallData = data.cardData
      // console.log(smallData);
    }
    //-----------------------------
    let dataSearch = smallData.filter(item =>{
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    });
    return(
        <section className="py-4 container">
          <div className="row justify-content-center no-gutters">
            <nav className="navbar navbar-expand-lg bg-light fixed-top border border-bottom shadow-sm">
                <div className="container-fluid col-lg-8 col-md-8 col-sm-12 col-12 navigation ">
                    <div className="d-flex col-8 search rounded border border-1 border-opacity-25" role="search">
                      <input
                        type = "text"
                        className="form-control search_input"
                        placeholder="Search Here"
                        value={filter}
                        onChange={searchText.bind(this)}
                      />
                      <span className="fa-solid fa-magnifying-glass searchspan text-muted"></span>
                    </div>
                    <div className="right">
                      
                        {props.children}
                      
                    </div>
                </div>
              </nav>
          
            

            

                {dataSearch.map((item, index)=>{
                  
                    return(
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6 mx-0 mb-4" key={index}>
                            <div className="card p-0 overflow-hidden h-100 shadow" >
                                <div className="text-center">
                                    <img src={item.img} className="card-img-top img-fluid" alt={item.title + "image"}/>
                                </div>
                                <div className="card-body text-center d-flex flex-column" >
                                    
                                        <div className="helo">
                                            <div>
                                                <h5 className="card-title">{item.title}</h5>
                                            </div>
                                            <div>
                                                <p className="cat_name">{item.desc}</p>
                                                <p className="price"><i className="fa-solid fa-indian-rupee-sign me-1 text-muted"></i>{item.price}</p>
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="mybtn">
                                            <button className="btn btn-primary btn-sm ">Buy Now</button>
                                            {/* <input type='submit' value='Buy Now' className="btn btn-primary btn-sm "></input> */}
                                        </div>
                                        
                                    
                                    
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}
export default Search