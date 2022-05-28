import React from 'react'

const Offers = (props) => {
  return (
    <section className="offers">
    <div className="container">
        <img className="offer" src={props.img1} />
        <img className="offer" src={props.img2} />
        <img className="offer" src={props.img3}/>
        <img className="offer" src={props.img4}/>
    </div>
   </section>
  )
}

export default Offers