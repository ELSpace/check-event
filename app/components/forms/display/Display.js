import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import './style.css';

@inject(allStores => ({
  form: allStores.store.form
}))
@observer
class Display extends Component {

  componentDidMount() {
    window.$('body').css('background', '#ffffff');
    
    const { match, form } = this.props;

    const param = match.params.form;
    
    form.getSingle(param).then(fields => {
      window.$('#render').formRender({
        dataType: 'json',
        formData: fields
      });
    });
  }

  render() {
    return <div className="container display">
      <div className="row pt-5">
        <div className="col-md-6 offset-md-3 form">
          <h2 className="text-center"><b>{this.props.form.singleForm && this.props.form.singleForm.name}</b></h2>
          <hr />
          <div id="render"></div>
          <br />
          <button className="pull-right btn btn-success">Submit</button>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
          
  }

}

export default Display;

