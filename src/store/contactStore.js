import contactService from '../services/contactService';
import { observable, computed, action } from 'mobx';

export default class ContactStore {
    @observable
    contacts = [];
  
    @computed
    get contactsCount() {
      return this.contacts.length;
    }
  
    constructor(rootStore) {
      this.rootStore = rootStore;
    }
  
    @action
    async getContacts(filter) {
      this.contacts = await contactService.getContacts(filter);
    }
  }