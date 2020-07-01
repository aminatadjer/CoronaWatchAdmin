
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col, Table } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";

import { thArray, tdArray } from "variables/Variables.jsx";

import {apiConfig} from "../ApiConfig.js";
import  axios from "axios";

class AgentSanteDashboard extends Component {
  state ={
    casSignaler:[],
    cas:[],
    dataSales:[],
    articles:[],
    art:[],

    video:[],
    vid:[],

    zone:[],
    zo:[],
   
    comment:[],
    com:[],

    googleVeille:[],
    tweetVeille:[],
    youtubeVeille:[],
    valGoogle:[],
    valTweet:[],
    valYoutube:[],


    region:[],
    mort :[],
    guerie :[],
    confirme :[],
    suspect :[],
    critique :[],
   
    countTotal:0,
    countMort:0,
    countGuerie:0,
    countConfirme:0,
    countSuspect:0,
    countCritique:0,

    count:0,
    countVideo:0,
    countCas:0,
    countZone:0,
    countComment:0,
    countVeille:0,

  };
  CalculPie(){ 
    this.state.region.map(region => {
       this.state.mort.push(region.mort);
       this.state.suspect.push(region.suspect);
       this.state.critique.push(region.critique);
       this.state.guerie.push(region.guerie);
       this.state.confirme.push(region.confirme);

     
    })
   var count1=0;
    this.state.mort.map(mort => {
    
       this.setState({countMort:this.state.countMort+this.state.mort[count1]});
       count1=count1+1;
        })

    var count2=0;
    this.state.guerie.map(guerie => {
    
          this.setState({countGuerie:this.state.countGuerie+this.state.guerie[count2]});
          count2=count2+1;
           })

    var count3=0;
    this.state.suspect.map(suspect => {
      
            this.setState({countSuspect:this.state.countSuspect+this.state.suspect[count3]});
            count3=count3+1;
             })

    var count4=0;
    this.state.confirme.map(confirme => {
               
            this.setState({countConfirme:this.state.countConfirme+this.state.confirme[count4]});
              count4=count4+1;
              })

    var count5=0;
    this.state.critique.map(critique => {
                         
             this.setState({countCritique:this.state.countCritique+this.state.critique[count5]});
              count5=count5+1;
            })

      this.setState({countTotal:this.state.countTotal+this.state.countSuspect+this.state.countGuerie+this.state.countMort+this.state.countConfirme+this.state.countCritique})
      console.log( this.state.countTotal)
      console.log( this.state.countConfirme)
      console.log( this.state.countCritique)
      console.log( this.state.critique)
      console.log( this.state.guerie)
    ; 
  }
  numArticle(){
    this.state.articles.map(articles => {
      
      if (articles.vu==0){
        const list = this.state.art.push(this.state.articles);
 
      }})
      this.setState({count:this.state.art.length}); 
    
  }
  numZone(){
    this.state.zone.map(zone => {
      
      if (zone.vu==0){
        const list = this.state.zo.push(this.state.zone);
 
      }})
      this.setState({countZone:this.state.zo.length}); 
    
  }
  numVideo= () =>{
    this.state.video.map(video => {
      if (video.vu==0){
       
        const list = this.state.vid.push(video);
      }})
      this.setState({countVideo:this.state.vid.length});  
    
  }
  numCasSignaler(){ 
    this.state.casSignaler.map(casSignaler => {
      const lis = this.state.dataSales.push(casSignaler.date);
     
      if (casSignaler.vu==0){    
        const list = this.state.cas.push(casSignaler);
      }})
      console.log( "this.state.dataSales")
      console.log( this.state.dataSales)
      this.setState({countCas:this.state.cas.length});     
  }
  numComment(){ 
    this.state.comment.map(comment => {
      if (comment.supprime==0){    
        const list = this.state.com.push(comment);
      }})
      this.setState({countComment:this.state.com.length});     
  }

  componentDidMount(){
   
      axios.get(apiConfig.CasUrl
                    ).then(res =>{
              console.log(res);
              this.setState({casSignaler:res.data});
              
              this.numCasSignaler()
            }); 
        axios.get(apiConfig.infoRegionUrl
                ).then(res =>{
          console.log(res);
          this.setState({zone:res.data});
          this.numZone()
        }); 
        axios.get(apiConfig.regionUrl
          ).then(res =>{
          console.log(res);
          this.setState({region:res.data});
          this.CalculPie()
        }); 
        axios.get(apiConfig.videoUrl
              ).then(res =>{
                console.log(res);
                this.setState({video:res.data});
                this.numVideo()
            }); 
        axios.get(apiConfig.articleUrl
          ).then(res =>{
           console.log(res);
           this.setState({articles:res.data});
           this.numArticle()
       }); 
       axios.get(apiConfig.commentUrl
        ).then(res =>{
         console.log(res);
         this.setState({comment:res.data});
         this.numComment()
        }); 
       
  }
 

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
    
    var dataPie = {
      labels: [(this.state.countSuspect*100) % this.state.countTotal+"% ",
      (this.state.countGuerie*100)%this.state.countTotal+"% ", 
       (this.state.countMort*100)%this.state.countTotal+"%", 
       (this.state.countCritique*100)%this.state.countTotal+"% ", 
(this.state.countConfirme*100) %this.state.countTotal+"% "],


      series: [(this.state.countSuspect*100)%this.state.countTotal,
       (this.state.countGuerie*100)%this.state.countTotal, 
       (this.state.countMort*100)%this.state.countTotal,
       (this.state.countCritique*100)%this.state.countTotal, 
       (this.state.countConfirme*100)%this.state.countTotal]
    };
    var dataBar = {
      labels: ['suspect', 'confirme', 'critique', 'guerie', 'mort'],
      series: [
          [this.state.countSuspect, this.state.countConfirme, this.state.countCritique, this.state.countGuerie, this.state.countMort]
      ]
  };
  var optionsBar = {
      seriesBarDistance: 10,
      axisX: {
          showGrid: false
      },
      height: "245px"
  };
  var responsiveBar = [
      ['screen and (max-width: 640px)', {
          seriesBarDistance: 10,
          axisX: {
              labelInterpolationFnc: function (value) {
                  return value[0];
              }
          }
      }]
  ];
    return (
      <div className="content">
        <Grid fluid>
          
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
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                  />
                  </div>
                }
                
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Distribution des Cas en Algerie"
                category={<Row >
                
                  <Col md={4}>  <li class="d-flex col-6"><i className="fa fa-circle" style={{ color:'green'}} /> <p>gurie</p></li> </Col>
                  <Col md={4}> <li class="d-flex col-6"><i className="fa fa-circle" style={{ color:'purple'}} /> <p>critique</p></li> </Col>
                  <Col md={4}>  <li class="d-flex col-6"><i className="fa fa-circle" style={{ color:'blue'}} /> <p>confirme</p></li></Col>
                  <Col md={4}>  <li class="d-flex col-6"><i className="fa fa-circle" style={{ color:'red '}} /> <p>mort</p></li></Col>
                  <Col md={4}><li class="d-flex col-6"><i className="fa fa-circle" style={{ color:'orange'}} /> <p>suspect</p></li></Col>
                 
                 </Row>}
                stats="Mise a jour il y a 20h"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
               
              />
            </Col>
          </Row>

         
          <Row>
            <Col md={12}>
              <Card
                title="Cas des coronavirus par region"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
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

export default AgentSanteDashboard;
