import React, { Component } from "react";
import { Navbar, NavItem, Nav, MenuItem,NavDropdown,Row } from "react-bootstrap";

import AdminNavbarLinks from "./AdminNavbarLinks.jsx";
import { NavbarBrand } from "reactstrap";
import {apiConfig} from "views/ApiConfig.js";
import dashboard from "views/moderateur/dashboard.jsx";
import  axios from "axios";
class Header extends Component {
  
  state ={
    
    zone:[],
    zo:[],
  
  
    region:[],
    
   
    countTotal:0,
  


  };
  componentDidMount(){
   
    
      axios.get(apiConfig.infoRegionUrl
              ).then(res =>{
        console.log(res);
        this.setState({zone:res.data});
       this. numArticle()
      }); 
     
   
       
}
  numArticle(){
   
 
      this.state.zone.map(zone => {
      if (zone.valide==1 || zone.supprime==1 ){
      const list = this.state.zo.push(this.state.zone);
      }})
      this.setState({countTotal:this.state.countTotal+this.state.zo.length}); 
    
 
 
    
  
   
  
  
    
      
  }
  logout(e) {
    e.preventDefault();
    localStorage.clear();
    this.props.history.push('/index')  
  }
  mobileSidebarToggle(e) {
    if (this.state.sidebarExists === false) {
      this.setState({
        sidebarExists: true
      });
    }
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function() {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  }
  render() {
    
 
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      
      <Navbar >
     <Nav pullLeft  className="flex-row" >
          <Navbar.Brand>
            <a href="#pablo">{this.props.brandText}</a>

          </Navbar.Brand>
          <button type="button" class="btn btn-dark " onClick={() => this.props.history.push('/agentsante/notifications')}>
         <a  > <i className="fa fa-bell" />
     
    <span class="badge badge-danger" >{this.state.countTotal}</span>
        <span class="sr-only">unread messages</span></a>
      </button>
        

        </Nav>
       
   
          
  
       
    
      
          
        <Nav pullRight className="flex-row">
          
          <NavItem eventKey={1} onClick={() => this.props.history.push('/agentsante/user')}>
            Mon Compte
            
          </NavItem> 
          <NavItem onClick={e=>this.logout(e)} >
            Deconnexion
          </NavItem>
          
        </Nav>
        
        
      </Navbar>
    );
  }
}

export default Header;
