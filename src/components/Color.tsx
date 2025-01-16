import { useState } from "react";
function color(){
const[color,setcolor]=useState('Blue')
return(
<>
<h1>my favorite color is {color}</h1>
<button onClick={()=>setcolor('Red')}>Change color</button>
</>

)
}
export default color;