import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import PermDeviceInformationIcon from '@material-ui/icons/PermDeviceInformation';


import Fingerprint from "@material-ui/icons/Fingerprint";
import LocationOffIcon from '@material-ui/icons/LocationOff';


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>A Propos du projet CORONA WATCH</h2>
          <h5 className={classes.description}>
           CORONA WATCH est un système visant le suivi de l’épidémie mondiale « Corona Virus ». 
           Dans le cadre de l’alerte mondiale lancée par l’OMS en Janvier 2020,
            et par souci de transparence et d’acheminement d’information,   
         le ministère de la santé a créé une cellule de crise pour la gestion de l’épidémie.CCC ou Cellule de Crise Corona virus a lancer ce projet dans le but de...
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Toute l'actualité sur le coronavirus dans un seul endroit!"
              description="Notre système recueille toute l’information disponible en ligne au sujet du nouveaux coronavirus covid-19, ces informations seront par la suite trier par nos expert afin de mettre à votre disposition les plus pertinant et véridique au sujet 
              "
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Soyer alerter lorsque vous entrer dans une zone a risque"
              description="Notre systeme utilise votre géolocalisation afin de vous alerter lorsque vous approcher une zone considérer risqué et ceci a l'echelle national"
              icon={LocationOffIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Signaler tous cas suspect"
              description="Grace a notre application mobile, vous pouvez signaler tous cas suspect en un seul click avec une photo ou une vidéo du concerné"
              icon={PermDeviceInformationIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
