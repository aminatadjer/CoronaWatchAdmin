
import React, { Component } from "react";
import { Grid, Row, Col, Alert } from "react-bootstrap";
import {apiConfig} from "../ApiConfig.js";
import  axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
class ModerateurNotifications extends Component {
  state ={
    video:[],
    article:[],
    zone:[],
   robot:[],
 
    comment:[],
  
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
              });
    axios.get(apiConfig.robotUrl
            ).then(res =>{
                console.log(res);
             
                  this.setState({robot:res.data});
          });
 
    axios.get(apiConfig.commentUrl
      ).then(res =>{
          console.log(res);
       
            this.setState({comment:res.data});
});
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <div className="card">
           
              <Tabs>
                <TabList>
                  <Tab>Articles Redacteur</Tab>
                  <Tab>Agent de santé</Tab>
                  <Tab>Vidéos utilisateur</Tab>
                  <Tab>Commentaires</Tab>
                  <Tab>Veille</Tab>
                </TabList>
                <TabPanel>
                <Col md={8}>
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
                </TabPanel>
                <TabPanel>
                <Col md={8}>
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
                </TabPanel>
                <TabPanel>
                <Col md={8}>
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
                </TabPanel>
                <TabPanel>
                <Col md={8}>
                {this.state.comment.reverse().map(comment => {
                   if (comment.supprime==0){
                     return <Alert bsStyle="warning">
                
                    <span>
                      Nouveau commentaire :N°{comment.id}
                    </span>
                  </Alert>
                 }})
                 }
                  </Col>
                </TabPanel>
               
                <TabPanel>
                <Tabs>
                <TabList>
                 <Tab>Google Veille</Tab>
                  <Tab>Youtube veille</Tab>
                  <Tab>Tweeter Veille</Tab>
                </TabList>
                  <TabPanel>
                <Col md={8}>
                {this.state.robot.reverse().map(google => {
                   if (google.supprime==0 && google.type=="google"){
                     return <Alert bsStyle="warning">
                
                    <span>
                      Nouvelle veille google :N°{google.id}
                    </span>
                  </Alert>
                 }})
                 }
                 
                  </Col>
                  </TabPanel>
                  <TabPanel>
                <Col md={8}>
                {this.state.robot.reverse().map(youtube => {
                   if (youtube.supprime==0 && youtube.type=="youtube"){
                     return <Alert bsStyle="danger">
                
                    <span>
                      Nouvelle veille youtube:N° {youtube.id}
                    </span>
                  </Alert>
                    }})
                  }
                  </Col>
                  </TabPanel>
                  <TabPanel>
                <Col md={8}>
                {this.state.robot.reverse().map(tweet => {
                   if (tweet.supprime==0 && tweet.type=="twitter"){
                     return <Alert bsStyle="success">
                
                    <span>
                      Nouvelle veille tweeter :N°{tweet.id}
                    </span>
                  </Alert>
                 }})
                 }
                  </Col>
                  </TabPanel>
                  </Tabs>
                </TabPanel>
               
              </Tabs>
           
          </div>
        </Grid>
      </div>
    );
  }
}

export default ModerateurNotifications;
