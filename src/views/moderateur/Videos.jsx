
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col

} from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import avatar from "assets/img/faces/preview.jpg";
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


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
                          startIcon={<CancelIcon />} >
                          <strong>  Supprimer</strong>
                       </Button>
                       
                       <Button
                          style={{ background:'#87CB16', color: 'black' ,position:'relative', left:'70px', top:'2px',width:'180PX',fontSize:'15px'}}
                          variant="contained"
                          color="Green"
                          startIcon={<CheckCircleIcon />} >  
                          <strong> Valider</strong>
                      </Button>
                                   
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
