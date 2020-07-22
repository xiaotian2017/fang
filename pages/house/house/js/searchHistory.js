export default {
    list: uni.getStorageSync('searchHistory'),
    max: 10,
    add(str) {
        if(!this.list) {
            this.list = [ str ]
        }else{
            let _index = this.list.indexOf(str)
            
            if(_index > -1) this.list.splice(_index, 1)
            
            this.list.unshift(str)

            this.list = this.list.slice(0, this.max)
        }
        this._set()
    },
    clear() {
        this.list.splice(0, this.list.length)
        this._set()
    },
    _set() {
        uni.setStorageSync('searchHistory', this.list)
    }
}