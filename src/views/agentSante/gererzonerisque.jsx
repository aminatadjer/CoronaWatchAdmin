
import React, { Component } from "react";

import {
  Grid,
  Row,
  Col,
  Table
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { thArrayRegion, tdArrayRegion, tdArrayRegionv } from "variables/Variables.jsx";





class Gererzonesrisque extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
         
          <Row>
              <Col md={6}>
                  <Card
                      title="Regions a risque"
                      category="-Mise a jour et valider par le modérateur-"
                      ctTableFullWidth
                    ctTableResponsive
                    content={
                      <Table striped hover>
                        <thead>
                          <tr>
                            {thArrayRegion.map((prop, key) => {
                              return <th key={key}>{prop}</th>;
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          {tdArrayRegion.map((prop, key) => {
                            return (
                              <tr key={key}>
                                {prop.map((prop, key) => {
                                  return <td key={key}>{prop}</td>;
                                })}
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                      }
                  />
              </Col>
              <Col md={6}>
              <Card
              
                title="Regions a risque "
                category="-Mise a jour non valider par le modérateur-"
                ctTableFullWidth
                ctTableResponsive
                content={
                  
                  <Table bordered hover>
                    <thead>
                      <tr>
                        {thArrayRegion.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArrayRegionv.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
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

export default Gererzonesrisque;
