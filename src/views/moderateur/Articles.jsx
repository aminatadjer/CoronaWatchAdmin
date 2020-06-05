import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { apiConfig } from './ApiConfig.js';
import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import IconButton from '@material-ui/core/IconButton';
import FileViewer from 'react-file-viewer';  
import {FormInputs} from 'components/FormInputs/FormInputs.jsx'
import  axios from "axios";
import { CardFooter } from "reactstrap";


var fileExtension = require('file-extension');
class TableList extends Component {
  state ={
    articles:[],
  };
 
  validateClick(id){
    console.log(id)
    axios.put(apiConfig.apiUrl_article + `${id}/ArticleValider/`,{
      "valide":1,
      "vu":1,
    }).then(res=>{
      this.componentDidMount();
      console.log(res)
    })
   
    
  ;
    
  }
  
  deleteClick(id){
    console.log(id)
    axios.put(apiConfig.apiUrl_article + `${id}/ArticleSupprimer/`,{
      "supprime":1,
      "vu":1,
    }).then(res=>{
      this.componentDidMount();
      console.log(res)
    })
   
    
  ;
    
  }
  componentDidMount(){

    axios.get(apiConfig.apiUrl_article
    ).then(res =>{
        console.log(res);
       
        this.setState({articles:res.data});
      }
  
      );
    
  }
  List(file_extention,media) {
    if (file_extention=="png" || file_extention=="jpg" ) {
      return <img src={media} style={{ height :'500PX',width:'600px',  textAlign:' center',justifyContent: 'center', alignItems: 'center',position:' relative'}} ></img>

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
      <ul>
        <br/>
      {
    
      this.state.articles.map(articles => {
      
   if (articles.vu==0){
        return  <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title={"Num" +articles.id + ": "+ articles.titre}
                category={"Ecrit par hadjer "  }
                ctTableFullWidth
                ctTableResponsive
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
  <div align="center">
  <IconButton onClick={() => this.validateClick(articles.id)}
                              style={{ background:'#e6e6e6', color: '#00b300' }}
                          aria-label="delete">
          <CheckCircleIcon fontSize="large" />
        </IconButton> <IconButton onClick={() => this.deleteClick(articles.id)}
                              style={{ background:'#e6e6e6', color: '#ff0000' }}
                          aria-label="delete">
          <DeleteIcon fontSize="large" />
        </IconButton>
        </div>


                  </div>

          
                 
                }
                />
              </Col>
             
            </Row>
          </Grid>
        </div>}
        })}
      
      </ul>
    )
  }
}

export default TableList;