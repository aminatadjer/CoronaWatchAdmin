

import React, { Component } from "react";
import { Grid, Row, Col, Alert } from "react-bootstrap";

import Button from "components/CustomButton/CustomButton.jsx";
import {apiConfig} from "../ApiConfig.js";
import  axios from "axios";
class Notifications extends Component {
  state ={
    article:[],
  };
  componentDidMount(){

   
    axios.get(apiConfig.articleUrl
    ).then(res =>{
        console.log(res);
        this.setState({article:res.data});
       
      }
  
      );
    
}
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <div className="card">
            <div className="header">
              <h4 className="title">Vos Notifications</h4>
             
            </div>
            <div className="content">
              <Row>
                <Col md={6}>
                  <h5>Mise a jours accepter par le modérateur</h5>
                  {this.state.article.reverse().map(article => {
                   if (article.valide==1){
                  return <Alert bsStyle="success">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Success - </b>   le modérateur a validé votre article N°:{article.id}.
                    </span>
                  </Alert>
                   }})
                  }
  
                </Col>
                <Col md={6}>
                  <h5>Mise a jours supprimer par le modérateur</h5>
                  {this.state.article.reverse().map(article => {
                   if (article.supprime==1){
                  return <Alert bsStyle="warning">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Warning - </b>   le modérateur a supprimé votre article N°:{article.id}.
                    </span>
                  </Alert>
                  }})
                }
                 
                </Col>
              </Row>
             
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Notifications;
