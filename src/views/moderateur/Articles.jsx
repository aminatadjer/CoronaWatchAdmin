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
import { Grid, Row, Col, Table } from "react-bootstrap";

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

import FileViewer from 'react-file-viewer';  
import {FormInputs} from 'components/FormInputs/FormInputs.jsx'
import  axios from "axios";


var fileExtension = require('file-extension');
class TableList extends Component {
  state ={
    articles:[],
  };
 
  validateClick(id){
    console.log(id)
    axios.put(`http://127.0.0.1:8000/api/article/ ${id} /ArticleValider/`,{
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
    axios.put(`http://127.0.0.1:8000/api/article/ ${id} /ArticleSupprimer/ `,{
      "supprime":1,
      "vu":1,
    }).then(res=>{
      this.componentDidMount();
      console.log(res)
    })
   
    
  ;
    
  }
  componentDidMount(){

    axios.get(' http://127.0.0.1:8000/api/article/'
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
      {
    
      this.state.articles.map(articles => {
      
   if (articles.valide==0){
        return  <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
               
                
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped >
                    
                  <tbody>
                  <tr>
                    <th>
                    <FormInputs
    ncols = {["col-md-5"  , "col-md-3"]}
    properties = {[
        {
          label : "Redacteur",
            type : "text",
            bsClass : "form-control",
            placeholder : "Company",
            defaultValue :articles.contenu,
            disabled : true
        },
        {
          label : "Titre",
            type : "text",
            bsClass : "form-control",
            placeholder : "Company",
            defaultValue :articles.titre,
            disabled : true
        }
    ]}
/>
                    </th>
                    </tr>
                    <tr>
                     <p
                     align ="right"        style={{ fontSize:'25px'}}
                      
                       dangerouslySetInnerHTML={{
                         __html:articles.contenu
                       }}
                      
                      >
                            
                    </p>
  
                 </tr>
                  

                <tr>
 
                <td> 
               
    <p align ="center" >
    {this.List(fileExtension(articles.media),articles.media) }
  

  </p>
  
                   

                          </td>
</tr>
<tr>
  <th>
  
  <Button
 onClick={() => this.deleteClick(articles.id)}

      variant="contained"
      color="secondary"
      style={{ background:'#FF4A55', color: 'black' ,position:'relative', left:'535px', top:'2px',width:'200PX',fontSize:'15px'}}
      startIcon={<DeleteIcon />}
    >
     <strong>  Supprimer</strong>
    </Button>
    <Button
     onClick={() => this.validateClick(articles.id)}

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
  }
}

export default TableList;
