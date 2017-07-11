import { observable, action } from 'mobx';
import feathersClient from '../services/feathers';

export default class User {

  @observable user;
  @observable isLoggedIn;

  @action.bound checkAuthState = async () => {
    const token = await feathersClient.passport.getJWT();
    this.isLoggedIn = token ? true : false;

    return;
  }

  @action.bound profile = async () => {
    const token = await feathersClient.passport.getJWT();
    
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

  @action.bound logout = async () => {
    await feathersClient.logout();
    this.isLoggedIn = false;
    this.user = null;
    return;
  }

  @action.bound register = async values => {
    await feathersClient.service('users').create(values);
    const response = await feathersClient.authenticate({
      strategy: 'local',
      email: values.email,
      password: values.password
    });

    return await this.get(response.accessToken);
  }
}

