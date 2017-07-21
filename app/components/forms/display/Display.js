import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Display extends Component {

  componentDidMount() {
    window.$('body').css('background', '#ffffff');
    const param = this.props.match.params.form;
    this.props.store.form.getSingle(param)
      .then(fields => {
        console.log(fields);
        window.$('#render').formRender({
          dataType: 'json',
          formData: fields
        });
      });
  }

  render() {
    return <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h2><b>{this.props.match.params.form.replace('-', ' ')}</b></h2>
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
