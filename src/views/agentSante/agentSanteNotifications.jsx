
import React, { Component } from "react";
import { Grid, Row, Col, Alert } from "react-bootstrap";
import {apiConfig} from "../ApiConfig.js";
import  axios from "axios";

class AgentSanteNotifications extends Component {
  state ={
    region:[],
  };
  componentDidMount(){

   
    axios.get(apiConfig. infoRegionUrl
    ).then(res =>{
        console.log(res);
        this.setState({region:res.data});
       
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
                  <h5>Mise a jour accepter par le modérateur</h5>
                  {this.state.region.reverse().map(region => {
                   if (region.valide==1){
                  return <Alert bsStyle="success">
                   
                    <span>
                      <b> Success - </b> Le modérateur a validé la mise a jour des cas N°:{region.id}
                    </span>
                  </Alert>
                    }})
                  }
  
                </Col>
                <Col md={6}>
                  <h5>Mise a jour supprimer par le modérateur</h5>                
                  {this.state.region.reverse().map(region => {
                   if (region.supprime==1){
                 return <Alert bsStyle="warning">
                    
                    <span>
                      <b> Warning - </b> Le modérateur a supprimer la mise a jour des cas N°:{region.id}
                    </span>
                  </Alert>                              
                }})}             
                </Col>
              </Row>
              <br />
              <br />
              <div className="places-buttons">
                
               
                      
               
              </div>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default AgentSanteNotifications;
