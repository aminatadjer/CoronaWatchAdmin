/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";


import  axios from "axios";
import {
  Grid,
  Row,
  Col,
  Table,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";


import avatar from "assets/img/faces/preview.jpg";

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import ReactPlayer from 'react-player'

import FileViewer from 'react-file-viewer';  

var fileExtension = require('file-extension');

;
 


class Cas extends Component {

  state ={
    casSignaler:[],
  };

 saveScore() {
    
      axios.get('http://127.0.0.1:8000/api/casSignaler',
      {
          valide: 'true',
          
      }).then(res=>{
        console.log(res)
      })
     
        
    
  };
  refreshList = () => {
    axios
      .get("http://localhost:8000/api/casSignaler/")
      .then(res => this.setState({ todoList: res.data }))
      .catch(err => console.log(err));
  };


  update (id) {
      axios
        .put(`http://localhost:8000/api/casSignaler/detail/${id}`,
        {
            valide: 'true',
            
        })
        .then(res => this.refreshList())
        .catch(err => console.log(err));
      return;
  };
putDate(id){
  console.log(id)
  const token="9640cba75d06a5ed3d444afda0c8d8924d839a2a"
  axios.put(`http://127.0.0.1:8000/api/casSignaler/${id}`,{
    "valide":true,
  },{headers:{"Authorication":`Token ${token}`}}).then(res=>{
    
    console.log(res)
  })
 
  
;
  
}
  componentDidMount(){

    axios.get(' http://127.0.0.1:8000/api/casSignaler/',{
      params: {
        where:[["valide","=",false]]
      }
    }
    ).then(res =>{
        console.log(res);
        if (res.data.id=1) {
          console.log(res)
        }
        this.setState({casSignaler:res.data});
      }
  
      );
    
  }
  render() {
  
 
    
  return (
    <ul>
      {
    
      this.state.casSignaler.map(casSignaler => {
   if (casSignaler.valide==0){
        return  <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
             
                
    
 
   
              
    
               <Card
                title="Cas suspect"
                content={
                  
                     <Table striped >
                    
                    <tbody>
                    <tr>
                       <th>
                              {casSignaler.id}
                      </th>
    
                   </tr>
                    <tr>
                       <th> 
                       {casSignaler.date}
                       </th>
    
                    </tr>
 
                  <tr>
   
                  <td> 
      <p align ="right" >
 {casSignaler.commentaire} 
  
  <FileViewer
         
        filePath={casSignaler.video}
        fileType={fileExtension(casSignaler.video )  }
      
       
      />
    </p>
                     
  
                            </td>
  </tr>
  <tr>
    <th>
    
    <Button
     
        variant="contained"
        color="secondary"
        style={{ background:'#FF4A55', color: 'black' ,position:'relative', left:'535px', top:'2px',width:'200PX',fontSize:'15px'}}
        startIcon={<DeleteIcon />}
      >
       <strong>  Supprimer</strong>
      </Button>
      <Button
          onClick={this.update(casSignaler.id)}
          style={{ background:'#87CB16', color: 'black' ,position:'relative', left:'120px', top:'2px',width:'200PX',fontSize:'15px'}}
        variant="contained"
        color="Green"
       
        startIcon={<CheckCircleIcon />}
      >
    <strong>    Valider</strong>
      </Button>
            
            
            
    </th>
    
  </tr>
                    </tbody>
                  </Table>
                
                }
              />
            </Col>
           
          </Row>
        </Grid>
      </div>}
      })}
    
    </ul>
  )



  /*  return (
     
     <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
             
 
    
 
   
              
    
               <Card
                title="Cas suspect"
                content={
                  
                     <Table striped >
                    
                    <tbody>
                    <tr>
                       <th>
                              {casSignaler.id}
                      </th>
    
                   </tr>
                    <tr>
                       <th> 
                             Date
                       </th>
    
                    </tr>
 
                  <tr>
   
                  <td> 
      <p align ="right">
     Commentaire
    </p>                        
                           
                            </td>
  </tr>
  <tr>
    <th>
    
    <Button
        variant="contained"
        color="secondary"
        style={{ background:'#FF4A55', color: 'black' ,position:'relative', left:'535px', top:'2px',width:'200PX',fontSize:'15px'}}
        startIcon={<DeleteIcon />}
      >
       <strong>  Supprimer</strong>
      </Button>
      <Button
          style={{ background:'#87CB16', color: 'black' ,position:'relative', left:'120px', top:'2px',width:'200PX',fontSize:'15px'}}
        variant="contained"
        color="Green"
       
        startIcon={<CheckCircleIcon />}
      >
    <strong>    Valider</strong>
      </Button>
            
            
            
    </th>
    
  </tr>
                    </tbody>
                  </Table>
                
                }
              />
            </Col>
           
          </Row>
        </Grid>
      </div>
    
    );
              }*/







              

            }
            
}

export default Cas;
