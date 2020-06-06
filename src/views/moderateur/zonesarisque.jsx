
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Card from "components/Card/Card.jsx";
import { thArrayRegion, tdArrayRegion } from "variables/Variables.jsx";

class ZonesRisqueModerateur extends Component {
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
                          {thArrayRegion.map((prop, key) => {
                            return <th key={key}>{prop}</th>;
                          })}
                          <th>Action</th>
                        </tr>

                      </thead>
                      <tbody>
                        {tdArrayRegion.map((prop, key) => {
                          return (
                            <tr key={key}>
                              {prop.map((prop, key) => {
                                return <td key={key}>{prop}</td>;
                              })}
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

export default ZonesRisqueModerateur;
