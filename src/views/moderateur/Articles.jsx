import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import FileViewer from 'react-file-viewer';  
import  axios from "axios";
import {apiConfig} from "../ApiConfig.js";
import ReactPlayer from 'react-player'


var fileExtension = require('file-extension');
const token=localStorage.getItem("base-token");
class TableList extends Component {
  state ={
    articles:[],
    user:[]
  };
 
  componentDidMount(){

    axios.get(apiConfig.articleUrl
    ).then(res =>{
        console.log(res);
       
        this.setState({articles:res.data});
      }
  
      );
      axios.get(apiConfig.userUrl
        ).then(res =>{
            console.log(res);
       
            this.setState({user:res.data});
          }
      
          );
    
  }

  validateClick(id){
    console.log(id)
    axios.put(apiConfig.articleUrl+`${id}/ArticleValider/`,{
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
    console.log(id)
    axios.put(apiConfig.articleUrl+`${id}/ArticleSupprimer/`,{
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

      ;
    }else{
      if(file_extention=="mp4"){
        return  <ReactPlayer
        width='100%'
        controls='true'
         url={media} />  
      }
    }
   
    
  }
 
  render()
   {
    return (
      <ul> 
        <br/>
             <div className="content">
            <Grid fluid>

              <Row>
              {this.state.articles.reverse().map(articles => {
          if (articles.vu==0){
            return  <Col md={6}>
                  <Card
                    title={"Articles N° " +articles.id + ": "+ articles.titre}
                   category={"Ecrit par hadjer "+this.state.user.map(user => {
                    if (user.id==articles.owner){
                        return ( user.username)}
                      })   }
                   
                    content={
                    <form>
                        <p
                           align ="center" style={{ fontSize:'25px'}}                           
                           dangerouslySetInnerHTML={{
                              __html:articles.contenu
                            }}>
                        </p>

                        <p >
                           {this.List(fileExtension(articles.media),articles.media) }
                        </p>

                        <div align="center">
                             <Button
                                 onClick={() => this.validateClick(articles.id)}
                                  style={{ background:'#87CB16', color: 'black' ,position:'relative', float:'center',width:'30%',fontSize:'15px'}}
                                  variant="contained"
                                  color="Green"
                                  startIcon={<CheckCircleIcon />}>
                              
                                   <strong>Valider</strong>
                              </Button>
                              <Button
                                    onClick={() => this.deleteClick(articles.id)}
                                    variant="contained"
                                    color="secondary"
                                    style={{ background:'#FF4A55', color: 'black' ,position:'relative', float:'center',width:'30%',fontSize:'15px'}}
                                    startIcon={<CancelIcon />}>
                                    <strong>  Supprimer</strong>
                              </Button>
                        </div>
                     </form>
                      }
                   />
                </Col>
                   }})
                  }
              </Row>
            </Grid>
          </div>
                    
      
     </ul>
    )
  }
}

export default TableList;
                         
                          
                 
                              
                  
                          



                        

                              