function Car(props : any){
    // const { greet,color }=props;
    const {det}=props
    const{brand,color}=det
    const text=`i am a ${color} ${brand} car`
    return (
        <h1>{text}</h1>
    )
}
export default Car;


