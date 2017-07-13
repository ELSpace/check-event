import React, { Component } from 'react';
import { Content } from '../../../metronic/layout';
let formR;

class Display extends Component {

    componentDidMount() {  
    formR = $('#render').formRender({
        dataType: 'xml',
    formData: formR.value,
  });   
    
  }

render() {
  return(
        <Content.Item title="Display Form" description="Display a Form ">
          <div id="render"></div>
        </Content.Item> );
}}

export default Display;
