import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/landinglogin/Grid/GridContainer.js";
import GridItem from "components/landinglogin/Grid/GridItem.js";
import Card from "components/landinglogin/Card/Card.js";
import CardBody from "components/landinglogin/Card/CardBody.js";


import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import logo from "assets/img/logo.png";


const useStyles = makeStyles(styles);

export default function LobeliasSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Qui sommes nous?</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem md={12} className={classes.itemGrid}>
                <img src={logo} alt="logo" />
              </GridItem>
              
            
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <Card plain>
             
              <h4 className={classes.cardTitle}>
                LOBELIAS
                <br />
                <small className={classes.smallTitle}>Boite de developpement</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Lobelias est une société spécialisée dans le développement de solutions 
                informatiques, couvrant plusieurs secteurs et technologies. Nous avons 
                acquis une importante expérience dans la compréhension des besoins clients,
                 notamment ceux en relation avec le <i>Healthcare</i>, l’identification des 
                 solutions et outils adéquats pour au final proposer des solutions
                  appropriées qui respectent les exigences et standards en matière 
                  de performance, stabilité et sécurité.    
                </p>
              </CardBody>
            
            </Card>
          </GridItem>
         
             
         
        </GridContainer>
      </div>
    </div>
  );
}
