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
        return    <FileViewer 
        fileType={"mp4"}
        filePath={media}></FileViewer>
      }
    }
   
    
  }
 
  render() {
  
  
    return (
     
        <Grid fluid>
          <br/>
          <Row>
          { this.state.articles.map(articles => {   
          if (articles.valide==0){
          return   <Col md={6}>
              <Card
                title={"Article N°:" +articles.id}
               
                
                content={
                  <div>
                     <p
                     align ="center" style={{ fontSize:'25px'}}
                      
                       dangerouslySetInnerHTML={{
                         __html:articles.contenu
                       }}
                      
                      >
                            
                    </p>
                    <hr/>
                    <p align ="center" >
                    {this.List(fileExtension(articles.media),articles.media) }
                  </p>
                  <Button
                    style={{ background:'#ff9900', color: 'black' ,position:'relative', left:'0px', top:'2px',width:'180PX',fontSize:'15px'}}
                    variant="contained"
                    color="Green"
                     startIcon={<BorderColor />}
                  >
                    <strong>Modifier</strong>
                  </Button>
                  </div>
 
                }
                
                />
                
              </Col>
         
                  }
                })}
            </Row>
          </Grid>
       
  
    )
  }
}

export default TableList;