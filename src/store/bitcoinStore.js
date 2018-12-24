import bitcoinService from '../services/bitcoinService';
import { observable, action,  } from 'mobx';

export default class BitcoinStore {
    @observable rate = null
    @observable goingUp = true
    @observable pastRate = 0

    constructor(rootStore) {
        this.rootStore = rootStore;
    }
    // print(input) {
    //     console.log(input)
    // }
    getRate= (value,oldValue) => {
        // console.log(value,oldValue)
        this.rate = value
        this.goingUp = (value > oldValue) 
    }

    @action 
    async watchRate() {
        await bitcoinService.watchBitcoinRate(this.getRate)
    }
}