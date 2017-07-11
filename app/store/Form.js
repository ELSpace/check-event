import { observable, action } from 'mobx';
import feathersClient from '../services/feathers';

export default class Form {

  @observable forms = [];
  @observable singleForm = {};

  @action.bound create = async data => {
    try {
      const user = await feathersClient.get('user');
      const response = await feathersClient.service('forms').create({
        fields: data,
        name: 'Hallleluya form',
        userId: user._id
      });
      console.log(response);
    } catch(e) {
      console.log(e);
      console.log(e.response);
    }
  }

  @action.bound getSingle = async name => {
    //this.singleForm = await feathersClient.service('forms')
  }

  @action.bound get = async () => {
    this.forms = await feathersClient.service('forms')
      .get();
  };

}