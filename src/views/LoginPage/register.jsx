import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Header from "components/landinglogin/Header/Header.js";
import HeaderLinks from "components/landinglogin/Header/HeaderLinks.js";
import Card from "components/landinglogin/Card/Card.js";
import CardBody from "components/landinglogin/Card/CardBody.js";
import CardHeader from "components/landinglogin/Card/CardHeader.js";
import CardFooter from "components/landinglogin/Card/CardFooter.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import Button from "components/landinglogin/CustomButtons/Button.js";
import GridContainer from "components/landinglogin/Grid/GridContainer.js";
import GridItem from "components/landinglogin/Grid/GridItem.js";
import image from "assets/img/bg7.jpg";
import axiosInstance from '../../services/axiosApi.jsx'
import Footer from "components/landinglogin/Footer/Footer.js";

const useStyles = makeStyles(styles);
export default class Register extends Component {
 
    state={
      user : {}
    };
 
  
  change(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  navigateDependingOnRole(e){
    if(this.user['role']=='moderator'){
      this.props.history.push('/moderateur/dashboard')
    }else{
      if(this.user['role']=='editor'){
        this.props.history.push('/redacteur/Redaction')  
      }else{
        this.props.history.push('/agentsante/dashboard')  

      }  
    }
  }
  submit(e){
    e.preventDefault();
    axiosInstance.post('user/create/', {
      username: this.state.username,
      password:this.state.password,
      role: this.state.role
      
    }
    ).then(res => (
   
    console.log(res)
    
    )
    ).catch((error) => {
      console.log(error);
    });
  }
render() {
        return (
          <div>
              <Header
                absolute
                color="transparent"
                brand="CORONA WATCH project"
                rightLinks={<HeaderLinks />}
              />
              <div
                style={{
                  backgroundImage: "url(" + image + ")",
                  backgroundSize: "cover",
                  backgroundPosition: "top center"
                }}
              >
              <br/><br/><br/>

          <div>
          <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card>

                    <CardHeader color="danger" align="center">
                       <h3>Connexion</h3>
                    </CardHeader>
                  <form onSubmit={e=>this.submit(e)}>
                    <CardBody>
                      <div className="form-group">
                          <label>Nom d'utilisateur</label>
                          <input type="text" className="form-control" placeholder="Nom d'utilisateur" name='username' onChange={e =>this.change(e)} value={this.state.username}/>
                      </div>

                      <div className="form-group">
                          <label>Mot de passe</label>
                          <input type="password" className="form-control" placeholder="Mot de passe" name='password' onChange={e =>this.change(e)} value={this.state.password} />
                      </div>
                      <div className="form-group">
                          <label>role</label>
                          <p>moderator editor health agent</p>
                          <input type="text" className="form-control" placeholder="role" name='role' onChange={e =>this.change(e)} value={this.state.role} />
                      </div>
                    </CardBody>
                    <CardFooter align="center">
                      <Button type="submit" simple color="danger" size="lg">Connexion</Button>  
                    </CardFooter> 
                  </form>
                </Card> 

              </GridItem>
          </GridContainer>
            </div>
            <Footer class="fixed-bottom" whiteFont /> 
            </div>
            </div>
        );
    }
}