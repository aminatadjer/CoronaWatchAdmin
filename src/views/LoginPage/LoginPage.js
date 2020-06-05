import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/landinglogin/Header/Header.js";
import HeaderLinks from "components/landinglogin/Header/HeaderLinks.js";
import Footer from "components/landinglogin/Footer/Footer.js";
import GridContainer from "components/landinglogin/Grid/GridContainer.js";
import GridItem from "components/landinglogin/Grid/GridItem.js";
import Button from "components/landinglogin/CustomButtons/Button.js";
import Card from "components/landinglogin/Card/Card.js";
import CardBody from "components/landinglogin/Card/CardBody.js";
import CardHeader from "components/landinglogin/Card/CardHeader.js";
import CardFooter from "components/landinglogin/Card/CardFooter.js";
import CustomInput from "components/landinglogin/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import axiosInstance from '../../services/axiosApi.jsx'
import jwt_decode from 'jwt-decode';

const useStyles = makeStyles(styles);

export default function LoginPagejs(props) {
  var initialcredential={
    username: '',
    password: '',
  }
  const [credential, setCredential] = React.useState(initialcredential);
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCredential({ ...credential, [name]: value });
  };
  const classes = useStyles();
  const { ...rest } = props;

  const handleUsername = event => {
    initialcredential.username = event.target;
  };
  const handlePassword = event => {
    initialcredential.password = event.target;
  };

  

  const login = event => {
    event.preventDefault();
    var data = {
      username: initialcredential.username,
      password: initialcredential.password
    };
    // console.log(credential.username);
    axiosInstance.post('api/token/obtain', 
      data
    ).then(response => {

        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      })
  };
  
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="CORONA WATCH project"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={login}>
                  <CardHeader color="danger" className={classes.cardHeader}>
                    <h4>Connexion</h4>
                  
                  </CardHeader>
                 
                  <CardBody>
                   
                    <CustomInput
                    required
                    value={credential.username}
                    onChange={handleUsername}
                    name="username"
                      labelText="Votre nom d'utilisateur..."
                      id="username"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                    required
                    value={credential.password}
                    onChange={handlePassword}
                    name="password"
                      labelText="Votre Mot de Passe"
                      id="password"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button type="submit" simple color="danger" size="lg" >
                      Connexion
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}