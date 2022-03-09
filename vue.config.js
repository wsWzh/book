module.exports = {
    publicPath: './',
    devServer: {
        
        // 注意：修改当前文件重启项目
        proxy: {
            "/": {
                target: "http://192.168.69.60:3000",
                changeOrigin: true,
            }
        }
    }
}