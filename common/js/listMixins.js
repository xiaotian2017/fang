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
    
                if(this.total == 0) this.maxPages = Math.ceil(totalNum/pageSize)
    
                this.dataList = this.dataList.concat(record)
            })
        },
    },
    ReachBottom() {
		if(this.searchParams.pageNum < this.maxPages) {
			this.searchParams.pageNum++
			this._getList()
		}
    },
    created() {
        this.pageNum = 1
        this.pageSize = 10
        this.addParams = {}
    }
}