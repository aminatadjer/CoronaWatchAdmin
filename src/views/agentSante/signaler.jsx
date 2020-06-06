
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Table
} from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import NativeSelect from '@material-ui/core/NativeSelect';
import axios from "axios";

class SignalerCas extends Component {


    state ={
      casSignaler:[],
      Region:[],
      
     
    };
    componentDidMount(){

      axios.get(' http://localhost:8000/api/InfoRegion/'
      ).then(res =>{
          console.log(res);
       
          this.setState({casSignaler:res.data});
        }
    
        );
        axios.get(' http://localhost:8000/api/region/'
        ).then(res =>{
            console.log(res);
           console.log(" localStorage.getItem('role')}");
            this.setState({Region:res.data});
            let options = res.data.map( Region => ({ value: Region.id, label: Region.title }));
            return { options };
          }
      
          );
      
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
    axios.post('http://localhost:8000/api/InfoRegion/', {
      
      suspect: this.state.suspect,
      confirme:this.state.confirme,
      critique: this.state.critique,
      mort: this.state.mort,
      guerie: this.state.guerie,
      region: this.state.region,
      degre: this.state.degre,
      
    }).then(res => {
      console.log(res);
      this.componentDidMount();
 }
    ).catch((error) => {
      console.log(error);
    });
    }
  }

 
  regionChange(event) {
  
    this.setState({region: event.target.value});
    console.log(this.state.region)
    
  }

  degreChange(event) {
  
    this.setState({degre: event.target.value});
    console.log(this.state.degre)
    
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
                    <option></option>
                    <option value={1}  style={{color: "green"}}>Vert</option>
                    <option value={2} style={{color: "orange"}}>Orange</option>
                    <option value={3} style={{color: "red"}}>Rouge</option>
                  </NativeSelect>

                      
                    </Col>
                  </Row>
                  <Row>
                  
                    <Col md={4}>
                      <h6> Cas suspects</h6>
                    <input type="titre" className="form-control" placeholder=" Cas suspects"  onChange={e =>this.change(e)}  value={this.state.Region.suspect}  name ="suspect"  />
                    </Col>
                    <Col md={4}>
                    <h6> Cas confirmés</h6>
                    <input type="titre"  className="form-control"  placeholder="Cas confirmés " onChange={e =>this.change(e)}  value={this.state.Region.confirme}  name ="confirme"   />
                    </Col>
                    <Col md={4}>
                    <h6> Cas  critique</h6>
                    <input type="titre"  className="form-control"  placeholder="Cas critique " onChange={e =>this.change(e)}  value={this.state.Region.critique}  name ="critique"  />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                    <h6> Cas  morts</h6>
                    <input type="titre" className="form-control" placeholder="Cas morts"  onChange={e =>this.change(e)}  value={this.state.Region.mort}  name ="mort"  />
                    </Col>
                    <Col md={6}>
                    <h6> Cas  guérie</h6>
                    <input type="titre" className="form-control" placeholder="Cas guérie" onChange={e =>this.change(e)}  value={this.state.Region.guerie}  name ="guerie"  />
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
            <Col md={6}>
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
                        
                        return (
                          <tr >
                            <td></td>

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
                      })}
                    </tbody>
                  </Table>
                }
              />

            </Col>
            <Col md={6}>
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
                        
                        return (
                          <tr >
                              <td></td>
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

export default SignalerCas;
