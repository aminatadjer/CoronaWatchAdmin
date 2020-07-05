
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col

} from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import avatar from "assets/img/faces/preview.jpg";
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {apiConfig} from "../ApiConfig.js";
import  axios from "axios";
import ReactPlayer from 'react-player'
const token=localStorage.getItem("base-token");

class Videos extends Component {
  state ={
    video:[],
    user:[]
  
  };
  componentDidMount(){

    axios.get(apiConfig.videoUrl
    ).then(res =>{
        console.log(res);
        this.setState({video:res.data});
      }); 
      axios.get(apiConfig.userUrl
        ).then(res =>{
            console.log(res);
       
            this.setState({user:res.data});
          }
      
          );
  }
  validateClick(id){
    
    axios.put(apiConfig.videoUrl +`${id}/VideoValider/`,{
      "valide":1,
      "vu":1,
    },{headers:{
    
      'Authorization':'Token '+token
    }}).then(res=>{
      this.componentDidMount();
      console.log(res);
    });
    
  }

  deleteClick(id){
 
    axios.put(apiConfig.videoUrl+`${id}/VideoSupprimer/`,{
      "supprime":1,
      "vu":1,
    },{headers:{
    
      'Authorization':'Token '+token
    }}).then(res=>{
      this.componentDidMount();
      console.log(res)
    });
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
          {this.state.video.reverse().map(video => {
             if (video.vu==0){
          return<Col md={6}>
              <Card
                title={video.titre}
               
                content={
                  <form>
                    <p> {"Cas signaler le: "+video.date+", Publié par: "+this.state.user.map(user => {
                  if (user.id==video.owner){
                      return ( user.username)}
                    })    
                  } </p>
                      <p>
                        {video.commentaire}
                      </p>
                  
                      <ReactPlayer
                      width='100%'
                      controls='true'
                       url={video.media} />  
                       <br/>                    
                        <Button
                          onClick={() => this.validateClick(video.id)}
                          variant="contained"
                          color="secondary"
                          style={{ background:'#FF4A55', color: 'black' ,position:'relative',float:'center',width:'180PX',fontSize:'15px'}}
                          startIcon={<CancelIcon />} >
                          <strong>  Supprimer</strong>
                       </Button>
                       
                       <Button
                          onClick={() => this.deleteClick(video.id)}
                          style={{ background:'#87CB16', color: 'black' ,position:'relative', float:'left',width:'180PX',fontSize:'15px'}}
                          variant="contained"
                          color="Green"
                          startIcon={<CheckCircleIcon />} >  
                          <strong> Valider</strong>
                      </Button>
                                   
                  </form>
                }
              />
            </Col>
            }})} 
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Videos;
