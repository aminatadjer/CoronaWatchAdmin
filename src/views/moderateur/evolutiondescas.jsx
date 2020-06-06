
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import  axios from "axios";

class EvolutionCasModerateur extends Component {
  state ={
    casSignaler:[],
    region:[],
 
  };

  componentDidMount(){

    axios.get(' http://localhost:8000/api/InfoRegion/'
    ).then(res =>{
        console.log(res);
 
        this.setState({casSignaler:res.data});
      }
  
      );
      axios.get(' http://localhost:8000/api/region/'
      ).then(res =>{
          console.log(res);
     
          this.setState({region:res.data});
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
                title="Cas des coronavirus par region"
                category="Les mises a jour de l'agent de santé non encore valider"
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
                        <th>Action</th>
                      </tr>
            
                    </thead>
                    <tbody>
                      
                      {this.state.casSignaler.reverse().map(casSignaler => {
                        return (
                          <tr >
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
                                style={{ background:'#e6e6e6', color: '#00b300' }}
                                aria-label="delete">
                                <CheckCircleIcon fontSize="large" />
                              </IconButton>
                               <IconButton 
                                style={{ background:'#e6e6e6', color: '#ff0000' }}
                                aria-label="delete">
                                <CancelIcon fontSize="large" />
                              </IconButton>
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
        </Grid>
      </div>
    );
  }
}

export default EvolutionCasModerateur;

             
