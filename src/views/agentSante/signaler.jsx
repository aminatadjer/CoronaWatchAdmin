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
import {
  Grid,
  Row,
  Col,
  Table
} from "react-bootstrap";
import {selectoptions} from "variables/Variables.jsx"
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { thArray, tdArray,thArraysv, tdArraysv } from "variables/Variables.jsx";

import Button from "components/CustomButton/CustomButton.jsx";
import Select from 'react-select';



class SignalerCas extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Signaler un nouveau cas"
                content={
                  <form>
                       
                    
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "Cas confirmés ",
                          type: "number",
                          bsClass: "form-control",
                          
                          defaultValue: "43"
                        },
                        {
                          label: "Guérisons",
                          type: "number",
                          bsClass: "form-control",
                          
                          defaultValue: "50"
                        },
                        {
                          label: "Nombre de décès",
                          type: "number",
                          bsClass: "form-control",
                          defaultValue: "6"
                        }
                      ]}
                    />
                    <h4>Signaler par region</h4>
                    <Select options={selectoptions} placeholder="Selectionner une Region">Region</Select>
                     <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                       
                        {
                          label: "Cas confirmés ",
                          type: "number",
                          bsClass: "form-control",
                          
                          defaultValue: "43"
                        },
                        {
                          label: "Guérisons",
                          type: "number",
                          bsClass: "form-control",
                          
                          defaultValue: "50"
                        },
                        {
                          label: "Nombre de décès",
                          type: "number",
                          bsClass: "form-control",
                          defaultValue: "6"
                        }
                      ]}
                    />
                    
                    
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
                title="Cas des coronavirus par region "
                category="-Mise a jour et valider par le modérateur-"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover >
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
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
                title="Cas des coronavirus par region "
                category="-Mise a jour non valider par le modérateur-"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table bordered hover >
                    <thead>
                      <tr>
                        {thArraysv.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArraysv.map((prop, key) => {
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

export default SignalerCas;
