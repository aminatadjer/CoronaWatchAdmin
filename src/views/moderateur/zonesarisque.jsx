
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import  axios from "axios";
import {apiConfig} from "../ApiConfig.js"

class ZonesRisqueModerateur extends Component {
  state ={
   
    region:[],
    centre:[],
  };

  componentDidMount(){
      axios.get(apiConfig.regionUrl
      ).then(res =>{
          console.log(res);
     
          this.setState({region:res.data});
        }
    
        );
        axios.get(apiConfig.centreUrl
        ).then(res =>{
            console.log(res);
            this.setState({centre:res.data});
           
          }
      
          );
     
  }
  render() {
    
    return (
      <div className="content">
        <Grid fluid>

          <Row>
            <Col md={12}>
            <Card
                  title="Regions a risque"
                  category="Les mise a jour de l'agent de santé non encore valider"
                  ctTableFullWidth
                  ctTableResponsive
                  content={
                    <Table striped hover>
                      <thead>                         
                        <tr>
                        
                        <th>Date</th>                       
                        <th>Region</th>
                        <th>Cas Suspects</th>
                        <th>cas confirmés</th>
                        <th>cas critiques</th>
                        <th>Guérisons</th>
                        <th>Nombre de décès</th>
                        <th>Degré</th>
                      </tr>
                    
                      </thead>
                      <tbody>
                        
                      {this.state.region.reverse().map(region => {
                        
                        return (
                          <tr >
                             
                             

                             <td>  
                             {region.date_validation}
                             </td> 
                            <td>{region.nom}</td>
                            <td>{region.suspect}</td>
                            <td>{region.confirme}</td>
                            <td>{region.critique}</td>
                            <td>{region.guerie}</td>
                            <td>{region.mort}</td>
                            <td>{region.degre}</td>
                            <td>
                              
                            </td>
                          </tr>
                        );
                  })}
                      </tbody>
                    </Table>
                }
              />
            </Col>
          </Row>
          <Row>
          
         
          <Col md={12 }>
          <Card
              title="Les centres  "
              category="information sur les centres"
              ctTableFullWidth
              ctTableResponsive
              content={
                <Table bordered hover >
                  <thead>
                    <tr>
                      
                      <th>Nom du centre</th>
                      <th>region</th>
                      <th>Adresse</th>
                      <th>Numero téléphone</th>
                      
                      
                    </tr>
                  </thead>
                  <tbody>
                    
                    {this.state.centre.reverse().map(centre => {
               
                      return (
                        <tr >
                            <td>{centre.nom}</td>
                          <td>{this.state.region.map(region => {
                             if (region.id==centre.region){
                            
                                  return ( 
                             
                                  region.nom
                                    )}})}</td>
                         <td>{centre.adresse}</td>
                         <td>{centre.numero}</td>
                        
                        </tr>
                      );
              })}
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

export default ZonesRisqueModerateur;
