import React from "react";


class state extends React.Component<any,{color:string,model:string}>{
    constructor(){
        super({});
        this.state={color:'Red',
            model:"vivo"}
    }
    render(){
return(
<>
<h1>my mobile color is {this.state.color} and the model is {this.state.model}</h1>
<button onClick={()=>{this.setState((prev)=>{return {...prev,color:"black"} })}}>change color</button>
</>
)
}
}

export default state;