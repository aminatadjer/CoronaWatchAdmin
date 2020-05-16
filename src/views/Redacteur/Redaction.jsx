
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddCircle from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';

import  axios from "axios";
import SunEditor,{buttonList} from "suneditor-react";

var fileExtension = require('file-extension');
class Redaction extends Component {

  state ={
    contenu:"",
    media:null,
    titre:"",
    article:[]
  }

  handleChange = (e) => {
    console.log(this.state.contenu)
 
    this.setState({
      contenu: e
    })
  };
  Change = (e) => {
console.log("helo")
    console.log(this.state.titre)
 
    this.setState({
      titre: "hi"
    })
  };

  handleImageChange = (e) => {
    this.setState({
      media: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('media', this.state.media);
    form_data.append('contenu', this.state.contenu);
    form_data.append('titre', this.state.titre);
    let url = 'http://127.0.0.1:8000/api/article/ ';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };
  List(file_extention) {
    console.log(file_extention)
    if (file_extention==".mp4" ){
      console.log("Sorry, the list is empty")
    }
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
          <div className="form-group">
      <input type="titre" className="form-control" placeholder=" titre"  onChange={this.Change}  />
    </div>
                    
                 <SunEditor 
                 
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
<p>

            <input type="file"
                   id="media"
                   accept="file_extension|audio/*|video/*|image/*|media_type" onChange={this.handleImageChange} required/>
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
