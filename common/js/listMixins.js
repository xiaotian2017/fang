export default {
    data() {
        return {
            dataList: [],
            listApi: null
        }
    },
    methods: {
        _getList() {
            let params = {
                pageNum: this.pageNum,
                pageSize: this.pageSize,
                ...this.addParams
            }   
            this.listApi(params).then(data=>{
                let { totalNum, pageSize, record } = data

                record = record || data
    
                if(!this.maxPages) this.maxPages = Math.ceil(totalNum/pageSize)
    
                this.dataList = this.dataList.concat(record)
            })
        },
    },
    onReachBottom() {
		if(this.pageNum < this.maxPages) {
			this.pageNum++
			this._getList()
		}
    },
    created() {
        this.pageNum = 1
        this.pageSize = 10
        this.addParams = {}
    }
}