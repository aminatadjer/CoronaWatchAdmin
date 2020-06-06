
import React, { Component } from "react";
import { Grid, Row, Col, Alert } from "react-bootstrap";


class AgentSanteNotifications extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <div className="card">
            <div className="header">
              <h4 className="title">Vos Notifications</h4>
              
            </div>
            <div className="content">
              <Row>
                <Col md={6}>
                  <h5>Mise a jour accepter par le modérateur</h5>
                  <Alert bsStyle="success">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Success - </b> Le modérateur a validé la mise a jour des cas num 14
                    </span>
                  </Alert>
                 
                  <Alert bsStyle="success">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Success - </b> Le modérateur a validé la mise a jour des regions a risque num 05
                    </span>
                  </Alert>
                  <Alert bsStyle="success">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Success - </b> Le modérateur a validé la mise a jour des cas num 12
                    </span>
                  </Alert>
                  <Alert bsStyle="success">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Success - </b> Le modérateur a validé la mise a jour des cas num 09
                    </span>
                  </Alert>
                  <Alert bsStyle="success">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Success - </b> Le modérateur a validé la mise a jour des regions à risques num 03
                    </span>
                  </Alert>
                  <Alert bsStyle="success">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Success - </b> Le modérateur a validé la mise a jour des regions à risques num 03
                    </span>
                  </Alert>
                 
                </Col>
                <Col md={6}>
                  <h5>Mise a jour supprimer par le modérateur</h5>
                 
                  
                  <Alert bsStyle="warning">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Warning - </b>Le modérateur a supprimer la mise a jour des cas num 02
                    </span>
                  </Alert>
                  <Alert bsStyle="warning">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Warning - </b> Le modérateur a supprimer la mise a jour des cas num 00
                    </span>
                  </Alert>
                  <Alert bsStyle="warning">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Warning - </b> Le modérateur a supprimer la mise a jour des cas num 06
                    </span>
                  </Alert>
                  <Alert bsStyle="warning">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Warning - </b> Le modérateur a supprimer la mise a jour des regions à risque num 03
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

export default AgentSanteNotifications;
