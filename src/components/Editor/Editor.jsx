import React, { Component } from "react";
import 'suneditor/dist/css/suneditor.min.css'; 
import AdminLayout from "layouts/Admin.jsx";
import 'suneditor/dist/css/suneditor.min.css'
import suneditor from 'suneditor'
import plugins from 'suneditor/src/plugins'
import SunEditor,{buttonList} from "suneditor-react";

export class Editor extends Component {
 

  handleChange(content){
    
    console.log(content); //Get Content Inside Editor

  }
 

  render() {
    
    return (
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
    );
  }
}

export default Editor;