import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

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
    return <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2><b>{this.props.form.singleForm && this.props.form.singleForm.name}</b></h2>
          <hr />
          <div id="render"></div>
          <hr />
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

