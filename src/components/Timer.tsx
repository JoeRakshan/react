import { useEffect,useState } from "react";


function timer(){
    const[count,setcount]=useState(1)
    useEffect(()=>{
        console.log('rendered successfully')
    },[count])

    


function add(){
    setcount((prev)=>{ return prev+1})
}



    return(
        <>
        <h1>The page rendered {count} Times!</h1>
        <button onClick={add}>ADD</button>
        </>
    )

}
export default timer;