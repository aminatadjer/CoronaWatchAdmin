

import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import {
 
  legendPie,
  
  optionsSales,
  responsiveSales,
  legendSales,
  
} from "variables/Variables.jsx";
import {apiConfig} from "../ApiConfig.js";
import  axios from "axios";

class DashboardModerateur extends Component {
 
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
    robotVeille:[],
   
    valRobot:[],
   

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

      this.setState({countTotal:this.state.countSuspect+this.state.countGuerie+this.state.countMort+this.state.countConfirme+this.state.countCritique})
      console.log( this.state.countTotal)
      console.log( this.state.countSuspect )
      console.log( (this.state.countSuspect*100-(this.state.countSuspect*100) % this.state.countTotal) / this.state.countTotal)
      console.log( this.state.countSuspect)
      console.log( this.state.countConfirme)
      console.log( this.state.countCritique)
      console.log( this.state.countGuerie)
      console.log( this.state.countMort)
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
  numVeille(){ 
    this.state.robotVeille.map(Veille => {
      if ((Veille.valide==0) && (Veille.supprime==0) ){    
        const list = this.state.valRobot.push(Veille);
      }})
   
    
      this.setState({countVeille:this.state.countVeille+this.state.valRobot.length}); 
    //  this.setState({countVeille:+this.state.valGoogle.length});  
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
        axios.get(apiConfig.robotUrl
          ).then(res =>{
          console.log(res);
          this.setState({robotVeille:res.data});
          this.numVeille()
        
          }); 
         
  }
 

  createLegend(json) {
    var legend = [];
   
  }
  render() {
   
    
    var dataPie = {
      labels: [(this.state.countSuspect*100-(this.state.countSuspect*100) % this.state.countTotal)/this.state.countTotal+"% ",
      (this.state.countMort*100-(this.state.countMort*100) % this.state.countTotal)/this.state.countTotal+"% ", 
      (this.state.countConfirme*100-(this.state.countConfirme*100) % this.state.countTotal)/this.state.countTotal+"% " , 

      (this.state.countCritique*100-(this.state.countCritique*100) % this.state.countTotal)/this.state.countTotal+"% ", 
    
      (this.state.countGuerie*100-(this.state.countGuerie*100) % this.state.countTotal)/this.state.countTotal+"% "],
      
      series: [(this.state.countSuspect*100-(this.state.countSuspect*100) % this.state.countTotal)/this.state.countTotal,
        (this.state.countMort*100-(this.state.countMort*100) % this.state.countTotal)/this.state.countTotal,
        (this.state.countConfirme*100-(this.state.countConfirme*100) % this.state.countTotal)/this.state.countTotal,
   
 
        (this.state.countCritique*100-(this.state.countCritique*100) % this.state.countTotal)/this.state.countTotal, 
        (this.state.countGuerie*100-(this.state.countGuerie*100) % this.state.countTotal)/this.state.countTotal ]
    };
    var dataBar = {
      labels: ['suspect', 'guerie', 'critique', 'confirme', 'mort'],
      series: [
          [this.state.countSuspect, this.state.countGuerie, this.state.countCritique,this.state.countConfirme , this.state.countMort]
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
            <Col md={4}>
              
              <StatsCard
                bigIcon={<a href='#'><i className="pe-7s-news-paper text-info"  onClick={() => this.props.history.push('/moderateur/Articles')}/></a>}
                statsText="Article a traité"
                statsValue={this.state.count}
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText=" MAJ par les rédacteurs"
              />
            </Col>
            <Col md={4}>
              <StatsCard
                bigIcon={<a href='#'><i className="pe-7s-note2 text-danger" onClick={() => this.props.history.push('/moderateur/Cas')}/></a>}
                statsText="Cas Signaler a traité"
                statsValue={this.state.countCas}
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText=" MAJ par les utilisateurs"
              />
            </Col>
            <Col md={4}>
              <StatsCard
                bigIcon={<a href='#'><i  className="pe-7s-map-marker text-danger" onClick={() => this.props.history.push('/moderateur/evolution')}/></a>}
                statsText="Zones a risque a traité"
                statsValue={this.state.countZone}
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText=" MAJ par les agents de santés "
              />
            </Col>
            
          </Row>
          <Row>
            
           
          
          <Col md={4}>
              <StatsCard
                bigIcon={<a href='#'><i className="pe-7s-video text-warning" onClick={() => this.props.history.push('/moderateur/Vidéos')}/></a>}
                statsText="Vidéos a traité"
                statsValue={this.state.countVideo}
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText=" MAJ par les utilisateurs"
              />
            </Col>
            <Col md={4}>
              <StatsCard
                bigIcon={<a href='#'><i className="pe-7s-look text-info" onClick={() => this.props.history.push('/moderateur/veille')}/></a>}
                statsText="Nouvelle Veille a traité"
              
                statsValue={this.state.countVeille}
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="les dernières MAJ par robots"
              />
            </Col>
            <Col md={4}>
              <StatsCard
                bigIcon={<a href='#'><i className="pe-7s-comment text-success" onClick={() => this.props.history.push('/moderateur/Commentaire')}/></a>}
                statsText="Commentaire a traité"
                statsValue={this.state.countComment}
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="les dernières MAJ par les utilisateurs"
              />
            </Col>
            </Row>
            <Row>
            <Col md={6}>
        
              <Card
               
                statsIcon="fa fa-history"
                id="chartHours"
                title="Evolution des cas en Algerie"
               
                stats="les dernières MAJ"
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
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
            <Col md={6}>
              <Card
              md={6}
                statsIcon="fa fa-clock-o"
                title="Distribution des Cas en Algerie"
                category={<Row >
                       <Col md={4}>  <li class="d-flex col-6"><i className="fa fa-circle" style={{ color:'green'}} /> <p>gurie</p></li> </Col>
                  <Col md={4}> <li class="d-flex col-6"><i className="fa fa-circle" style={{ color:'purple'}} /> <p>critique</p></li> </Col>
                  <Col md={4}>  <li class="d-flex col-6"><i className="fa fa-circle" style={{ color:'blue'}} /> <p>suspect</p></li></Col>
                  <Col md={4}>  <li class="d-flex col-6"><i className="fa fa-circle" style={{ color:'red '}} /> <p>mort</p></li></Col>
                  <Col md={4}><li class="d-flex col-6"><i className="fa fa-circle" style={{ color:'orange'}} /> <p>confirme</p></li></Col>
                
                </Row>}
                stats="les dernières MAJ"
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
