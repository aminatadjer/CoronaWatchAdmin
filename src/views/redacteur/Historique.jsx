import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';

import FileViewer from 'react-file-viewer';  
import  axios from "axios";
import CancelIcon from '@material-ui/icons/Cancel';
import {apiConfig} from "../ApiConfig.js";
import BorderColor from '@material-ui/icons/BorderColor';
import ReactPlayer from 'react-player'

var fileExtension = require('file-extension');
class TableList extends Component {
  state ={
    articles:[],
  };
 
 
  componentDidMount(){

    axios.get(apiConfig.articleUrl
    ).then(res =>{
        console.log(res);
       
        this.setState({articles:res.data});
      }
  
      );
    
  }
  List(file_extention,media) {
    if (file_extention=="png" || file_extention=="jpg" ) {
      return <img src={media} style={{ height :'100%',width:'100%',  textAlign:' center',justifyContent: 'center', alignItems: 'center',position:' relative'}} ></img>

      ;
    }else{
      if(file_extention=="mp4"){
        return   <ReactPlayer
        width='100%'
        controls='true'
         url={media} />  
      }
    }
   
    
  }
 
  render() {
  
  
    return (
     
      <div className="content">
        <Grid fluid>
          <Row>

          <Col md={12 }>
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
                        
                      {this.state.articles.map(article => {
                        
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
                             
                      {this.state.articles.map(article => {
                        
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
               
          </Col>
        </Row>
        
        </Grid>
      </div>
       
  
    )
  }
}

export default TableList;