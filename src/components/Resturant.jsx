import React from 'react'
import ResTitle from './ResTitle'

const Resturant = (props) => {
  return (
  
     
        <div className="container divider">
            <div className="cards">
                {props.res.map((res,index)=>(
                <div key={index} className="card">
                    <img width="254" height="160px" src={res.image} />
                    <div className="restaurant-details">
                        <div className="restaurant-title">{res.name}</div>
                        <div className="restaurant-subtitle">{res.category.join(", ")} </div>
                    </div>
                    <div className="restaurant-info">
                        <div className="restaurant-ratings">
                            <i className="material-icons star-icon">star</i>{res.rating}
                        </div>
                         .<div className="restaurant-delivery-timings"> {res.deliveryTimings}</div> .
                        <div className="restaurant-cost-for-two">{res.costfortwo}</div>
                    </div>
                    <div className="offer-banner">
                        <span className="material-icons"> local_offer </span>
                        <span className="offer-text">{res.offer.join(" | ")}</span>
                    </div>
                </div>
                ))}
                </div>
        </div>
    
  )
}

export default Resturant