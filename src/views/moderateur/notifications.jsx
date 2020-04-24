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
import { Grid, Row, Col, Alert } from "react-bootstrap";

import Button from "components/CustomButton/CustomButton.jsx";

class ModerateurNotifications extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <div className="card">
            <div className="header">
              <h4 className="title">Vos Notifications</h4>
              <h5>Classé selon leur source</h5>
              
            </div>
            <div className="content">
              <Row>
                <Col md={3}>
                  <h5>Articles Rédacteur</h5>
                  <Alert >
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                       Le rédacteur 03 a ajouter son article num 02
                    </span>
                  </Alert>
                 
                  <Alert >
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                    Le rédacteur 03 a modifier son article num 02
                    </span>
                  </Alert>
                  <Alert >
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                    Le rédacteur 02 a ajouter son article num 04
                    </span>
                  </Alert>
                  <Alert >
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                    Le rédacteur 03 a supprimer son article num 01
                    </span>
                  </Alert>
                 
                 
                </Col>
                <Col md={3}>
                  <h5>Agent de santé</h5>
                 
                  
                  <Alert bsStyle="danger">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      Mise a jour des zones a risque num 04
                    </span>
                  </Alert>
                  <Alert bsStyle="danger">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                    Mise a jour des cas num 05
                    </span>
                  </Alert>
                  <Alert bsStyle="danger">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                    Mise a jour des zones a risque num 02
                    </span>
                  </Alert>
                  <Alert bsStyle="danger">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                    Mise a jour des cas a risque num 04
                    </span>
                  </Alert>
                 
                  
                  
                </Col>
                <Col md={3}>
                  <h5>Vidéo utilisateur</h5>
                  <Alert bsStyle="success">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      L'utilisateur lydia a ajouter une vidéo
                    </span>
                  </Alert>
                 
                  <Alert bsStyle="success">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                    L'utilisateur amina a ajouter une vidéo
                    </span>
                  </Alert>
                  <Alert bsStyle="success">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                    L'utilisateur lilia a ajouter une vidéo
                    </span>
                  </Alert>
                  <Alert bsStyle="success">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                    L'utilisateur lydia a ajouter une vidéo
                    </span>
                  </Alert>
                  <Alert bsStyle="success">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                    L'utilisateur amina a ajouter une vidéo
                    </span>
                  </Alert>
                  <Alert bsStyle="success">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                       Le modérateur a validé la mise a jour des regions à risques num 03
                    </span>
                  </Alert>
                 
                </Col>
                <Col md={3}>
                  <h5>Veille</h5>
                 
                  
                  <Alert bsStyle="warning">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      Nouvelle publication Facebook 
                    </span>
                  </Alert>
                  <Alert bsStyle="warning">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      Nouvelle vidéo youtube
                    </span>
                  </Alert>
                  <Alert bsStyle="warning">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      4 Nouveaux article sur le web
                    </span>
                  </Alert>
                  <Alert bsStyle="warning">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      Nouvelle publication Facebook 
                    </span>
                  </Alert>
                 
                  
                  
                </Col>
              </Row>
              <br />
              <br />
              <div className="places-buttons">
                
               
                      
               
              </div>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default ModerateurNotifications;
