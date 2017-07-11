import User from './User';
import Form from './Form';

import { observable } from 'mobx';


export default class MainStore {
  @observable user = new User();
  @observable form = new Form();
}