
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Card from "components/Card/Card.jsx";
import {  tdArrayVeilleFacebook,tdArrayVeilleWeb,tdArrayVeilleYoutube } from "variables/Variables.jsx";

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

export default VeilleModerateur;
