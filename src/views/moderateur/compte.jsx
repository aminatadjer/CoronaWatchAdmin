
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
 
} from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios  from "axios";
import {apiConfig} from "../ApiConfig.js";


class CompteModerateur extends Component {

    state ={
      user:[],
      email:'',
      region:[],
      
    };

  componentDidMount(){
      axios.get(apiConfig.userUrl
      ).then(res =>{
          console.log(res);
          this.setState({user:res.data});

        }); 
  }

  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log( e.target.value)
  }

  submit(id,email){
    axios.put(apiConfig.userUrl+`${id}/editEmail/`,{
      "email":email,
    }).then(res=>{
      this.componentDidMount();
      console.log(res)
    });
  }

  render() {
    
    return (
      <div>
      <br/> 
      {this.state.user.map(user => {
        if (user.username==localStorage.getItem('username')){  
              return  <div className="content">
                  <Grid fluid>
                    <Row>
                      <Col md={8}>
                        <Card
                          title="Modifier votre compte"
                          content={
                                  <form onSubmit={e=>this.submit(e)} >
                                    <FormInputs
                                      ncols={["col-md-4"]}
                                      properties={[
                                        {
                                          label: "Statut",
                                          type: "text",
                                          bsClass: "form-control",
                                          placeholder: "Statut",
                                          defaultValue: "Moderateur",
                                          disabled: true
                                        }]}
                                    />
                                
                                    <FormInputs
                                      ncols={["col-md-6"]}
                                      properties={[
                                        {
                                          label: "Nom d'utilisateur",
                                          type: "text",
                                          bsClass: "form-control",
                                          placeholder: "nom d'utilisateur",
                                          defaultValue: user.username,
                                          disabled: true
                                        }]}
                                    />
                                    <FormInputs
                                      ncols={["col-md-6", "col-md-6"]}
                                      properties={[
                                        {
                                          label: "Nom",
                                          type: "text",
                                          bsClass: "form-control",
                                          placeholder: "Statut",
                                          defaultValue: user.last_name,
                                          disabled: true
                                        },
                                        {
                                          label: "Prenom",
                                          type: "text",
                                          bsClass: "form-control",
                                          placeholder: "Division",
                                          defaultValue:  user.first_name,
                                          disabled: true
                                        }]}
                                    />

                                    <input 
                                          type="titre"
                                          className="form-control" 
                                          defaultValue={user.email} 
                                          onChange={e =>this.change(e)}    
                                          name ="email"  
                                    />

                                    <Button bsStyle="info" pullRight fill type="submit"  onClick={() => this.submit(localStorage.getItem('id'),this.state.email)}  >
                                      Sauvegarder
                                    </Button>
                              
                                   </form>
                          }
                        />
                      </Col>

                      <Col md={4}>
                        <Card
                          title="Modifier votre Mot de passe" 
                          content={
                            <form>

                                    <FormInputs
                                      ncols={["col-md-12"]}
                                      properties={[
                                        {
                                          label: "Mot de passe actuel",
                                          type: "text",
                                          bsClass: "form-control",
                                          placeholder: "Mot de passe actuel",
                                          defaultValue: ""
                                          
                                        } ]}
                                    />    

                                    <FormInputs
                                      ncols={["col-md-12"]}
                                      properties={[
                                        {
                                          label: "Nouveau Mot de passe",
                                          type: "password",
                                          bsClass: "form-control",
                                          placeholder: "Nouveau Mot de passe",
                                          defaultValue: ""
                                          
                                        }]}
                                    />

                                    <FormInputs
                                      ncols={["col-md-12"]}
                                      properties={[
                                        {
                                          label: "Confirmation Nouveau Mot de passe",
                                          type: "password",
                                          bsClass: "form-control",
                                          placeholder: "Nouveau Mot de passe",
                                          defaultValue: ""
                                          
                                        }]}
                                    />
                                    
                                    <Button bsStyle="info" pullRight fill type="submit">
                                        Sauvegarder
                                    </Button> 
                          
                            </form>
                           }
                        />
                      </Col>  
                    </Row>
                 </Grid>
      </div>
     }
    })}
    </div> 
       );
  }
 }

export default CompteModerateur;
 
                                      
            
                                
                              
