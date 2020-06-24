
import React, { Component } from "react";
import { Grid, Row, Col, Alert } from "react-bootstrap";
import {apiConfig} from "../ApiConfig.js";
import  axios from "axios";
class ModerateurNotifications extends Component {
  state ={
    video:[],
    article:[],
    zone:[],
  
  };
  componentDidMount(){

    axios.get(apiConfig.videoUrl
    ).then(res =>{
        console.log(res);
        this.setState({video:res.data});
      }); 

    axios.get(apiConfig.articleUrl
        ).then(res =>{
            console.log(res);
            this.setState({article:res.data});
          });

     axios.get(apiConfig.infoRegionUrl
            ).then(res =>{
                console.log(res);
         
                this.setState({zone:res.data});
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
              <h5>Classé selon leur source</h5>
              
            </div>
            <div className="content">
              <Row>
                <Col md={3}>
                 
                
                  <h3>Articles Rédacteur</h3>
                  {this.state.article.reverse().map(article => {
                   if (article.vu==0){
                  return <Alert>
                   
                    <span>
                     un Nouveau article à traiter: N° {article.id}
                    </span>
                   </Alert>
                     }})
                    }
                 
                
                 
                </Col>
                <Col md={3}>
                
                  <h3>Agent de santé</h3>
                  {this.state.zone.reverse().map(zone => {
                   if (zone.vu==0){
                  return <Alert bsStyle="danger">
                   
                    <span>
                    Mise a jour d"une zone de risque: N° {zone.id}
                    </span>
                   </Alert>
                     }})
                    }
                             
                  
                </Col>
                <Col md={3}>
                  <h3>Vidéo utilisateur</h3>
                  {this.state.video.reverse().map(video => {
                   if (video.vu==0){
                  return <Alert bsStyle="success">
                   
                    <span>
                     un nouvelle video à traiter: N° {video.id}
                    </span>
                   </Alert>
                     }})
                    }
                 
                 
              
                 
                </Col>
                <Col md={3}>
                  <h5>Veille</h5>
                 
                  
                  <Alert bsStyle="warning">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      Nouvelle publication Facebook 
                    </span>
                  </Alert>
               
                  
                  
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

export default ModerateurNotifications;
