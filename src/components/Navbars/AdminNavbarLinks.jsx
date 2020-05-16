/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import  axios from "axios";
class AdminNavbarLinks extends Component {
  state ={
    casSignaler:[],
    notif:[]
  };
  componentDidMount(){

    axios.get(' http://127.0.0.1:8000/api/casSignaler/',{
      params: {
        where:[["valide","=",false]]
      }
    }
    ).then(res =>{
        console.log(res);
        if (res.data.id=1) {
          console.log(res)
        }
        this.setState({casSignaler:res.data});
      }
  
      );
    
  }

  render() {
  

    var   notif=0;
   
    this.state.casSignaler.map(casSignaler=>{
     
      if(casSignaler.vu==1){
       
        this.notif=+1;
        console.log(this.notif)
      }
    
    }

      )
    


    const notification = (
      <div>
      
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification"> {this.notif}</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (

    
    
   
  
      <ul>
        
       <div className="content">
        <Nav>
         
          <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}>vous avez  notifications non vues</MenuItem>
           
          </NavDropdown>
         
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Profile
          </NavItem>
         
          <NavItem eventKey={3} href="#">
           Déconnexion
          </NavItem>
        </Nav>
        </div>
      
    
    </ul>)
  }
}

export default AdminNavbarLinks;
