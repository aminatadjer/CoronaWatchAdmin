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
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";

import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  
} from "variables/Variables.jsx";

class DashboardModerateur extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={4}>
              <StatsCard
                bigIcon={<i className="pe-7s-news-paper text-info" />}
                statsText="Article a traité"
                statsValue="10"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Mise a jour maintenant"
              />
            </Col>
            <Col md={4}>
              <StatsCard
                bigIcon={<i className="pe-7s-note2 text-danger" />}
                statsText="Cas Signaler a traité"
                statsValue="4"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Mise a jour hier"
              />
            </Col>
            <Col md={4}>
              <StatsCard
                bigIcon={<i className="pe-7s-map-marker text-danger" />}
                statsText="Zones a risque a traité"
                statsValue="3"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="Mise a jour il y a une heure"
              />
            </Col>
            
          </Row>
          <Row>
            
           
          
          <Col md={4}>
              <StatsCard
                bigIcon={<i className="pe-7s-video text-warning" />}
                statsText="Vidéos a traité"
                statsValue="7"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Mise a jour maintenant"
              />
            </Col>
            <Col md={4}>
              <StatsCard
                bigIcon={<i className="pe-7s-look text-info" />}
                statsText="Nouvelle Veille a traité"
                statsValue="+1000"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Mise a jour maintenant"
              />
            </Col>
            <Col md={4}>
              <StatsCard
                bigIcon={<i className="pe-7s-comment text-success" />}
                statsText="Commentaires"
                statsValue="74"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Mise a jour maintenant"
              />
            </Col>
            </Row>
            <Row>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Evolution des cas en Algerie"
                category="24 Hours performance"
                stats="Mise a jour il y a 3 minutes"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Distribution des Cas en Algerie"
                category=""
                stats="Mise a jour il y a 20h"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
          </Row>
          
        </Grid>
      </div>
    );
  }
}

export default DashboardModerateur;
