import { observable, action } from 'mobx';
import feathersClient from '../services/feathers';

export default class Form {

  @observable forms = [];
  @observable singleForm = null;

  @action.bound create = async (name, data) => {
    try {
      const user = await feathersClient.get('user');
      const form = await feathersClient.service('forms').create({
        fields: data,
        name,
        userId: user._id
      });
      this.forms.push(form);
      return;
    } catch(e) {
      console.log(e);
      console.log(e.response);
    }
  }

  @action.bound getSingle = async name => {
    const response = await feathersClient.service('forms').find({
      query: {
        name
      }
    });

    this.singleForm = response.data[0];
    
    if (response.data[0].fields)
      return response.data[0].fields;
    else 
      this.getSingle(name);
  }

  @action.bound find = async () => {
    const myForms = await feathersClient.service('forms')
      .find();
    this.forms = myForms.data;
  };

} 