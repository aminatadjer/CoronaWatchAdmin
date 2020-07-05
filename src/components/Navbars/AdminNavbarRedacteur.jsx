import React, { Component } from "react";
import { Navbar, NavItem, Nav, MenuItem,NavDropdown,Row } from "react-bootstrap";

import AdminNavbarLinks from "./AdminNavbarLinks.jsx";
import { NavbarBrand } from "reactstrap";
import {apiConfig} from "views/ApiConfig.js";



import  axios from "axios";

class Header extends Component {
  
  state ={
    casSignaler:[],
    cas:[],
    dataSales:[],
    articles:[],
    art:[],

    video:[],
    vid:[],

    zone:[],
    zo:[],
   
    comment:[],
    com:[],
  robotVeille:[],
  
    valRobot:[],
  
    region:[],
    mort :[],
    guerie :[],
    confirme :[],
    suspect :[],
    critique :[],
   
    countTotal:0,
    countMort:0,
    countGuerie:0,
    countConfirme:0,
    countSuspect:0,
    countCritique:0,


  };
  componentDidMount(){
   
  
      axios.get(apiConfig.articleUrl
        ).then(res =>{
         console.log(res);
         this.setState({articles:res.data});
        this.numArticle()
     }); 
    
}
  numArticle(){
    this.state.articles.map(articles => {
      console.log(articles.vu)
      if (articles.valide==1 || articles.supprime==1 ){
      const list = this.state.art.push(this.state.articles);
     
      }})
      this.setState({countTotal:this.state.countTotal+this.state.art.length}); 
   
     
  }
  logout(e) {
    e.preventDefault();
    localStorage.clear();
    this.props.history.push('/index')  
  }
  notif(e) {
    e.preventDefault();
  console.log("d")
    this.props.history.push('views/moderateur/notifications.jsx')  
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
    
  var responsiveBar = [
      ['screen and (max-width: 640px)', {
          seriesBarDistance: 10,
          axisX: {
              labelInterpolationFnc: function (value) {
                  return value[0];
              }
          }
      }]
  ];
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
          <button type="button" class="btn btn-dark "  onClick={() => this.props.history.push('/redacteur/notifications')}>
         <a  > <i className="fa fa-bell" />
         {console.log(this.state.countTotal)}
    <span class="badge badge-danger" >{this.state.countTotal}</span>
        <span class="sr-only">unread messages</span></a>
      </button>
        

        </Nav>

          
        <Nav pullRight className="flex-row">
          
          <NavItem eventKey={1} onClick={() => this.props.history.push('/redacteur/user')}>
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
