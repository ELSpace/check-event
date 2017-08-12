import { observable, action } from 'mobx';
import feathersClient from '../services/feathers';

const service = feathersClient.service('entries');

export default class Entry { 

  @observable entries = [];
  @observable entry;
  
  @action.bound create = async (formID, data) => {
    delete data['undefined'];
    console.log(data);
    const response = await service.create({
      formID, 
      data
    });
    
    return;
  }

  @action.bound find = async(formID) => {
    this.entries = [];
    const response = await service.find({
      query: {
        formID
      }
    });
    
    this.entries = response.data;    
    return;
  }

  @action.bound get = async (formdId, id) => {

  }


}