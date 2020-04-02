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

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';



class TableList extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
               
                
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped >
                    
                    <tbody>
                    <tr>
    <th> Rédacteur: Lydia Benaida</th>
    
  </tr>
  <tr>
    <th>Article: 01</th>
    
  </tr>
  <tr>
   
    <td> 
    <h3 align ="center" style={{ color: 'red' }}>فيروس كورونا</h3>
      <p align ="right">
                            
                            أكد وزير الشؤون الدينية والأوقاف في الجزائر، يوسف بلمهدي، اليوم الثلاثاء، أن لجنة الفتوى قررت تعليق صلاة الجمعة والجماعة، وغلق المساجد في جميع أنحاء البلاد للحد من انتشار فيروس كورونا.
    
    وسجّلت الجزائر إصابات جديدة بفيروس كورونا، ليصل إجمالي عدد المصابين في البلاد إلى 60 حالة، بينها أربع وفيات، بحسب وكالة الأنباء الرسمية.
    
    وقد أعلنت السلطات الجزائرية وقف حركة النقل الجوي والبحري مع أوروبا ابتداء من 19 مارس/آذار الجاري.
    
    وفي الكويت، أعلنت السلطات اليوم الثلاثاء تسجيل سبع إصابات جديدة بالفيروس، ليرتفع عدد المصابين المسجلين في البلاد إلى 130 حالة.
    
    وأعلن وزير الصحة الكويتي عبد الله السند، في مؤتمر صحفي صباح اليوم أن الحالات الجديدة المسجلة مرتبطة بالسفر إلى بريطانيا، وجميعها لمواطنين كويتيين 
    
    </p>                        
                            <img src="https://images.livemint.com/img/2020/01/28/600x338/2020-01-28T063735Z_1_LYNXMPEG0R0E0_RTROPTP_3_CHINA-HEALTH_1580199850816_1580199867161.JPG" alt="Smiley face"  width="400" height="200" /></td>
  </tr>
  <tr>
    <th>
    
              
    <Button
        variant="contained"
        color="secondary"
        style={{ background:'#FF4A55', color: 'black' ,position:'relative', left:'500px', top:'2px',width:'200PX',fontSize:'15px'}}
        startIcon={<DeleteIcon />}
      >
       <strong>  Supprimer</strong>
      </Button>
      <Button
          style={{ background:'#87CB16', color: 'black' ,position:'relative', left:'80px', top:'2px',width:'200PX',fontSize:'15px'}}
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

export default TableList;
