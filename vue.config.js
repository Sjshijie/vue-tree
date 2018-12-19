module.exports = {
    // devServer: {
    //     target: 'http://localhost:8091/opsearch/transferOutQuery.do',  // 接口域名
    //     port:9000,
    //     proxy:{
    //         '/img':'http://localhost:8091/opsearch/transferOutQuery.do?token=1BC89ABEC814A18352CDA4CFCBD140C62E46C299A5A4FF675300B71765D113EC&_dc=1545026528016&outBatchId=&q_time_outStartTime=&q_time_outEndTime=&page=1&start=0&limit=10'
    //     }
    // },
    // proxyTable: {
    //     '/api': {
    //      target: 'http://localhost:8091/opsearch/transferOutQuery.do?token=1BC89ABEC814A18352CDA4CFCBD140C62E46C299A5A4FF675300B71765D113EC&_dc=1545026528016&outBatchId=&q_time_outStartTime=&q_time_outEndTime=&page=1&start=0&limit=10/', // 设置你调用的接口域名和端口号
    //      changeOrigin: true,   // 
    //     }
    // }

    devServer: {
        port:9000,
        proxy: {
            '/api': {
                target: 'http://localhost:8091/opsearch/transferOutQuery.do?token=1BC89ABEC814A18352CDA4CFCBD140C62E46C299A5A4FF675300B71765D113EC&_dc=1545026528016&outBatchId=&q_time_outStartTime=&q_time_outEndTime=&page=1&start=0&limit=10',
                changeOrigin: true,
                ws: true
            }
        }
    }
}