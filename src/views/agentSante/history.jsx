
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import  axios from "axios";
import { ThreeSixty } from "@material-ui/icons";
import {apiConfig} from "../ApiConfig.js";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactPlayer from 'react-player'

class history extends Component {
  state ={
   
  
    zone:[],
 
  };

  componentDidMount(){

    
    
     
        
             axios.get(apiConfig.infoRegionUrl
                    ).then(res =>{
                        console.log(res);
                 
                        this.setState({zone:res.data});
                      });
        
  }
 
 
  
  render() {
    return (
      <div className="content">
        <Grid fluid>
         
         
          <Row>
            <Col md={12}>
         
          <Card
              title="Regions "
             
           
              content={
                <Table striped hover >
                  <thead>
                    <tr>
                      
                      <th>id region</th>
                      <th>cas suspects</th>
                      <th>cas confirmes</th>
                      <th> cas critiques</th>
                      <th>cas gueries</th>

                      <th> cas morts</th>
                      <th> cas degres</th>
                      <th> état</th>


                      
                      
                    </tr>
                  </thead>
                  <tbody>
                    
                    {this.state.zone.map(region => {
               if (region.supprime==1 ){
                      return (
                        <tr >
                          <td>{region.region}</td>
                            <td>{region.suspect}</td>
                            <td>{region.confirme}</td>
                            <td>{region.critique}</td>
                            <td>{region.guerie}</td>
                            <td>{region.mort}</td>
                            <td>{region.degre}</td>
                            <td><i class="fa fa-close  fa-2x" aria-hidden="true" style={{ color :'red ' }}></i></td>

                              
                        </tr>
                      );}
              })}
               {this.state.zone.map(region => {
               if (region.valide==1 ){
                      return (
                        <tr >
                          <td>{region.region}</td>
                            <td>{region.suspect}</td>
                            <td>{region.confirme}</td>
                            <td>{region.critique}</td>
                            <td>{region.guerie}</td>
                            <td>{region.mort}</td>
                            <td>{region.degre}</td>
                            <td><i class="fa fa-check  fa-2x" aria-hidden="true" style={{ color :'green ' }}></i></td>

                              
                        </tr>
                      );}
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

export default history;

             
