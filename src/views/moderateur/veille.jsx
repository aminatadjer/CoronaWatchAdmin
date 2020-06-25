
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Card from "components/Card/Card.jsx";
import {  tdArrayVeilleFacebook,tdArrayVeilleWeb,tdArrayVeilleYoutube } from "variables/Variables.jsx";
import {apiConfig} from "../ApiConfig.js";
import  axios from "axios";
class VeilleModerateur extends Component {
  state ={
    google:[],
  };

  componentDidMount(){

    axios.get(apiConfig.googleUrl
    ).then(res =>{
        console.log(res);
        this.setState({google:res.data});
      });
  }
  deleteClick(id){
 
    axios.put(apiConfig.googleUrl+`${id}/googleSupprimer/`,{
      "supprime":1,
      
    }).then(res=>{
      this.componentDidMount();
      console.log(res)
    });
  }
  valideClick(id){
 
    axios.put(apiConfig.googleUrl+`${id}/googleValider/`,{
      "valide":1,
  
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
                  title="Google"
                  category=""
                  ctTableFullWidth
                  ctTableResponsive
                  content={
                    <Table striped hover>
                      <thead>

                        <tr>
                          <th>Id</th>
                          <th>Titre</th>
                          <th>Descrition</th>
                          <th>URL</th>                         
                          <th>Action</th>
                        </tr>

                        </thead>
                        <tbody>

                        {this.state.google.reverse().map(google => {
                          if (google.valide==0 && google.supprime==0 ){
                          return (
                            <tr >
                              
                              <td>{google.id}</td>
                              <td>{google.titre}</td>
                              <td>{google.description}</td>
                              <td>{google.url}</td>
                              
                              <td>
                              <IconButton 
                                onClick={() => this.valideClick(google.id )}
                                style={{ background:'#e6e6e6', color: '#00b300' }}
                                aria-label="valide">
                                <CheckCircleIcon fontSize="large" />
                              </IconButton>
                                <IconButton 
                                  onClick={() => this.deleteClick(google.id)}
                                  style={{ background:'#e6e6e6', color: '#ff0000' }}
                                  aria-label="delete">
                                  <CancelIcon fontSize="large" />
                                </IconButton>
                              </td>
                            </tr>
                          );
                        } })}
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

export default VeilleModerateur;
