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
 
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";

import Button from "components/CustomButton/CustomButton.jsx";



class Compte extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Modifier votre compte"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-3", "col-md-3", "col-md-3", "col-md-3"]}
                      properties={[
                        {
                          label: "Statut",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Statut",
                          defaultValue: "Agent de Santé",
                          disabled: true
                        },
                        {
                          label: "Division",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Division",
                          defaultValue: "CCC 03-Alger centre",
                          disabled: true
                        },
                        {
                          label: "Adresse Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Adresse Email"
                          
                        },
                        {
                          label: "Nom d'utilisateur",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Nom d'utilisateur"
                          
                        },
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "Prenom",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Prenom",
                          defaultValue: "Mike"
                        },
                        {
                          label: "Nom",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Nom",
                          defaultValue: "Andrew"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-8", "col-md-4"]}
                      properties={[
                        {
                          label: "Adresse",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Adresse",
                          defaultValue:
                            "Ouad-Smar, Alger, Algerie"
                        },
                        {
                          label: "Numéro de téléphone",
                          type: "phone",
                          bsClass: "form-control",
                          placeholder: "Numéro de téléphone",
                          defaultValue:
                            "0553178364"
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
            <Col md={4}>
            <Card
                title="Modifier votre Mot de passe" 
                content={
                  <form>
                    <FormInputs
                    ncols={["col-md-12"]}
                     properties={[
                      {
                        label: "Mot de passe actuel",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Mot de passe actuel",
                        
                      }
                    ]}
                    
                    />
                    <FormInputs
                    ncols={["col-md-12"]}
                     properties={[
                      {
                        label: "Nouveau Mot de passe",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Nouveau Mot de passe",
                        
                      }
                    ]}
                    
                    />
                    <FormInputs
                    ncols={["col-md-12"]}
                     properties={[
                      {
                        label: "Confirmation Nouveau Mot de passe",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Nouveau Mot de passe",
                        
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
        </Grid>
      </div>
    );
  }
}

export default Compte;
