import React from 'react'

const ResTitle = ({filters,currentFilterBy,updateFilter}) => {

   

  return (
    <div className="container restaurants">
            <h1>50 restaurants</h1>
         
            <div className="restaurant-options">
          {filters.map((value,key)=>(
              <div key={key} className={`restaurant-options ${currentFilterBy===value?"underline":""}`} onClick={()=>updateFilter(value)}>{value}</div>
          ))}

    
            </div>
    </div>
  )
}

export default ResTitle