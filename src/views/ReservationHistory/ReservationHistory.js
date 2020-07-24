import React from 'react';
import { Button,MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import axios from 'axios';

class BasicTable extends React.Component{
  constructor(props){
      super(props);
      this.state={
        reservation:[],
        user:[]
      }
  }
      componentDidMount=async()=>{
        await this.getReservation();
        await this.getUser();
      }
      getReservation=()=>{
        axios.get('http://localhost:8000/api/reservation',
        {
          headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
          
          },
        })
        .then((resp)=>{
          let a=[];
          resp.data.data.map((value,key)=>(
            value.request=='true'?a.push(value):""
          ))
          this.getUser(a)
          //this.setState({reservation:a})
        })
      }
    getUser=(value)=>{
      let a=[];
      axios.get('http://localhost:8000/api/user',
        {
          headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
          
          },
        })
        .then((resp)=>{
          if(value!=undefined){
            value.map((reserve,key)=>(
              a.push(resp.data.data.filter(ss=>ss.id==parseInt(reserve.user_id))[0])
            ))
            this.setState({
              reservation:value,
              user:a
            })
            }
          })
       
      }
      confirm=(id)=>{
        console.log(id)
      }
    
      render(){
          return(
            <>
    <MDBTable hover>
      <MDBTableHead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Time</th>
          <th>Table Number</th>
          <th>name</th>
          <th>email</th>
          <th>phone</th>
          <th>Status</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
       
       {this.state.reservation.map((value,key)=>(
        <tr key={key}>
          <td>{value.id}</td>
      <td>{value.date_time.split(" ")[0]}</td>
      <td>{value.date_time.split(" ")[1]}</td>
      <td>{value.table_id}</td>
       <td>{this.state.user[key].name}</td>
       <td>{this.state.user[key].email}</td>
       <td>{this.state.user[key].phone}</td>
       <td>Confirmed</td>



        </tr>
      ))}       
      </MDBTableBody>
    </MDBTable>
   
    </>
    
  );
}
}


export default BasicTable;