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
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";


import avatar from "assets/img/faces/preview.jpg";

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
class Videos extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Vidéo d'utilisateur"
                content={
                  <form>
                    <iframe width="635" height="402" src="https://www.youtube.com/embed/dMB1zymanTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  
                    <Button
        variant="contained"
        color="secondary"
        style={{ background:'#FF4A55', color: 'black' ,position:'relative', left:'455px', top:'2px',width:'180PX',fontSize:'15px'}}
        startIcon={<DeleteIcon />}
      >
       <strong>  Supprimer</strong>
      </Button>
      <Button
          style={{ background:'#87CB16', color: 'black' ,position:'relative', left:'70px', top:'2px',width:'180PX',fontSize:'15px'}}
        variant="contained"
        color="Green"
       
        startIcon={<CheckCircleIcon />}
      >
    <strong>    Valider</strong>
      </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://lh3.googleusercontent.com/proxy/XBVMcaml41-5aUnrHBrsv3QNFZf_YS1iO4TAg5yVwIrLqpW0XF7B60P1hsWuopKfoFCvajqcQfMYiU-tOapK7BbV1IOGB9eOPSpZFi5600_0cWbhVXNqWY6KZ6yP-KTdlPRhS2J7VsbXFgbWLASfcA9jmLBt_nq5TP-bg98sOfgXq6uPig"
                avatar={avatar}
                name="Videos des utilisateurs"
            
                description={
                    <form>
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/dMB1zymanTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/BcMEEP6loRw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/9aHlFkatMIk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </form>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Videos;
