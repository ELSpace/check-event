import MobxReactForm from 'mobx-react-form';
import plugins from '../../../common/validator';

class MyForm extends MobxReactForm {

  onSuccess(form) {
    alert('Form is valid! Send the request here.');
    // get field values
    console.log('Form Values!', form.values());
  }

  onError(form) {
    // get all form errors
    console.log('All form errors', form.errors());
    // invalidate the form with a custom error message
    form.invalidate('This is a generic error message!');
  }
}

const fields = [{
  name: 'email',
  label: 'Email',
  placeholder: 'Email',
  rules: 'required|email|string|between:5,50',
},{
  name: 'password',
  label: 'Password',
  placeholder: 'Password',
  rules: 'required|string|between:8,64',
},{
  name:'rpassword',
  label:'Re-type Your Password',
  placeholder:'Re-type Your Password',
  rules:'required|string|between:8,64',
},{
  name:'fullname',
  label:'Full Name',
  placeholder:'Full Name',
  rules:'required|string|between:10,25',
},{
  name:'address',
  label:'Address',
  placeholder:'Address',
  rules:'required|string|between:10,40',
},{
  name:'city',
  label:'City/Town',
  placeholder:'City/Town',
  rules:'required|string|between:2,40',
},{
  name:'country',
  label:'Country',
  placeholder:'Country',
  rules:'required', 
}];

export default new MyForm({ fields }, { plugins });