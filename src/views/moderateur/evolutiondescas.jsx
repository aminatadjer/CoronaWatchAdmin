
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import  axios from "axios";
import { ThreeSixty } from "@material-ui/icons";
import {apiConfig} from "../ApiConfig.js";
class EvolutionCasModerateur extends Component {
  state ={
    casSignaler:[],
    region:[],
    user:[],

 
  };

  componentDidMount(){

    axios.get(apiConfig.infoRegionUrl
    ).then(res =>{
        console.log(res);
 
        this.setState({casSignaler:res.data});
      }
  
      );
      axios.get(apiConfig.regionUrl
      ).then(res =>{
          console.log(res);
     
          this.setState({region:res.data});
        }
    
        );
        axios.get(apiConfig.userUrl
        ).then(res =>{
            console.log(res);
       
            this.setState({user:res.data});
          }
      
          );
    
  }
  updateRegion(region,suspect,confirme,critique,mort,guerie,date,degre){
    
    axios.put(apiConfig.regionUrl+`${region}/updateRegion/`,{
      "suspect":suspect,
      "confirme":confirme,
      "critique":critique,
      "mort":mort,
      "guerie":guerie,
      "degre":degre,
      "date_validation":date

    }).then(res=>{
     console.log("hehe");

      console.log(res);
    });
    
  }
 
 
  deleteClick(id){
 
    axios.put(apiConfig.infoRegionUrl+`${id}/rejeter/`,{
      "supprime":1,
      "vu":1,
    }).then(res=>{
      this.componentDidMount();
      console.log(res)
    });
  }
  valideClick(id,region,suspect,confirme,critique,mort,guerie,date,degre){
 
    axios.put(apiConfig.infoRegionUrl+`${id}/valider/`,{
      "valide":1,
      "vu":1,
    }).then(res=>{
      this.componentDidMount();
      this.updateRegion(region,suspect,confirme,critique,mort,guerie,date,degre);
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
                title="Cas des coronavirus par region"
                category="Les mises a jour de l'agent de santé non encore valider"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>

                      <tr>
                        <th>Agent S</th>
                        <th>Date</th>
                       
                        <th>Region</th>
                        <th>Cas Suspects</th>
                        <th>cas confirmés</th>
                        <th>cas critiques</th>
                        <th>Guérisons</th>
                        <th>Nombre de décès</th>
                        <th>Action</th>
                      </tr>
            
                    </thead>
                    <tbody>
                      
                      {this.state.casSignaler.reverse().map(casSignaler => {
                         if (casSignaler.vu==0){
                        return (
                          <tr >
                             <td>
                             {this.state.user.map(user => {
                                if (user.id==casSignaler.agent){
                                    return ( user.username)}
                                  })    
                                }</td>
                             <td>{casSignaler.date}</td>

                             <td>  
                                {this.state.region.map(region => {
                                if (region.id==casSignaler.region){
                                    return ( region.nom)}
                                  })    
                                }
                             </td> 
                            <td>{casSignaler.suspect}</td>
                            <td>{casSignaler.confirme}</td>
                            <td>{casSignaler.critique}</td>
                            <td>{casSignaler.guerie}</td>
                            <td>{casSignaler.mort}</td>
                            <td>
                              <IconButton 
                                onClick={() => this.valideClick(casSignaler.id,casSignaler.region,
                                  casSignaler.suspect,
                                  casSignaler.confirme,
                                  casSignaler.critique,
                                  casSignaler.mort,
                                  casSignaler.guerie,
                                  casSignaler.date,
                                  casSignaler.degre)
                                 }
                                    
                                style={{ background:'#e6e6e6', color: '#00b300' }}
                                aria-label="valide">
                                <CheckCircleIcon fontSize="large" />
                              </IconButton>
                               <IconButton 
                                onClick={() => this.deleteClick(casSignaler.id)}
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

export default EvolutionCasModerateur;

             
