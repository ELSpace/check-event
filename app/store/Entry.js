import { observable, action } from 'mobx';
import feathersClient from '../services/feathers';

const service = feathersClient.service('entries');

export default class Entry { 

  @observable entires = [];
  @observable entry;
  
  @action.bound create = async (formID, data) => {
    
    const response = await service.create({
      formID, 
      data
    });
    
    return;
  }

  @action.bound find = async(formId) => {

  }

  @action.bound get = async (formdId, id) => {

  }


}