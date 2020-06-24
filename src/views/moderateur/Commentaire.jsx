
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import  axios from "axios";
import {apiConfig} from "../ApiConfig.js";
class Commentaire extends Component {
  state ={
    comment:[],
    
  };
  componentDidMount(){

    axios.get(apiConfig.commentUrl
    ).then(res =>{
        console.log(res);
        this.setState({comment:res.data});
      }); 
  }
  deleteClick(id){
 
    axios.put(apiConfig.commentUrl+`${id}/CommentSupprimer/`,{
      
      "supprime":1,
    }).then(res=>{
      this.componentDidMount();
      console.log(res)
    });
  }
 
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Les Commentaires des utilisateurs"
              
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped >

                        <thead>

                          <th>id</th>
                          <th align ="center">Commentaire</th>
                          <th>Supprimer</th>

                        </thead>
                        
                        <tbody>
                        {
                          this.state.comment.reverse().map(comment => {
                            if (comment.supprime==0){
                            return <tr>
                              <td>{comment.id}</td>
                              <td>{comment.contenu}</td>
                              <td> <IconButton 
                                    onClick={() => this.deleteClick(comment.id)}
                                    style={{ background:'#e6e6e6', color: '#ff0000' }}
                                    aria-label="delete">
                                    <CancelIcon fontSize="large" />
                                  </IconButton>
                              </td>                    
                          </tr>
                          
                        }})}
                      
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Commentaire;
