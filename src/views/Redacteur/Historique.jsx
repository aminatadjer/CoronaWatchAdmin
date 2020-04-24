
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import Editor from "components/Editor/Editor";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import BorderColor from '@material-ui/icons/BorderColor';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import {
    
    
    FormGroup,
    ControlLabel,
    FormControl
  } from "react-bootstrap";
class TableList extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Les Articles Valider"
               
                ctTableFullWidth
                ctTableResponsive
                content={
                    <form>
                    <form>
                    <Row>
                    <Col md={12}>
                      
                        <ControlLabel>Article 01</ControlLabel>
                       <h3 align ="center"style={{ color: 'red' }}>عن مرض كوفيد-19</h3>
                        <p align ="right">
                        في ضوء الانتشار المستمر للفيروس التاجي، عززت الأمم المتحدة تدابيرها لحماية الموظفين وجميع أولئك الذين يستخدمون مكاتبها في جميع أنحاء العالم، في الوقت الذي تضمن فيه استمرارية عمل المنظمة الحاسم المنظمة في تنفيذ مهامها الرئيسية، وتقديم الدعم المنقذ للحياة للمحتاجين.

وفي رسالة عبر البريد إلكتروني إلى جميع موظفي الأمم المتحدة في بداية عطلة نهاية الأسبوع، قال الأمين العام بشكل قاطع، إن المنظمة "لا تزال مفتوحة"، ولكن "عملنا سيُنفذ من مواقع مختلفة، باستخدام تقنيات مختلفة".
                     
</p>                    
<iframe width="350" height="200" src="https://www.youtube.com/embed/j6SU-5L3VQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
                       
                      
                    </Col>
                  </Row>
                  </form>
                  
                  <Row>
                    <Col md={12}>
                      
                        <ControlLabel>Article 02</ControlLabel>
                        <h3 align ="center" style={{ color: 'red' }}>الوقاية من كوفيد-19 في أماكن العمل</h3>
                        <p align ="right">
                        في ضوء الانتشار المستمر للفيروس التاجي، عززت الأمم المتحدة تدابيرها لحماية الموظفين وجميع أولئك الذين يستخدمون مكاتبها في جميع أنحاء العالم، في الوقت الذي تضمن فيه استمرارية عمل المنظمة الحاسم المنظمة في تنفيذ مهامها الرئيسية، وتقديم الدعم المنقذ للحياة للمحتاجين.

وفي رسالة عبر البريد إلكتروني إلى جميع موظفي الأمم المتحدة في بداية عطلة نهاية الأسبوع، قال الأمين العام بشكل قاطع، إن المنظمة "لا تزال مفتوحة"، ولكن "عملنا سيُنفذ من مواقع مختلفة، باستخدام تقنيات مختلفة".
</p>                        
<img src="https://www.santepubliquefrance.fr/var/site/storage/images/1/5/0/4/2504051-1-fre-FR/visuel_covid19.jpg" alt="Smiley face"  width="300" height="200" />
     
                    </Col>
                  </Row>
                  
            
                   </form>
                   
                  
                }
              />
            </Col>
            <Col md={12}>
              <Card
                title="Les Articles à modifier"
              
                ctTableFullWidth
                ctTableResponsive
                content={
                    <form>
                    <Row>
                    <Col md={12}>
                      
                        <ControlLabel>Article 01</ControlLabel>
                       <h3 align ="center" style={{ color: 'red', right:'5px' }}>فيروس كورونا</h3>
                        <p align ="right" >
                            
                        أكد وزير الشؤون الدينية والأوقاف في الجزائر، يوسف بلمهدي، اليوم الثلاثاء، أن لجنة الفتوى قررت تعليق صلاة الجمعة والجماعة، وغلق المساجد في جميع أنحاء البلاد للحد من انتشار فيروس كورونا.

وسجّلت الجزائر إصابات جديدة بفيروس كورونا، ليصل إجمالي عدد المصابين في البلاد إلى 60 حالة، بينها أربع وفيات، بحسب وكالة الأنباء الرسمية.

وقد أعلنت السلطات الجزائرية وقف حركة النقل الجوي والبحري مع أوروبا ابتداء من 19 مارس/آذار الجاري.

وفي الكويت، أعلنت السلطات اليوم الثلاثاء تسجيل سبع إصابات جديدة بالفيروس، ليرتفع عدد المصابين المسجلين في البلاد إلى 130 حالة.

وأعلن وزير الصحة الكويتي عبد الله السند، في مؤتمر صحفي صباح اليوم أن الحالات الجديدة المسجلة مرتبطة بالسفر إلى بريطانيا، وجميعها لمواطنين كويتيين 

</p>                        
                        <img src="https://images.livemint.com/img/2020/01/28/600x338/2020-01-28T063735Z_1_LYNXMPEG0R0E0_RTROPTP_3_CHINA-HEALTH_1580199850816_1580199867161.JPG" alt="Smiley face"  width="400" height="200" />
                        <br/>
                        <Button
          style={{ background:'#ff9900', color: 'black' ,position:'relative', left:'1000px', top:'2px',width:'180PX',fontSize:'15px'}}
        variant="contained"
        color="Green"
       
        startIcon={<BorderColor />}
      >
    <strong>    Modifier</strong>
      </Button>
                    </Col>
                  
                  </Row>
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

export default TableList;
