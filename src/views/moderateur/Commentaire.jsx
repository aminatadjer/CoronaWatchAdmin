
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';

class Commentaire extends Component {
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
                          <tr>
                              <td>1</td>
                              <td>CORONAVIRUS - Dans le monde, le coronavirus a contaminé plus de 212 000 personnes dans 157 pays et fait plus de 8700 morts. Dernier bilan en France, régions les plus touchées, confinement et déplacements autorisés sur attestation, délivrance et restriction de médicament, carte des cas, conseils pour se protéger... Le point en direct.</td>
                              <td> <IconButton 
                                    style={{ background:'#e6e6e6', color: '#ff0000' }}
                                    aria-label="delete">
                                    <CancelIcon fontSize="large" />
                                  </IconButton>
                              </td>                    
                          </tr>

                          <tr>
                              <td>2</td>
                              <td>CORONAVIRUS - Dans le monde, le coronavirus a contaminé plus de 212 000 personnes dans 157 pays et fait plus de 8700 morts. Dernier bilan en France, régions les plus touchées, confinement et déplacements autorisés sur attestation, délivrance et restriction de médicament, carte des cas, conseils pour se protéger... Le point en direct.</td>
                              <td><IconButton 
                                      style={{ background:'#e6e6e6', color: '#ff0000' }}
                                      aria-label="delete">
                                      <CancelIcon fontSize="large" />
                                  </IconButton>
                                </td>
                              
                           </tr>

                            <tr>
                              <td>3</td>
                              <td>CORONAVIRUS - Dans le monde, le coronavirus a contaminé plus de 212 000 personnes dans 157 pays et fait plus de 8700 morts. Dernier bilan en France, régions les plus touchées, confinement et déplacements autorisés sur attestation, délivrance et restriction de médicament, carte des cas, conseils pour se protéger... Le point en direct.</td>
                              <td><IconButton 
                                      style={{ background:'#e6e6e6', color: '#ff0000' }}
                                      aria-label="delete">
                                      <CancelIcon fontSize="large" />
                                  </IconButton>
                              </td>
                                        
                            </tr>
                            <tr>
                            
                              <td>4</td>
                              <td>CORONAVIRUS - Dans le monde, le coronavirus a contaminé plus de 212 000 personnes dans 157 pays et fait plus de 8700 morts. Dernier bilan en France, régions les plus touchées, confinement et déplacements autorisés sur attestation, délivrance et restriction de médicament, carte des cas, conseils pour se protéger... Le point en direct.</td>
                              <td><IconButton 
                                      style={{ background:'#e6e6e6', color: '#ff0000' }}
                                      aria-label="delete">
                                      <CancelIcon fontSize="large" />
                                  </IconButton></td>
                            
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
  }
}

export default Commentaire;
