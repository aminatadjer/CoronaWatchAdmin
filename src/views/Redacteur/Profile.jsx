
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
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import BorderColor from '@material-ui/icons/BorderColor';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

import avatar from "assets/img/faces/face-3.jpg";

class Profile extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Lydia Benaida"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5"]}
                      properties={[
                       
                        {
                          label: "Nom d'utilisateur",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Lydia Benaida",
                          defaultValue: "Lydia Benaida"
                        }
                      
                      ]}
                    />
                        <FormInputs
                      ncols={["col-md-5"]}
                      properties={[
                       
                        {
                            label: "Adresse mail",
                            type: "email",
                            bsClass: "form-control",
                            placeholder: "gl_benaida@esi.dz",
                            defaultValue: "gl_benaida@esi.dz"
                          }
                      ]}
                    />
                        <FormInputs
                      ncols={["col-md-5"]}
                      properties={[
                        {
                            label: "Nom",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Nom",
                            defaultValue: "Benaida"
                          }
                       
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6"]}
                      properties={[
                        {
                            label: "Prenom",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Prenom",
                            defaultValue: "Lydia"
                          }
                      ]}
                    />
                   
                   

                   
                   <Button
          style={{ background:'#ff9900', color: 'black' ,position:'relative', left:'0px', top:'2px',width:'180PX',fontSize:'15px'}}
        variant="contained"
        color="Green"
       
        startIcon={<BorderColor />}
      >
    <strong>    Modifier</strong>
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

export default Profile;
