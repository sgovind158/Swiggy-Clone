import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Resturant from './components/Resturant';
import UserInfo from "./Data/UserInfo.json"
import Offer from './Data/Offer.json';
import res from "./Data/res.json";
import { useState } from 'react';
import ResTitle from './components/ResTitle';

const filters=[
 "High to Low",
 "Low to High",
"Rating",
  "Delivery Time",
  "Relevence"
]



function App() {
const [filterBy,setFilterBy]=useState("")
const [data,setData]=useState(res)

const updateFilter=(newFilter)=>{
  switch(newFilter){
    case  "High to Low":{
      setFilterBy( "High to Low")
      data.sort((a,b)=>  b.costfortwo-a.costfortwo
      )
      console.log(data)
      setData([...data])
      break;
    }
    case  "Low to High":{
      setFilterBy("Low to High")
      data.sort((a,b)=>
        a.costfortwo-b.costfortwo
    )
    console.log(data)
    setData([...data])
      break;
    }
    default:{
      setData(res)
      break;
    }
  }
}



  return (
    <div className="App">
     <Navbar {...UserInfo.location}/>
     <Offers {...Offer.image}/>
     <section className="near-you">
    <ResTitle filters={filters}
    currentFilterBy={filterBy}
    updateFilter={updateFilter}/>

     <Resturant res={res}/>
     </section>
    </div>
  );
}

export default App;
