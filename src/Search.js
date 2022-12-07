import React, {useState} from "react";
import data from "./data"
import "./search.css"
const Search = (props) => {
    console.log(props.a);
    // if(props.a){
    //   console.log(props.a);

    // }
    const [filter, setFilter] = useState('');
    const searchText = (event) => {
        setFilter(event.target.value) ;  
    }
    //--------------------
    var smallData
    if(props.a != 'none'){
      smallData = data.cardData.filter(item=> item.desc===props.a)
      console.log(smallData);

    }
    else{
      smallData = data.cardData
      console.log(smallData);
    }
    //-----------------------------
    let dataSearch = smallData.filter(item =>{
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    });
    return(
        <section className="py-4 container">
            <div className="row justify-content-center">
              <div className="row mb-5 justify-content-evenly top">
                <div className="col-lg-5 col-md-5 col-sm-5 col-12">
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
                <div className="col-lg-4 col-md-4 col-sm-4 col-12  ps-5  align-self-center justify-content-center">
                  <div>
                    {props.children}
                  </div>

                </div>
              </div>
              
              


                
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
    )
}
export default Search