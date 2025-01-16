import { useState } from "react";

function forms(){
const[name,setname]=useState<String>();

function submit(names:any){
    names.preventDefault()
console.log(name)
}

return(
    <form onSubmit={submit}>
        <label>First name :<input type="text" onChange={(names)=>{setname(names.target.value)}}></input></label>
        <input type="submit" value="submit"></input>
    </form>
)
}
export default forms;