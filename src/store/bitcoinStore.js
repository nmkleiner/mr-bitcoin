import bitcoinService from '../services/bitcoinService';
import { observable, action,  } from 'mobx';

export default class BitcoinStore {
    @observable
    rate = null

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action
  async getRate() {
    this.rate = await bitcoinService.getBitcoinRate();
  }
}