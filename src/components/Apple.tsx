import React from "react";
class Apple extends React.Component<any>{
render(){
   const {fruit} = this.props;
   const {taste,color}=fruit;
   const text=`i am apple and im am ${taste} and ${color} in color`;
    return(
        
    <h2>{text}</h2>
    )
}
}
export default Apple;