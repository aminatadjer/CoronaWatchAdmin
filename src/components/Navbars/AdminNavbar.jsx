import React, { Component } from "react";
import { Navbar, NavItem, Nav, MenuItem,NavDropdown,Row } from "react-bootstrap";

import AdminNavbarLinks from "./AdminNavbarLinks.jsx";
import { NavbarBrand } from "reactstrap";
import {apiConfig} from "views/ApiConfig.js";
import dashboard from "views/moderateur/dashboard.jsx";
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
   
    axios.get(apiConfig.CasUrl
                  ).then(res =>{
            console.log(res);
            this.setState({casSignaler:res.data});
            
            
          }); 
      axios.get(apiConfig.infoRegionUrl
              ).then(res =>{
        console.log(res);
        this.setState({zone:res.data});
        
      }); 
      axios.get(apiConfig.regionUrl
        ).then(res =>{
        console.log(res);
        this.setState({region:res.data});
      }); 
      axios.get(apiConfig.videoUrl
            ).then(res =>{
              console.log(res);
              this.setState({video:res.data});
            
          }); 
      axios.get(apiConfig.articleUrl
        ).then(res =>{
         console.log(res);
         this.setState({articles:res.data});
        
     }); 
     axios.get(apiConfig.commentUrl
      ).then(res =>{
       console.log(res);
       this.setState({comment:res.data});
      
      }); 
     
  
        axios.get(apiConfig.robotUrl
          ).then(res =>{
          console.log(res);
          this.setState({robotVeille:res.data});
          this.numArticle()
        });
       
}
  numArticle(){
    this.state.articles.map(articles => {
      console.log(articles.vu)
      if (articles.vu==0){
      const list = this.state.art.push(this.state.articles);
      console.log("hi"+articles.vu)
      }})
      this.setState({countTotal:this.state.countTotal+this.state.art.length}); 
   
      this.state.zone.map(zone => {
      if (zone.vu==0){
      const list = this.state.zo.push(this.state.zone);
      }})
      this.setState({countTotal:this.state.countTotal+this.state.zo.length}); 
    
 
      this.state.video.map(video => {
      if (video.vu==0){
      const list = this.state.vid.push(video);
      }})
      this.setState({countTotal:this.state.countTotal+this.state.vid.length});  
    
  
    this.state.casSignaler.map(casSignaler => {
      const lis = this.state.dataSales.push(casSignaler.date);
     
      if (casSignaler.vu==0){    
        const list = this.state.cas.push(casSignaler);
      }})
      console.log( "this.state.dataSales")
      console.log( this.state.dataSales)
      this.setState({countTotal:this.state.countTotal+this.state.cas.length});     

    this.state.comment.map(comment => {
      if (comment.supprime==0){    
        const list = this.state.com.push(comment);
      }})
      this.setState({countTotal:this.state.countTotal+this.state.com.length});     
  
    
      this.state.robotVeille.map(robotVeille => {
        if ((robotVeille.valide==0) && (robotVeille.supprime==0 )){    
          const lis = this.state.valRobot.push(robotVeille);
      }})
    //  this.setState({countVeille:+this.state.valGoogle.length});  
      this.setState({countTotal:this.state.countTotal+this.state.valRobot.length}); 
    //  this.setState({countVeille:+this.state.valGoogle.length});  
    console.log(this.countTotal)
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
          <button type="button" class="btn btn-dark " onClick={() => this.props.history.push('/moderateur/notifications')}>
         <a > <i className="fa fa-bell" />
         {console.log(this.state.countTotal)}
    <span class="badge badge-danger" >{this.state.countTotal}</span>
        <span class="sr-only">unread messages</span></a>
      </button>
        

        </Nav>
       
   
      
          
        <Nav pullRight className="flex-row">
          
          <NavItem eventKey={1} onClick={() => this.props.history.push('/moderateur/user')}>
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
