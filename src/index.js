
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product

import LandingPage from "views/LandingPage/LandingPage.js"
import LoginPage from "views/LoginPage/LoginPage.jsx"
import LoginPagejs from "views/LoginPage/LoginPage.js"

import AdminLayout from "layouts/Admin.jsx";
import AgentLayout from "layouts/Agent.jsx";
import RedacteurLayout from "layouts/Redacteur.jsx";
import axios from 'axios';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      
      <Route path="/moderateur" render={props =>(localStorage.getItem("role")==="moderator" ? <AdminLayout {...props} />: <Redirect to='/login'/>)} />
      <Route path="/index" render={props =>  <LandingPage {...props} /> } />
      <Route path="/login" render={props => <LoginPage {...props} />} />
      <Route path="/loginjs" render={props => <LoginPagejs {...props} />} />
      <Route path="/redacteur" render={props =>(localStorage.getItem("role")==="editor" ? <RedacteurLayout {...props} /> : <Redirect to='/login'/>)} />
      <Route path="/agentsante" render={props =>(localStorage.getItem("role")==="health agent" ? <AgentLayout {...props} /> : <Redirect to='/login'/>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
