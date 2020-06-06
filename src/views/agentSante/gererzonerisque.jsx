
import React, { Component } from "react";

import {
  Grid,
  Row,
  Col,Table
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import Select from 'react-select';
import NativeSelect from '@material-ui/core/NativeSelect';
import axios from "axios";
import {apiConfig} from "../ApiConfig.js"



class Gererzonesrisque extends Component {
  constructor(props){
    super(props);

    this.state ={
      centre:[],
      Region:[],
      
     
    };
    this.change= this.change.bind(this);
    this.submit =this.submit.bind(this);
    this.regionChange = this.regionChange.bind(this);
  }
  change = (e) => {
   
    this.setState({ [e.target.name]: e.target.value });
    console.log( e.target.value)
  }

  
 
 
  submit(e){
    e.preventDefault();
  
    axios.post(apiConfig.centreUrl, {
      nom: this.state.nom,
      adresse:this.state.adresse,
      numero: this.state.numero,
      region: this.state.region,
    
      
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
  

  componentDidMount(){

   
      axios.get(apiConfig.regionUrl
      ).then(res =>{
          console.log(res);
          this.setState({Region:res.data});
         
        }
    
        );
        axios.get(apiConfig.centreUrl
        ).then(res =>{
            console.log(res);
            this.setState({centre:res.data});
           
          }
      
          );
  }
 
  
 
  regionChange(event) {
  
    this.setState({region: event.target.value});
    console.log(this.state.region)
    
  }

 
  cancelCourse(){
    this.refs.a.value="";
    this.refs.b.value="";
    this.refs.c.value="";
 
  }


  render() {

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
            <Card
                title=" Ajouter un centre"
                content={
                <form onSubmit={e=>this.submit(e)}>
                    <Row>
                  
                  <Col md={6}>
                    <h6> Region</h6>
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
                  
                    
                  </Row>
                  <Row>
                  
                    <Col md={6}>
                      <h6> Nom</h6>
                    <input type="titre" className="form-control" placeholder=" Nom du centre"  onChange={e =>this.change(e)}  value={this.state.centre.nom}  name ="nom"  ref="a"/>
                    </Col>
                   
                  </Row>
                  <Row>
                    <Col md={6}>
                    <h6> Adresse</h6>
                    <input type="titre" className="form-control" placeholder="Adresse"  onChange={e =>this.change(e)}  value={this.state.centre.adresse}  name ="adresse" ref="b" />
                    </Col>
                    <Col md={6}>
                    <h6> Numéro téléphone</h6>
                    <input type="titre" className="form-control" placeholder="Numéro de téléphone/fix" onChange={e =>this.change(e)}  value={this.state.centre.numero}  name ="numero"  ref="c"/>
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
          
         
            <Col md={12 }>
            <Card
                title="Les centres  "
                category="information sur les centres"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table bordered hover >
                    <thead>
                      <tr>
                        
                        <th>Nom du centre</th>
                        <th>region</th>
                        <th>Adresse</th>
                        <th>Numero téléphone</th>
                        
                        
                      </tr>
                    </thead>
                    <tbody>
                      
                      {this.state.centre.reverse().map(centre => {
                 
                        return (
                          <tr >
                              <td>{centre.nom}</td>
                            <td>{this.state.Region.map(region => {
                               if (region.id==centre.region){
                              
                                    return ( 
                               
                                    region.nom
                                      )}})}</td>
                           <td>{centre.adresse}</td>
                           <td>{centre.numero}</td>
                          
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

export default Gererzonesrisque;
