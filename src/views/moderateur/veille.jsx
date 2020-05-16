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

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import Card from "components/Card/Card.jsx";
import { thArrayRegion, tdArrayRegion, tdArrayVeilleFacebook,tdArrayVeilleWeb,tdArrayVeilleYoutube } from "variables/Variables.jsx";

class VeilleModerateur extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          
          <Row>
            <Col md={4}>
            <Card
                  title="Facebook"
                  category=""
                  ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                      
                        <th>Link</th>
                        <th>Action</th>
                      </tr>

                    </thead>
                    <tbody>
                      {tdArrayVeilleFacebook.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}><a href='#'>{prop}</a></td>;
                            })}
                            <td><IconButton 
                              style={{ background:'#e6e6e6', color: '#00b300' }}
                          aria-label="delete">
          <CheckCircleIcon fontSize="large" />
        </IconButton> <IconButton 
                              style={{ background:'#e6e6e6', color: '#ff0000' }}
                          aria-label="delete">
          <DeleteIcon fontSize="large" />
        </IconButton> </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
                  />
            </Col>
            <Col md={4}>
            <Card
                  title="Youtube"
                  category=""
                  ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                       
                        <th>Link</th>
                        <th>Action</th>
                      </tr>

                    </thead>
                    <tbody>
                      {tdArrayVeilleYoutube.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}><a href='#'>{prop}</a></td>;
                            })}
                            <td><IconButton 
                              style={{ background:'#e6e6e6', color: '#00b300' }}
                          aria-label="delete">
          <CheckCircleIcon fontSize="large" />
        </IconButton> <IconButton 
                              style={{ background:'#e6e6e6', color: '#ff0000' }}
                          aria-label="delete">
          <DeleteIcon fontSize="large" />
        </IconButton> </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
                  />
            </Col>
            <Col md={4}>
            <Card
                  title="Web"
                  category=""
                  ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                      
                        <th>Link</th>
                        <th>Action</th>
                      </tr>

                    </thead>
                    <tbody>
                      {tdArrayVeilleWeb.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}><a href='#'>{prop}</a></td>;
                            })}
                            <td><IconButton 
                              style={{ background:'#e6e6e6', color: '#00b300' }}
                          aria-label="delete">
          <CheckCircleIcon fontSize="large" />
        </IconButton> <IconButton 
                              style={{ background:'#e6e6e6', color: '#ff0000' }}
                          aria-label="delete">
          <DeleteIcon fontSize="large" />
        </IconButton> </td>
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

export default VeilleModerateur;
