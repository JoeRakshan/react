import Car from './Car.tsx'
import Apple from './Apple.tsx';
// const greet=' ferrari'
// const clr='black'
const door=Math.floor(Math.random()*2)
const det={brand:'ferrari',color:'black'}
const fruit={taste:'Sweet',color:'red'}
// const det={}
const carinfo=[{brand:"BMW",color:"blue"},{brand:"TESLA",color:"Green"}]
const number=[1,2,3,4,5,6]
function Garage(){
    return(
      <>
      <h1>who are you</h1>
      {/* <Car greet={greet} color={clr}/> */}
      {det.brand !== undefined && det.color!==undefined ? 
      <Car det={det}/> :null}
      <Apple fruit={fruit}/>  
      {door?<h2>door is opened</h2>:<h2>door is closed</h2>}  
      <ul>
        {carinfo.map((det)=> <li key={det.brand}>< Car det={det}/></li>) }
        {number.map((e,index)=> <p key={index}>{e}</p>)}
      </ul>
      </>
    )
  }
  export default Garage;