import { observable, action } from 'mobx';
import feathersClient from '../services/feathers';


export default class User {

  @observable user;
  @observable token;
  @observable isLoggedIn = false;

  @action.bound profile = async () => {
    this.token = await feathersClient.passport.getJWT();
    
    if (!token) throw new Error('Not logged in');    
    
    if (this.user = feathersClient.set('user')) return;

    return await this.get(token);
  }

  @action.bound login = async ({email, password}) => {
    const response = await feathersClient.authenticate({
      strategy: 'local',
      email,
      password
    });

    return await this.get(response.accessToken);
  }

  @action.bound get = async token => {
    const payload = await feathersClient.passport.verifyJWT(token);
    const user = await feathersClient.service('users').get(payload.userId);
    
    feathersClient.set('user', user);
    this.user = user;
    this.isLoggedIn = true;
  }

}

