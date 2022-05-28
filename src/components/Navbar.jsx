import React from 'react'
import logo from "../logo.svg"
const Navbar = (props) => {

    const navTitle=[
        {
            iconName:" person_outline",
            label:"Sign in"
        },

        {
            iconName:"shopping_bag",
            label:" Cart"
        },
        {
            iconName:"support",
            label:"Help"
        },
        {
            iconName:"search",
            label:"Search"
        }
    ]

    
  return (
    
         <section className="navbar">
        <div className="container">
            <img className="logo" src={logo}/>
            <div className="location">
                <span className="city">{props.city}</span>
                <span className="state">{props.state}, {props.country}</span>
            </div>


            <div className="navbar-options">
              { navTitle.map((title,index)=>{
                    return ( <div key={index}className="navbar-option">
                 
                    <span className="material-icons">{title.iconName}</span> {title.label}
                    </div>)
               })}
            </div>
        </div>
        
    </section>
    
  )
}

export default Navbar