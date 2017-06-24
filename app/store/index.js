import User from './User';
import { observable } from 'mobx';


export default class MainStore {
  @observable user = new User();
}