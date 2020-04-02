
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import Editor from "components/Editor/Editor";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddCircle from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
class Redaction extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Rédiger Vos Articles"
          
                ctTableFullWidth
                ctTableResponsive
                content={
                  <form>
                 <Editor/>
                 <Button
          style={{ background:'#87CB16', color: 'black' ,position:'relative', left:'400px', top:'6px',width:'250PX',fontSize:'15px'}}
        variant="contained"
        color="Green"
       
        startIcon={<AddCircle />}
      >
    <strong>    Ajouter</strong>
      </Button>
                
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

export default Redaction;
