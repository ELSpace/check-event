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

  @action.bound getSingle = async id => {
    const response = await feathersClient.service('forms').get(id);
    this.singleForm = response;
    return response.fields;
  }

  @action.bound find = async () => {
    const myForms = await feathersClient.service('forms')
      .find();
    this.forms = myForms.data;
  };

  @action.bound remove = async id => {
    const response = await feathersClient.service('forms')
      .remove(id);
    
    // remove form from store for sync
    this.forms = this.forms.filter(form => form._id !== id);
    return;
  }

} 