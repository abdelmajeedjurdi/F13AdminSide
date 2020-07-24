import React from "react";
import SignIn from "../../components/SignIn/SignIn"
class SignInn extends React.Component{
constructor(props){
    super(props);
    this.state={
      email:'aaa@gmail.com',
      password:'122334'
    }
}
    
    render(){
        return(
        <>
         <div>
        <SignIn />
        </div>
        </>

        )
    }
}
export default SignInn;