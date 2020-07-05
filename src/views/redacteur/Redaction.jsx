import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddCircle from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';

import  axios from "axios";
import SunEditor,{buttonList} from "suneditor-react";
import Editor from "components/Editor/Editor";
import {apiConfig} from "../ApiConfig.js";
var fileExtension = require('file-extension');
const token=localStorage.getItem("base-token");

class Redaction extends Component {

  state ={
    contenu:"",
    media:"",
    titre:"",
    article:[],
    articles:[],
  }
  cancelCourse(){
    this.refs.a.value="";
    this.refs.b.value="";
  
 
  }

  handleChange = (e) => {

 
    this.setState({
      contenu: e
    })
  };
  Change = (e) => {
 
 
    this.setState({
      titre: e
    })
  };

  handleImageChange = (e) => {
    this.setState({
      media: e.target.files[0]
    })
  };
  change = (e) => {
   
    this.setState({ [e.target.name]: e.target.value });
    console.log( e.target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('media', this.state.media);
    form_data.append('contenu', this.state.contenu);
    form_data.append('titre', this.state.titre);
    this.cancelCourse();
    axios.post(apiConfig.articleUrl, form_data)
        .then(res => {
          console.log(res.data);
          this.componentDidMount();
        })
        .catch(err => console.log(err))
  };
  List(file_extention) {
    console.log(file_extention)
    if (file_extention==".mp4" ){
      console.log("Sorry, the list is empty")
    }
  }

  componentDidMount(){

    axios.get(apiConfig.articleUrl
    ).then(res =>{
        console.log(res);
 
        this.setState({article:res.data});
      }
  
      );
   
  }
  render() {

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Rédiger Vos Articles"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <form>
                    
                     <Col md={6}>
                      <h6> Titre</h6>
                   
                   
                    <input  required type="titre" className="form-control" placeholder=" titre" onChange={e =>this.change(e)}  value={this.state.article.titre}  name="titre" ref="a"   />
                    </Col>
                <br/>
                <Col md={12}>   
    <SunEditor 
    required
        onChange={this.handleChange}
       
        setOptions={{
            height: 400,
            buttonList: [
    [ 'video', 'image', 'list'],['undo', 'redo'],
    ['font', 'fontSize', 'formatBlock'],
    ['paragraphStyle', 'blockquote'],
    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
    ['fontColor', 'hiliteColor', 'textStyle'],
    ['removeFormat'],
    '/', // Line break
    ['outdent', 'indent'],
    ['align', 'horizontalRule', 'list', 'lineHeight'],
    ['table', 'link', 'image', 'video', /** 'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
    ['fullScreen', 'showBlocks', 'codeView'],
    ['preview', 'print'],
    ['save', 'template']
],

}}
showToolbar={true} 


/>
</Col>
<br/>
<p>

            <input 
             ref="b"
             type="file"
                   id="media"
                   accept="file_extension|audio/*|video/*|image/*|media_type" onChange={this.handleImageChange} />
          </p>
                 <Button
                  onClick={this.handleSubmit}
                  style={{ background:'#87CB16', color: 'black' ,position:'relative', left:'400px', top:'6px',width:'250PX',fontSize:'15px'}}
                  variant="contained"
                  color="Green"
                  startIcon={<AddCircle />}
                 >
                 <strong>Ajouter</strong>
                 </Button>
                
               </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Redaction;