const { watch } = require('fs')
const path=require('path')
module.exports={
    mode:'development',
    entry:'/dist/ser.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'service.js'
    },
    watch :true

}