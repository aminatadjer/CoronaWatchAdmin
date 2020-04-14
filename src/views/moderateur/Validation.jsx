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
  Table,
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
class Validation extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Cas suspect"
                content={
                  
                     <Table striped >
                    
                    <tbody>
                    <tr>
    <th>Cas: 01</th>
    
  </tr>
                    <tr>
    <th> Utilisateur: Lydia Benaida</th>
    
  </tr>

  <tr>
   
    <td > 
    
    
 
      <p    style={{  Right:' 0px',fontSize:'20px' }} >
      <img style={{  float :'left'  }}   src="https://cdn.cnn.com/cnnnext/dam/assets/200312211815-corona-virus-testing-griffin-pkg-exlarge-169.jpg" alt="Smiley face"  width="400" height="200" />

      مرض كوفيد-19 هو مرض معد يسببه فيروس كورونا المُكتشف مؤخراً. ولم يكن هناك أي علم بوجود هذا الفيروس وهذا المرض المستجدين قبل اندلاع الفاشية في مدينة يوهان الصينية في كانون الأول/ ديسمبر 2019.
    </p>    
   
   
    
  
    </td>                    
  </tr>
  
  <tr>
    <th>
    
              
    <Button
        variant="contained"
        color="secondary"
        style={{ background:'#FF4A55', color: 'black' ,position:'relative', left:'535px', top:'2px',width:'200PX',fontSize:'15px'}}
        startIcon={<DeleteIcon />}
      >
       <strong>  Supprimer</strong>
      </Button>
      <Button
          style={{ background:'#87CB16', color: 'black' ,position:'relative', left:'120px', top:'2px',width:'200PX',fontSize:'15px'}}
        variant="contained"
        color="Green"
       
        startIcon={<CheckCircleIcon />}
      >
    <strong>    Valider</strong>
      </Button>
            
            
    </th>
    
  </tr>
                    </tbody>
                  </Table>
                
                }
              />
               <Card
                title="Cas suspect"
                content={
                  
                     <Table striped >
                    
                    <tbody>
                    <tr>
    <th>Cas: 02</th>
    
  </tr>
                    <tr>
    <th> Utilisateur: Lydia Benaida</th>
    
  </tr>
 
  <tr>
   
    <td> 
      <p align ="right">
                            
      <img style={{  float :'left'  }} src="https://static.arabic.cnn.com/sites/default/files/styles/sw_780/public/2020/02/06/images/001.jpg?itok=i1LbXipw" alt="Smiley face"  width="400" height="200" />
      تشير الدراسات التي أُجريت حتى يومنا هذا إلى أن الفيروس الذي يسبب مرض كوفيد-19 ينتقل في المقام الأول عن طريق ملامسة القُطيرات التنفسية لا عن طريق الهواء. انظر الإجابة عن السؤال السابق: "كيف ينتشر مرض كوفيد-19؟
    </p>                        
                           
                            </td>
  </tr>
  <tr>
    <th>
    
    <Button
        variant="contained"
        color="secondary"
        style={{ background:'#FF4A55', color: 'black' ,position:'relative', left:'535px', top:'2px',width:'200PX',fontSize:'15px'}}
        startIcon={<DeleteIcon />}
      >
       <strong>  Supprimer</strong>
      </Button>
      <Button
          style={{ background:'#87CB16', color: 'black' ,position:'relative', left:'120px', top:'2px',width:'200PX',fontSize:'15px'}}
        variant="contained"
        color="Green"
       
        startIcon={<CheckCircleIcon />}
      >
    <strong>    Valider</strong>
      </Button>
            
            
            
    </th>
    
  </tr>
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

export default Validation;
