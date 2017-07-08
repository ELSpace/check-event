import React from 'react';
import { Content } from '../../../metronic/layout';
import {Link} from 'react-router-dom';
import {formBuilder} from 'formBuilder';


class New extends React.Component {
  
  render() {
    return (
   <div id="builder" >
 

   </div>
);}
componentDidMount() {
  $('#builder').formBuilder();
}

}

export default New;