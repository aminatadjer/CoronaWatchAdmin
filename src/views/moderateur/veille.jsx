
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Card from "components/Card/Card.jsx";
import {  tdArrayVeilleFacebook,tdArrayVeilleWeb,tdArrayVeilleYoutube } from "variables/Variables.jsx";
import {apiConfig} from "../ApiConfig.js";
import  axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactPlayer from 'react-player'

class VeilleModerateur extends Component {
  state ={
    google:[],
    tweet:[],
    youtube:[],
  };

  componentDidMount(){

    axios.get(apiConfig.googleUrl
    ).then(res =>{
        console.log(res);
        this.setState({google:res.data});
      });
    axios.get(apiConfig.tweetUrl
        ).then(res =>{
            console.log(res);
            this.setState({tweet:res.data});
          });
    axios.get(apiConfig.youtubeUrl
        ).then(res =>{
          console.log(res);
          this.setState({youtube:res.data});
        });
  }
  googleDeleteClick(id){
 
    axios.put(apiConfig.googleUrl+`${id}/googleSupprimer/`,{
      "supprime":1,
      
    }).then(res=>{
      this.componentDidMount();
      console.log(res)
    });
  }
  googleValideClick(id){
 
    axios.put(apiConfig.googleUrl+`${id}/googleValider/`,{
      "valide":1,
  
    }).then(res=>{
      this.componentDidMount();
      console.log(res)
    });
  }
  tweetDeleteClick(id){
 
    axios.put(apiConfig.tweetUrl+`${id}/TweetSupprimer/`,{
      "supprime":1,
      
    }).then(res=>{
      this.componentDidMount();
      console.log(res)
    });
  }
  tweetValideClick(id){
 
    axios.put(apiConfig.tweetUrl+`${id}/TweetValider/`,{
      "valide":1,
  
    }).then(res=>{
      this.componentDidMount();
      console.log(res)
    });
  }
youtubeDeleteClick(id){
 
    axios.put(apiConfig.youtubeUrl+`${id}/VideoSupprimer/`,{
      "supprime":1,
      
    }).then(res=>{
      this.componentDidMount();
      console.log(res)
    });
  }
youtubeValideClick(id){
 
    axios.put(apiConfig.youtubeUrl+`${id}/VideoValider/`,{
      "valide":1,
  
    }).then(res=>{
      this.componentDidMount();
      console.log(res)
    });
  }
  render() {
    return (
      <div className="content">
        <Grid fluid> 
        <Tabs>
                <TabList>
                  <Tab>Google Robots</Tab>
                  <Tab>Twitter Robots</Tab>
                  <Tab>Youtube Rbots</Tab>
              
                </TabList>
                <TabPanel>
             
              
          <Row>
            <Col md={12}>
              <Card
                  title="Google"
                  category=""
                  ctTableFullWidth
                  ctTableResponsive
                  content={
                    <Table striped hover>
                      <thead>

                        <tr>
                          <th>Id</th>
                          <th>Titre</th>
                          <th>Description</th>
                          <th>URL</th>                         
                          <th>Action</th>
                        </tr>

                        </thead>
                        <tbody>

                        {this.state.google.reverse().map(google => {
                          if (google.valide==0 && google.supprime==0 ){
                          return (
                            <tr >
                              
                              <td>{google.id}</td>
                              <td>{google.titre}</td>
                              <td>{google.description}</td>
                              <td><a href={google.url}>{google.url}</a></td>
                              
                              <td>
                              <IconButton 
                                onClick={() => this.googleValideClick(google.id )}
                                style={{ background:'#e6e6e6', color: '#00b300' }}
                                aria-label="valide">
                                <CheckCircleIcon fontSize="large" />
                              </IconButton>
                                <IconButton 
                                  onClick={() => this.googleDeleteClick(google.id)}
                                  style={{ background:'#e6e6e6', color: '#ff0000' }}
                                  aria-label="delete">
                                  <CancelIcon fontSize="large" />
                                </IconButton>
                              </td>
                            </tr>
                          );
                        } })}
                        </tbody>
                    </Table>
                  }
                />
             </Col>
           
          </Row>
          </TabPanel>
          <TabPanel>
             
              
             <Row>
               <Col md={12}>
                 <Card
                     title="Twitter"
                     category=""
                     ctTableFullWidth
                     ctTableResponsive
                     content={
                       <Table striped hover>
                         <thead>
   
                           <tr>
                             <th>Id</th>
                             <th>Date</th>  
                             <th>Auteur</th>
                             <th>Contenu</th>
                                                  
                             <th>Action</th>
                           </tr>
   
                           </thead>
                           <tbody>
   
                           {this.state.tweet.reverse().map(tweet => {
                             if (tweet.valide==0 && tweet.supprime==0 ){
                             return (
                               <tr >
                                 
                                 <td>{tweet.id}</td>
                                 <td>{tweet.date}</td>
                                 <td>{tweet.proprio}</td>
                                 <td>{tweet.content}</td>
                             
                                 
                                 <td>
                                 <IconButton 
                                   onClick={() => this.tweetValideClick(tweet.id )}
                                   style={{ background:'#e6e6e6', color: '#00b300' }}
                                   aria-label="valide">
                                   <CheckCircleIcon fontSize="large" />
                                 </IconButton>
                                   <IconButton 
                                     onClick={() => this.tweetDeleteClick(tweet.id)}
                                     style={{ background:'#e6e6e6', color: '#ff0000' }}
                                     aria-label="delete">
                                     <CancelIcon fontSize="large" />
                                   </IconButton>
                                 </td>
                               </tr>
                             );
                           } })}
                           </tbody>
                       </Table>
                     }
                   />
                </Col>
              
             </Row>
             </TabPanel>
             <TabPanel>
             
              
             <Row>
               <Col md={12}>
                 <Card
                     title="Twitter"
                     category=""
                     ctTableFullWidth
                     ctTableResponsive
                     content={
                       <Table striped hover>
                         <thead>
   
                           <tr>
                            
                             
                             <th style={{ width :'10% ' }}>titre</th>
                             <th style={{ width :'25% ' }}>discription</th>
                             <th style={{ width :'55% ' }}>Url</th>     
                             <th style={{ width :'10% ' }}>Action</th>
                           </tr>
   
                           </thead>
                           <tbody>
   
                           {this.state.youtube.reverse().map(youtube => {
                           
                             if (youtube.valide==0 && youtube.supprime==0 ){
                              console.log(youtube.url)
                             return (
                               
                               <tr >
                                 
                               
                                
                                 <td>{youtube.titre}</td>
                                 <td>{youtube.description}</td>
                                 <td>  <ReactPlayer
                                    width='100%'
                                    controls='true'
                                    url={"http://www.youtube.com/embed/"+youtube.url} />  </td>
                                 
                                 <td>
                                 <IconButton 
                                   onClick={() => this.youtubeValideClick(youtube.url )}
                                   style={{ background:'#e6e6e6', color: '#00b300' }}
                                   aria-label="valide">
                                   <CheckCircleIcon fontSize="large" />
                                 </IconButton>
                                   <IconButton 
                                     onClick={() => this.youtubeDeleteClick(youtube.url)}
                                     style={{ background:'#e6e6e6', color: '#ff0000' }}
                                     aria-label="delete">
                                     <CancelIcon fontSize="large" />
                                   </IconButton>
                                 </td>
                               </tr>
                             );
                           } })}
                           </tbody>
                       </Table>
                     }
                   />
                </Col>
              
             </Row>
             </TabPanel>
          </Tabs>
        </Grid>
      </div>
    );
  }
}

export default VeilleModerateur;
