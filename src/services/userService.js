import storageService from './StorageService.js'
export default {
    signup,
    isSignedUp,
    getUser
}

const key = 'bitcoinUser'

function signup(username) {
    const user = {
        username,
        coins: 100
    }
    storageService.saveToStorage(key,user)
}

function isSignedUp() {
    return !!storageService.loadFromStorage(key)
}

function getUser() {
    return Promise.resolve(storageService.loadFromStorage(key))
}