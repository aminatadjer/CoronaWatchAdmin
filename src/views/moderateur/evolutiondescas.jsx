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

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


class EvolutionCasModerateur extends Component {
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
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                        <th>Action</th>
                      </tr>
                      
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                            <td><IconButton 
                              style={{ background:'#e6e6e6', color: '#00b300' }}
                          aria-label="delete">
          <CheckCircleIcon fontSize="large" />
        </IconButton> <IconButton 
                              style={{ background:'#e6e6e6', color: '#ff0000' }}
                          aria-label="delete">
          <DeleteIcon fontSize="large" />
        </IconButton></td>
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
