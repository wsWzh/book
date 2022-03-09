import request from "./https";



//book/getsub.json
// https://apis.netstart.cn/yunyuedu/book/getsub.json?id=13c58cc086f74e36978b4a7881b82517_4&title=女掌事
//书籍详情
export function getSub(params) {
    return request({
        url: "book/getsub.json",
        method: "get",
        params

    })
}

//book/simpleInfo.json
//最新章节
export function getSimpleInfo(params) {
    return request({
        url: "book/simpleInfo.json",
        method: "get",
        params

    })
}

//reader/book/info.json
// https://apis.netstart.cn/yunyuedu/reader/book/info.json?source_uuid=bd_0c70b944c4c94244b05e3fb102cc2a67_4
// 章节列表-m
export function getCatalog(params) {
    return request({
        url: "reader/book/info.json",
        method: "get",
        params
    })
}

//reader/book/content.json
//章节内容
// https://apis.netstart.cn/yunyuedu/reader/book/content.json?source_uuid=bd_0c70b944c4c94244b05e3fb102cc2a67_4&content_uuid=3baca601ba04434ca6414c92ec2c5760_4
export function getContent(params) {
    return request({
        url: "reader/book/content.json",
        method: "get",
        params
    
    })
}

//个人用户sns/user/getUserInfo.json
export function getUserInfo(params){
    return request({
        url:"sns/user/getUserInfo.json",
        method:"get",
        params
    })
}