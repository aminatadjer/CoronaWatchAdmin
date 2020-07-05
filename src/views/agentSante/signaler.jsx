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
import {
  Grid,
  Row,
  Col,
  Table
} from "react-bootstrap";
import {selectoptions} from "variables/Variables.jsx"
import { Card } from "components/Card/Card.jsx";
import { thArray, tdArray,thArraysv, tdArraysv } from "variables/Variables.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import Select from 'react-select';
import NativeSelect from '@material-ui/core/NativeSelect';
import axios from "axios";
import {apiConfig} from "../ApiConfig.js"
const token=localStorage.getItem("base-token");

class SignalerCas extends Component {
  constructor(props){
    super(props);

    this.state ={
      casSignaler:[],
      Region:[],
      
     
    };
    this.change= this.change.bind(this);
    this.submit =this.submit.bind(this);
    this.regionChange = this.regionChange.bind(this);
    this.degreChange = this.degreChange.bind(this);
  }
  change = (e) => {
   
    this.setState({ [e.target.name]: e.target.value });
    console.log( e.target.value)
  }

  
 
 
  submit(e){
    e.preventDefault();
    if ( this.state.suspect==null){
     return 
    }else{
    axios.post(apiConfig.infoRegionUrl, {
      suspect: this.state.suspect,
      confirme:this.state.confirme,
      critique: this.state.critique,
      mort: this.state.mort,
      guerie: this.state.guerie,
      region: this.state.region,
      degre: this.state.degre,
      agent:localStorage.getItem('id')
      
    }
    ).then(res => {
  
      this.cancelCourse();
      this.componentDidMount();
      console.log(res)
    }
    ).catch((error) => {
      console.log(error);
    });
  }
  }
  

  componentDidMount(){

    axios.get(apiConfig.infoRegionUrl
    ).then(res =>{
        console.log(res);
     
        this.setState({casSignaler:res.data});
      }
  
      );
      axios.get(apiConfig.regionUrl
      ).then(res =>{
          console.log(res);
          this.setState({Region:res.data});
          let options = res.data.map( Region => ({ value: Region.id, label: Region.title }));
          return { options };
        }
    
        );
    
  }
 
  
 
  regionChange(event) {
  
    this.setState({region: event.target.value});
    console.log(this.state.region)

    
  }

  degreChange(event) {
  
    this.setState({degre: event.target.value});
    console.log(this.state.degre)
    
  }
  cancelCourse(){
    this.refs.a.value="";
    this.refs.b.value="";
    this.refs.c.value="";
    this.refs.d.value="";
    this.refs.e.value="";
   

  }


  render() {
  
  
    

    this.state.Region.map(region => {
console.log(region.nom)
    })
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title=" Signaler par region"
                content={
                          <form onSubmit={e=>this.submit(e)}>
                     <Row>
                  
                  <Col md={6}>
                    <h6> Region</h6>
                  </Col>
                  <Col md={6}>
                  <h6> degré de danger</h6>
                  </Col>
                  
                </Row>
                  <Row>
               
                    <Col md={6}>
                    <NativeSelect
                    id="region"
                    placeholder="region"
                    onChange={this.regionChange}
                    style={{width: "100%"}}
                    >
                     {this.state.Region.map(region=> {
                      return  <option value={region.id}>{region.nom}</option>
                    })}
                 
                  </NativeSelect>
                 
                    </Col>
                  
                    <Col md={6}>
                    <NativeSelect
                     style={{width: "100%"}}
                    id="degre"
                    placeholder="degre"
                    onChange={this.degreChange}
                    >
                    <option value={1}  style={{color: "green"}}>Vert</option>
                    <option value={2} style={{color: "orange"}}>Orange</option>
                    <option value={3} style={{color: "red"}}>Rouge</option>
                  </NativeSelect>

                      
                    </Col>
                  </Row>
                  <Row>
                  
                    <Col md={4}>
                      <h6> Cas suspects</h6>
                    <input  required type="number" min ="0" className="form-control" placeholder=" Cas suspects"  onChange={e =>this.change(e)}  value={this.state.Region.suspect}  name ="suspect"  ref="a"/>
                    </Col>
                    <Col md={4}>
                    <h6> Cas confirmés</h6>
                    <input  required type="number" min ="0" className="form-control"  placeholder="Cas confirmés " onChange={e =>this.change(e)}  value={this.state.Region.confirme}  name ="confirme" ref="b"  />
                    </Col>
                    <Col md={4}>
                    <h6> Cas  critique</h6>
                    <input  required type="number" min ="0" className="form-control"  placeholder="Cas critique " onChange={e =>this.change(e)}  value={this.state.Region.critique}  name ="critique" ref="c"  />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                    <h6> Cas  morts</h6>
                    <input required type="number" min ="0" className="form-control" placeholder="Cas morts"  onChange={e =>this.change(e)}  value={this.state.Region.mort}  name ="mort" ref="d" />
                    </Col>
                    <Col md={6}>
                    <h6> Cas  guérie</h6>
                    <input required type="number" min ="0" className="form-control" placeholder="Cas guérie" onChange={e =>this.change(e)}  value={this.state.Region.guerie}  name ="guerie"  ref="e"/>
                    </Col>
                   
                  </Row>
               
                  
                    <Button bsStyle="info" pullRight fill type="submit">
                      Sauvegarder
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            
          </Row>
          <Row>
            <Col md={12}>
            <Card
                title="Cas des coronavirus par region "
                category="-Mise a jour et valider par le modérateur-"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover >
                    <thead>
                      <tr>
                      <th>Date</th>
                        <th>Region</th>
                        <th>Cas Suspects</th>
                        <th>cas confirmés</th>
                        <th>cas critiques</th>
                        <th>Guérisons</th>
                        <th>Nombre de décès</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      
                      {this.state.casSignaler.reverse().map(casSignaler => {
                         if (casSignaler.agent==localStorage.getItem('id') && casSignaler.valide==1 ){
                        return (
                          <tr >
                            <td>{casSignaler.date}</td>

                            <td>{this.state.Region.map(region => {
                               if (region.id==casSignaler.region){
                              
                                    return ( 
                               
                                    region.nom
                                      )}})}</td>
                           <td>{casSignaler.suspect}</td>
                           <td>{casSignaler.confirme}</td>
                           <td>{casSignaler.critique}</td>
                           <td>{casSignaler.guerie}</td>
                           <td>{casSignaler.mort}</td>
                          </tr>
                        );
                       }
                       })}
                      
                    </tbody>
                  </Table>
                }
              />

            </Col>
            </Row>
            <Row>
            <Col md={12}>
            <Card
                title="Cas des coronavirus par region "
                category="-Mise a jour non valider par le modérateur-"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table bordered hover >
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Region</th>
                        <th>Cas Suspects</th>
                        <th>cas confirmés</th>
                        <th>cas critiques</th>
                        <th>Guérisons</th>
                        <th>Nombre de décès</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      
                      {this.state.casSignaler.reverse().map(casSignaler => {
                  if (casSignaler.agent==localStorage.getItem('id') && casSignaler.valide==0 ){

                        return (
                          <tr >
                              <td>{casSignaler.date}</td>
                            <td>{this.state.Region.map(region => {
                               if (region.id==casSignaler.region){
                              
                                    return ( 
                               
                                    region.nom
                                      )}})}</td>
                           <td>{casSignaler.suspect}</td>
                           <td>{casSignaler.confirme}</td>
                           <td>{casSignaler.critique}</td>
                           <td>{casSignaler.guerie}</td>
                           <td>{casSignaler.mort}</td>
                          </tr>
                        );
                }})}
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

export default SignalerCas;
