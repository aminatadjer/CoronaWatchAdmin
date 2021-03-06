import React, { Component } from "react";
import  axios from "axios";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import {apiConfig} from "../ApiConfig.js";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import FileViewer from 'react-file-viewer';  
import ReactPlayer from 'react-player'
const token=localStorage.getItem("base-token");



var fileExtension = require('file-extension');

class Cas extends Component {

  state ={
    casSignaler:[],
    articles:[],
    user:[]
  };
  componentDidMount(){

    axios.get(apiConfig.CasUrl
    ).then(res =>{
        console.log(res);
        this.setState({casSignaler:res.data});
      }); 
      axios.get(apiConfig.userUrl
        ).then(res =>{
            console.log(res);
       
            this.setState({user:res.data});
          }
      
          );
  }
 

    
    
  validateClick(id){
 
    axios.put(apiConfig.CasUrl+`${id}/CasSignalerValider/`,{
      "valide":1,
      "vu":1,
    },{headers:{
    
      'Authorization':'Token '+token
    }}).then(res=>{
      this.componentDidMount();
      console.log(res)
    });
  }
 
  deleteClick(id){
 
    axios.put(apiConfig.CasUrl+`${id}/CasSignalerSupprimer/`,{
      "supprime":1,
      "vu":1,
    },{headers:{
    
      'Authorization':'Token '+token
    }}).then(res=>{
      this.componentDidMount();
      console.log(res)
    });
  }
 
  List(file_extention,media) {
    if (file_extention=="png" || file_extention=="jpg" ) {
      return <img src={media} style={{ height :'100%',width:'100%',  textAlign:' center',justifyContent: 'center', alignItems: 'center',position:' relative'}} ></img> ;
    }else{
      if(file_extention=="mp4"){
        return  <ReactPlayer
        width='100%'
        controls='true'
         url={media} />  
      }
    
    }
  }
 
  render() {
  return (

  <div>
    <br/> <div className="content">
              <Grid fluid>
                <Row>
                {
              this.state.casSignaler.reverse().map(casSignaler => {
                if (casSignaler.vu==0){
                    return <Col md={6}>
                    <Card
                      title={"Commentaire: " +casSignaler.commentaire}
                      category={"Cas suspect numéro: " +casSignaler.id +", Signaler le :" +casSignaler.date.toString()+", Par :"+this.state.user.map(user => {
                        if (user.id==casSignaler.owner){
                            return ( user.username)}
                          })}
                      content={
                        <div>
                              <hr/>
                              <p align="center" style={{ fontSize:'25px'}} >
                                {this.List(fileExtension(casSignaler.media),casSignaler.media) }
                              </p>

                              <div align="center">
                              <Button
                                  onClick={() => this.validateClick(casSignaler.id)}
                                  style={{ background:'#87CB16', color: 'black' ,position:'relative', float:'center',width:'30%',fontSize:'15px'}}
                                  variant="contained"
                                  color="Green"
                                  startIcon={<CheckCircleIcon />}
                                >
                                  <strong>Valider</strong>
                                </Button>
                                <Button
                                  onClick={() => this.deleteClick(casSignaler.id)}
                                  variant="contained"
                                  color="secondary"
                                  style={{ background:'#FF4A55', color: 'black' ,position:'relative', float:'center',width:'30%',fontSize:'15px'}}
                                  startIcon={<CancelIcon />}
                                >
                                   <strong>  Supprimer</strong>
                                </Button>
                              
                              </div>         
                         </div>               
                        }
                       />
                  </Col>
                    }
                  })}
                </Row>
              </Grid>
            </div>
            
        
  </div> 
   )}           
}

export default Cas;
            
                
                  
                                