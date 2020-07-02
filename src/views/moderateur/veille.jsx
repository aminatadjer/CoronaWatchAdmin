
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
    robot:[],

  };

  componentDidMount(){

    axios.get(apiConfig.robotUrl
    ).then(res =>{
        console.log(res);
        this.setState({robot:res.data});
      });
  
  }
DeleteClick(id){
 
    axios.put(apiConfig.robotUrl+`${id}/Supprimer/`,{
      "supprime":1,
      
    }).then(res=>{
      this.componentDidMount();
      console.log(res)
    });
  }
 ValideClick(id){
 
    axios.put(apiConfig.robotUrl+`${id}/Valider/`,{
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
                          
                          <th style={{ width :'10% ' }}>Date</th>  
                          <th style={{ width :'15% ' }}>Titre</th>
                          <th style={{ width :'50% ' }}>Description</th>
                          <th style={{ width :'15% ' }}>URL</th>                         
                          <th v>Action</th>
                        </tr>

                        </thead>
                        <tbody>

                        {this.state.robot.reverse().map(google => {
                          if (google.valide==0 && google.supprime==0  && google.type=="google"){
                          return (
                            <tr >
                           
                              <td style={{ width :'10% ' }}>{google.date}</td>
                              <td style={{ width :'15% ' }}>{google.titre}</td>
                              <td style={{ width :'50% ' }}>{google.description}</td>
                              <td style={{ width :'15% ' }}><a href={google.url}>{google.url}</a></td>
                              
                              <td>
                              <IconButton 
                                onClick={() => this.ValideClick(google.id )}
                                style={{ background:'#e6e6e6', color: '#00b300' }}
                                aria-label="valide">
                                <CheckCircleIcon fontSize="large" />
                              </IconButton>
                                <IconButton 
                                  onClick={() => this.DeleteClick(google.id)}
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
                 
                     content={
                       <Table striped hover>
                         <thead>
   
                           <tr>
                           
                             <th style={{ width :'8% ' }}>Date</th>  
                             <th style={{ width :'15% ' }}>Titre</th>
                             <th style={{ width :'50% ' }}>Description</th>
                             <th style={{ width :'15% ' }}>Url</th>
                                                  
                             <th>Action</th>
                           </tr>
   
                           </thead>
                           <tbody>
   
                           {this.state.robot.reverse().map(tweet => {
                             if (tweet.valide==0 && tweet.supprime==0 && tweet.type=="twitter"){
                             return (
                               <tr >
                                 
                               
                                 <td>{tweet.date}</td>
                                 <td>{tweet.titre}</td>
                                 <td>{tweet.description}</td>
                                 <td><a href={tweet.url}>{tweet.url}</a></td>
                                 
                                 <td>
                                 <IconButton 
                                   onClick={() => this.ValideClick(tweet.id )}
                                   style={{ background:'#e6e6e6', color: '#00b300' }}
                                   aria-label="valide">
                                   <CheckCircleIcon fontSize="large" />
                                 </IconButton>
                                   <IconButton 
                                     onClick={() => this.DeleteClick(tweet.id)}
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
                     title="Youtube"
                     category=""
                     ctTableFullWidth
                     ctTableResponsive
                     content={
                       <Table striped hover>
                         <thead>
   
                           <tr>
                            
                        
                             <th style={{ width :'10% ' }}>Titre</th>
                             <th style={{ width :'25% ' }}>Discription</th>
                             <th style={{ width :'53% ' }}>Url</th>     
                             <th style={{ width :'10% ' }}>Action</th>
                           </tr>
   
                           </thead>
                           <tbody>
   
                           {this.state.robot.reverse().map(youtube => {
                           
                             if (youtube.valide==0 && youtube.supprime==0 && youtube.type=="youtube" ){
                             
                             return (
                               
                               <tr >
                                 
                               
                                
                                 <td>{youtube.titre}</td>
                                 <td>{youtube.description}</td>
                                 <td>  <ReactPlayer
                                    width='100%'
                                    controls='true'
                                    url={"https://www.youtube.com/embed/"+youtube.url }/>  </td>
                                 
                                 <td>
                                 <IconButton 
                                   onClick={() => this.ValideClick(youtube.id )}
                                   style={{ background:'#e6e6e6', color: '#00b300' }}
                                   aria-label="valide">
                                   <CheckCircleIcon fontSize="large" />
                                 </IconButton>
                                   <IconButton 
                                     onClick={() => this.DeleteClick(youtube.id)}
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
