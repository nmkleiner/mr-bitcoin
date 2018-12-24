import userService from '../services/userService';
import { observable, action } from 'mobx';

export default class UserStore {
    @observable
    user = {}

    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @action
    async getUser() {
        this.user = await userService.getUser()
    }
}