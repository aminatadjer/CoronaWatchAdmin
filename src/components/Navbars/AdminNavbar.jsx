import React, { Component } from "react";
import { Navbar, NavItem, Nav, MenuItem,NavDropdown,Row } from "react-bootstrap";

import AdminNavbarLinks from "./AdminNavbarLinks.jsx";
import { NavbarBrand } from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
    this.state = {
      sidebarExists: false
    };
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

        
      
        </Nav>
          
       
    
      
          
        <Nav pullRight className="flex-row">
          
          <NavItem eventKey={1} href="#">
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
