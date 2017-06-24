import { observable, action } from 'mobx';
import feathersClient from '../services/feathers';


export default class User {

  @observable fullname;
  @observable jwt;

  @action.bound login = async () => {
    try {
      const response = await feathersClient.authenticate({
        strategy: 'local',
        email: 'mehrez@hrouz.com',
        password: 'hrouz'
      });
      const payload = await feathersClient.passport.verifyJWT(response.accessToken);
      const user = await feathersClient.service('users').get(payload.userId);
      console.log(user);
    } catch(e) {
      
    }
  }

}

