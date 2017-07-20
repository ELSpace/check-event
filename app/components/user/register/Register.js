import React from 'react';
import Header from '../login/Header';
import Form from './Form';
import MyForm from 'mobx-react-form';
import fields from './validation';
import plugins from '../../../common/validator';
import logo from '../../../assets/img/elspacelogo.png'
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import toastr from 'toastr';


let instance;

@inject('store')
@observer
class Register extends React.Component {
  
  componentWillMount(){
    window.$('body').attr('class', 'login' );
  
    const { user } = this.props.store;
    const self = this;
    
    const onSubmit = {
      onSuccess(form) {
        const values = form.values();
        user.register(values)
          .then(() => {
            toastr.success(`Account created! welcome ${values.fullname}`);
            self.props.history.push('/');
          })
          .catch(e => {
            toastr.error(e.message);
          }); 
      },
      onError(form) {
        // get all form errors
        console.log('All form errors', form.errors());
        // invalidate the form with a custom error message
        form.invalidate('This is a generic error message!');
      }
    }

    instance = new MyForm({ fields }, { plugins, onSubmit });
    
  }

  render() { 
    return(
      <div>
        <div className="content">
         {/* <Header src={logo} /> */}
          <Form form={instance}/>                  
        </div>
      </div>
    )
  }
}

export default withRouter(Register);