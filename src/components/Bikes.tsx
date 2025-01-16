import { useState } from "react";




function bike(){
   const[scooter,setscooter]=useState({
    color:"black",
    brand:"dio",
    year:"2021"
   })
   function change(){
    setscooter(prev=>{
        return{...prev,color:"Blue"}
    })
}
    return(
        <>
        <h1>my bike details</h1>
        <p>color:{scooter.color}</p>
        <p>brand:{scooter.brand}</p>
        <p>year:{scooter.year}</p>
        <button onClick={(change)}>change bike</button>
        </>

    )
}
export default bike;