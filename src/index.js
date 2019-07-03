import {observable, isArryLike, computed} from 'mobx'

class Store {
    @observable array = []
    @observable obj = {}
    @observable map = new Map()

    @observable string = 'hello'
    @observable number = 20
    @observable bool = true
}
var store = new Store()

console.log(observable)
console.log(store.array)
console.log(store.string)

var fpp = computed(function() {
    return store.string + '/' + store.number
})
console.log(fpp.get())