import React, { Component } from "react";
import  axios from "axios";
import {
  Grid,
  Row,
  Col,
  Table
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';


import FileViewer from 'react-file-viewer';  

var fileExtension = require('file-extension');


class Cas extends Component {

  state ={
    casSignaler:[],
    articles:[]
  };

 
validateClick(id){
  console.log(id)
  axios.put(`http://127.0.0.1:8000/api/casSignaler/${id}/CasSignalerValider/`,{
    "valide":1,
    "vu":1,
  }).then(res=>{
    this.componentDidMount();
    console.log(res)
  });
  
}

deleteClick(id){
  console.log(id)
  axios.put(`http://127.0.0.1:8000/api/casSignaler/${id}/CasSignalerSupprimer/`,{
    "supprime":1,
    "vu":1,
  }).then(res=>{
    this.componentDidMount();
    console.log(res)
  })  
;
  
}
 List(file_extention) {
  console.log(file_extention)
  if (file_extention==".mp4" ){
    console.log("Sorry, the list is empty")
  }
}
  componentDidMount(){

    axios.get(' http://127.0.0.1:8000/api/casSignaler/'
    ).then(res =>{
        console.log(res);
       
        this.setState({casSignaler:res.data});
      }
  
      );
    
  }
  List(file_extention,media) {
    if (file_extention=="png" || file_extention=="jpg" ) {
      return <img src={media} style={{ height :'500PX',width:'700px',  textAlign:' center',justifyContent: 'center', alignItems: 'center',position:' relative'}} ></img>

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
    
    <div>
      <br/> {
    
      this.state.casSignaler.map(casSignaler => {
   if (casSignaler.vu==0){
        return  <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
               <Card
                title={"Commentaire: " +casSignaler.commentaire}
                category={"Cas suspect numéro: " +casSignaler.id +", signaler le :" +casSignaler.date }
                content={
                  <div>
                    <hr/>
                   
                  <p align="center" style={{ fontSize:'25px'}} >
      
      
      {this.List(fileExtension(casSignaler.media),casSignaler.media) }
</p>
<div align="left">
<Button
    onClick={() => this.deleteClick(casSignaler.id)}
        variant="contained"
        color="secondary"
        style={{ background:'#FF4A55', color: 'black' ,position:'relative', left:'535px', top:'2px',width:'200PX',fontSize:'15px'}}
        startIcon={<DeleteIcon />}
      >
       <strong>  Supprimer</strong>
      </Button>
      <Button
        onClick={() => this.validateClick(casSignaler.id)}
        style={{ background:'#87CB16', color: 'black' ,position:'relative', left:'120px', top:'2px',width:'200PX',fontSize:'15px'}}
        variant="contained"
        color="Green"
        startIcon={<CheckCircleIcon />}
      >
    <strong>Valider</strong>
      </Button>
      </div>         
      </div>
                
                }
              />
            </Col>
           
          </Row>
        </Grid>
      </div>}
      })}
      </div> 
    
    
  )

            }
            
}

export default Cas;