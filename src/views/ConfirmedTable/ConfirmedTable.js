import React from "react";
import ReservationHistory from "../../views/ReservationHistory/ReservationHistory"
class Confirmed extends React.Component{
constructor(props){
    super(props);
    this.state={
        history:[{
            date:'',
            time:'',
            tablenumber: '',
            email:'',
            status:'',
        }]
  
      
    }
}
    
    render(){
        return(
        <>
         <div>
        <ReservationHistory  />
        </div>
        </>

        )
    }
}
export default Confirmed;