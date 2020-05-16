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
import Select from 'react-select';
import {
  Grid,
  Row,
  Col,
  Table
} from "react-bootstrap";
import {selectoptions} from "variables/Variables.jsx"
import { Card } from "components/Card/Card.jsx";

import Button from "components/CustomButton/CustomButton.jsx";

import { thArrayRegion, tdArrayRegion, tdArrayRegionv } from "variables/Variables.jsx";





class Gererzonesrisque extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Mise a jour des Zones a risques"
                content={
                  <form>
                       
                    
                   
                    <Row>
                        <Col md={6}>
                        <Select options={selectoptions} placeholder="Region">Region</Select>

                        </Col>
                        <Col md={6}>
                        <Select options={selectoptions} placeholder="Degres de risque" >Degres</Select>
                            
                        </Col>
                        </Row> 
                        
                    
                    
                    
                     
                       
                    
                    
                    <Button bsStyle="info" pullRight fill type="submit">
                      Sauvegarder
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            
          </Row>
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
