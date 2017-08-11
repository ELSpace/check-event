import User from './User';
import Form from './Form';
import Entry from './Entry';

import { observable } from 'mobx';


export default class MainStore {
  @observable user = new User();
  @observable form = new Form();
  @observable entry = new Entry();
}