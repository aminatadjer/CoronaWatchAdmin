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

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
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
                      <th>
                       id
                      </th>
                      <th align ="center">
                       Commentaire
                      </th>
                     <th>Supprimer</th>
                      </thead>
                      <tbody>
                      <tr>
                          <td>1</td>
                          <td>CORONAVIRUS - Dans le monde, le coronavirus a contaminé plus de 212 000 personnes dans 157 pays et fait plus de 8700 morts. Dernier bilan en France, régions les plus touchées, confinement et déplacements autorisés sur attestation, délivrance et restriction de médicament, carte des cas, conseils pour se protéger... Le point en direct.</td>
                          <td> <IconButton 
                              style={{ background:'#e6e6e6', color: '#ff0000' }}
                          aria-label="delete">
          <DeleteIcon fontSize="large" />
        </IconButton></td>
                          
                      </tr>
                      <tr>
                      <td>2</td>
                      <td>CORONAVIRUS - Dans le monde, le coronavirus a contaminé plus de 212 000 personnes dans 157 pays et fait plus de 8700 morts. Dernier bilan en France, régions les plus touchées, confinement et déplacements autorisés sur attestation, délivrance et restriction de médicament, carte des cas, conseils pour se protéger... Le point en direct.</td>
                      <td><IconButton 
                              style={{ background:'#e6e6e6', color: '#ff0000' }}
                          aria-label="delete">
          <DeleteIcon fontSize="large" />
        </IconButton></td>
                      
                      </tr>
                      <tr>
                      <td>3</td>
                      <td>CORONAVIRUS - Dans le monde, le coronavirus a contaminé plus de 212 000 personnes dans 157 pays et fait plus de 8700 morts. Dernier bilan en France, régions les plus touchées, confinement et déplacements autorisés sur attestation, délivrance et restriction de médicament, carte des cas, conseils pour se protéger... Le point en direct.</td>
                      <td><IconButton 
                              style={{ background:'#e6e6e6', color: '#ff0000' }}
                          aria-label="delete">
          <DeleteIcon fontSize="large" />
        </IconButton></td>
                     
                      </tr>
                      <tr>
                      <td>4</td>
                      <td>CORONAVIRUS - Dans le monde, le coronavirus a contaminé plus de 212 000 personnes dans 157 pays et fait plus de 8700 morts. Dernier bilan en France, régions les plus touchées, confinement et déplacements autorisés sur attestation, délivrance et restriction de médicament, carte des cas, conseils pour se protéger... Le point en direct.</td>
                      <td><IconButton 
                              style={{ background:'#e6e6e6', color: '#ff0000' }}
                          aria-label="delete">
          <DeleteIcon fontSize="large" />
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
