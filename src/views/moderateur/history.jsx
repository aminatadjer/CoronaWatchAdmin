
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import  axios from "axios";
import { ThreeSixty } from "@material-ui/icons";
import {apiConfig} from "../ApiConfig.js";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactPlayer from 'react-player'

class HistoryModerateur extends Component {
  state ={
   
    video:[],
    article:[],
    zone:[],
   robot:[],
 cas:[],
    comment:[],
    
  };

  componentDidMount(){

    
    
      axios.get(apiConfig.CasUrl
        ).then(res =>{
            console.log(res);
       
            this.setState({cas:res.data});
          }
      
          );
       
     
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
         
          <Tabs>
                <TabList>
                  <Tab>Article</Tab>
                  <Tab>Region</Tab>
                 
                  <Tab>Veille</Tab>
                  <Tab>Cas suspects</Tab>
                  <Tab>Video utilisteur</Tab>
                  <Tab>commentaire</Tab>

                 

                 
              
                </TabList>
                <TabPanel>
          <Row>
            <Col md={12}>
            <Card
                  title="Articles"
                 
                 
                  content={
                    <Table striped hover>
                      <thead>                         
                        <tr>
                        
                        <th>id</th>                       
                        <th>titre</th>
                        <th>contenu</th>
                        <th>media</th>
                        <th>état</th>

                       
                      </tr>
                    
                      </thead>
                      <tbody>
                        
                      {this.state.article.map(article => {
                        
                        if (article.supprime==1 ){
                          return (
                            <tr >

                              <td>{article.id}</td>
                            <td>{article.titre}</td>
                            <td>{article.contenu}</td>
                            <td>{article.media}</td>
                           
                            <td><i class="fa fa-close  fa-2x" aria-hidden="true" style={{ color :'red ' }}></i></td>

                          </tr>
                          );}
                        })}
                             
                      {this.state.article.map(article => {
                        
                        if (article.valide==1 ){
                          return (
                            <tr >

                              <td>{article.id}</td>
                            <td>{article.titre}</td>
                            <td>{article.contenu}</td>
                            <td>{article.media}</td>
                           
                            <td><i class="fa fa-check  fa-2x" aria-hidden="true" style={{ color :'green ' }}></i></td>

                          </tr>
                          );}
                        })}
                      </tbody>
                    </Table>
                }
              />
            </Col>
          </Row>
          </TabPanel>
          <TabPanel>
          <Row>
          
         
          <Col md={12 }>
          <Card
              title="Regions "
            
           
              content={
                <Table striped hover >
                  <thead>
                    <tr>
                      
                      <th>id region</th>
                      <th>cas suspects</th>
                      <th>cas confirmes</th>
                      <th> cas critiques</th>
                      <th>cas gueries</th>

                      <th> cas morts</th>
                      <th> cas degres</th>
                      <th> état</th>


                      
                      
                    </tr>
                  </thead>
                  <tbody>
                    
                    {this.state.zone.map(region => {
               if (region.supprime==1 ){
                      return (
                        <tr >
                          <td>{region.region}</td>
                            <td>{region.suspect}</td>
                            <td>{region.confirme}</td>
                            <td>{region.critique}</td>
                            <td>{region.guerie}</td>
                            <td>{region.mort}</td>
                            <td>{region.degre}</td>
                            <td><i class="fa fa-close  fa-2x" aria-hidden="true" style={{ color :'red ' }}></i></td>

                              
                        </tr>
                      );}
              })}
               {this.state.zone.map(region => {
               if (region.valide==1 ){
                      return (
                        <tr >
                          <td>{region.region}</td>
                            <td>{region.suspect}</td>
                            <td>{region.confirme}</td>
                            <td>{region.critique}</td>
                            <td>{region.guerie}</td>
                            <td>{region.mort}</td>
                            <td>{region.degre}</td>
                            <td><i class="fa fa-check  fa-2x" aria-hidden="true" style={{ color :'green ' }}></i></td>

                              
                        </tr>
                      );}
              })}
                  </tbody>
                </Table>
              }
            />
            
         
          </Col>
        </Row>
        </TabPanel>
        <TabPanel>
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
                          <th v>état</th>
                        </tr>

                        </thead>
                        <tbody>

                        {this.state.robot.reverse().map(google => {
                          if (google.supprime==1  && google.type=="google"){
                          return (
                            <tr >
                           
                              <td style={{ width :'10% ' }}>{google.date}</td>
                              <td style={{ width :'15% ' }}>{google.titre}</td>
                              <td style={{ width :'50% ' }}>{google.description}</td>
                              <td style={{ width :'15% ' }}><a href={google.url}>{google.url}</a></td>
                              
                              <td><i class="fa fa-close  fa-2x" aria-hidden="true" style={{ color :'red ' }}></i></td>
                            </tr>
                          );
                        } })}
                         {this.state.robot.reverse().map(google => {
                          if (google.valide==1 && google.type=="google"){
                          return (
                            <tr >
                           
                              <td style={{ width :'10% ' }}>{google.date}</td>
                              <td style={{ width :'15% ' }}>{google.titre}</td>
                              <td style={{ width :'50% ' }}>{google.description}</td>
                              <td style={{ width :'15% ' }}><a href={google.url}>{google.url}</a></td>
                              
                              <td><i class="fa fa-check  fa-2x" aria-hidden="true" style={{ color :'green ' }}></i></td>
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
                                                  
                             <th>état</th>
                           </tr>
   
                           </thead>
                           <tbody>
   
                           {this.state.robot.reverse().map(tweet => {
                             if ( tweet.supprime==1 && tweet.type=="twitter"){
                             return (
                               <tr >
                                 
                               
                                 <td>{tweet.date}</td>
                                 <td>{tweet.titre}</td>
                                 <td>{tweet.description}</td>
                                 <td><a href={tweet.url}>{tweet.url}</a></td>
                                 
                                 <td><i class="fa fa-close  fa-2x" aria-hidden="true" style={{ color :'red ' }}></i></td>

                               </tr>
                             );
                           } })}
                           {this.state.robot.reverse().map(tweet => {
                             if ( tweet.valide==1 && tweet.type=="twitter"){
                             return (
                               <tr >
                                 
                               
                                 <td>{tweet.date}</td>
                                 <td>{tweet.titre}</td>
                                 <td>{tweet.description}</td>
                                 <td><a href={tweet.url}>{tweet.url}</a></td>
                                 
                                 <td><i class="fa fa-check  fa-2x" aria-hidden="true" style={{ color :'green ' }}></i></td>

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
                             <th style={{ width :'10% ' }}>état</th>
                           </tr>
   
                           </thead>
                           <tbody>
   
                           {this.state.robot.reverse().map(youtube => {
                           
                             if (youtube.supprime==1 && youtube.type=="youtube" ){
                                
                
                             return (
                               
                               <tr >
                                 
                               
                                
                                 <td>{youtube.titre}</td>
                                 <td>{youtube.description}</td>
                                 <td>  <ReactPlayer
                                    width='100%'
                                    controls='true'
                                    url={"https://www.youtube.com/embed/"+youtube.url }/>  </td>
                                 
                                 <td><i class="fa fa-close  fa-2x" aria-hidden="true" style={{ color :'red ' }}></i></td>

                               </tr>
                             );
                           } })}
                             {this.state.robot.reverse().map(youtube => {
                           
                           if (youtube.valide==1 && youtube.type=="youtube" ){
                              
              
                           return (
                             
                             <tr >
                               
                             
                              
                               <td>{youtube.titre}</td>
                               <td>{youtube.description}</td>
                               <td>  <ReactPlayer
                                  width='100%'
                                  controls='true'
                                  url={"https://www.youtube.com/embed/"+youtube.url }/>  </td>
                               
                               <td><i class="fa fa-check  fa-2x" aria-hidden="true" style={{ color :'green ' }}></i></td>

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
        </TabPanel>  
        <TabPanel>
          <Row>
          
         
          <Col md={12 }>
          <Card
              title="Cas suspects  "
            
           
              content={
                <Table striped hover>
                <thead>                         
                  <tr>
                  
                  <th>id</th>                       
                  <th>titre</th>
                  <th>contenu</th>
                  <th>media</th>
                  <th>état</th>

                 
                </tr>
              
                </thead>
                <tbody>
                  
                {this.state.cas.map(cas => {
                   if (cas.supprime==1 ){
                    return (
              
                    <tr >
                        <td>{cas.id}</td>
                      <td>{cas.date}</td>
                      <td>{cas.commentaire}</td>
                      <td>{cas.media}</td>
                      <td><i class="fa fa-close  fa-2x" aria-hidden="true" style={{ color :'red ' }}></i></td>

                     
                    </tr>
              ); } })}
               {this.state.cas.map(cas => {
                   if (cas.valide==1 ){
                    return (
              
                    <tr >
                        <td>{cas.id}</td>
                      <td>{cas.date}</td>
                      <td>{cas.commentaire}</td>
                      <td>{cas.media}</td>
                      <td><i class="fa fa-check  fa-2x" aria-hidden="true" style={{ color :'green ' }}></i></td>

                     
                    </tr>
              ); } })}
                </tbody>
              </Table>
              }
            />
            
         
          </Col>
        </Row>
        </TabPanel>
        <TabPanel>
          <Row>
          
         
          <Col md={12 }>
          <Card
              title="Videos utilisateur  "
             
           
              content={
                <Table striped hover>
                <thead>                         
                  <tr>
                  
                  <th>id</th>                       
                  <th>titre</th>
                  <th>contenu</th>
                  <th>media</th>
                  <th>état</th>

                 
                </tr>
              
                </thead>
                <tbody>
                  
                {this.state.video.map(video => {
                   
                      if (video.supprime==1 ){
                      return (
                
                    <tr >
                        <td>{video.id}</td>
                      <td>{video.date}</td>
                      <td>{video.commentaire}</td>
                      <td>{video.media}</td>
                      <td><i class="fa fa-close  fa-2x" aria-hidden="true" style={{ color :'red ' }}></i></td>

                     
                     
                    </tr>
                ); } })}
                 {this.state.video.map(video => {
                   
                   if (video.valide==1 ){
                   return (
             
                 <tr >
                     <td>{video.id}</td>
                   <td>{video.date}</td>
                   <td>{video.commentaire}</td>
                   <td>{video.media}</td>
                   <td><i class="fa fa-check  fa-2x" aria-hidden="true" style={{ color :'green ' }}></i></td>

                  
                  
                 </tr>
             ); } })}
                
                </tbody>
              </Table>
                
              }
            />
            
         
          </Col>
        </Row>
        </TabPanel>
        <TabPanel>
          <Row>
          
         
          <Col md={12 }>
          <Card
              title="Commentaire  "
             
              content={
                <Table striped hover>
                <thead>                         
                  <tr>
                  
                  <th>id</th>                       
                  <th>commentaire</th>
                  <th>état</th>
                 
                 
                </tr>
              
                </thead>
                <tbody>
                  
                {this.state.comment.map(comment => {
                  if (comment.supprime==1 ){
                  return (
                    <tr >
                        <td>{comment.id}</td>
                      <td>{comment.contenu}</td>
                      <td><i class="fa fa-close  fa-2x" aria-hidden="true" style={{ color :'red ' }}></i></td>
                    
                    </tr>
                  ); } })}
          
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

export default HistoryModerateur;

             
