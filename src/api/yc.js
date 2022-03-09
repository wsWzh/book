import request from "./https";
// 书城导航
export function getNavi(params) {
    return request({
        url: "store/navi.json",
        method: "get",
        params,
       
    })
}

//首频广告
export function getMadr(params){
    return request({
        url:"madr.json",
        method:"get",
        params,
    })
}

//store/show.json
// 书城展示模板
export function getShow(params){
    return request({
        url:"store/show.json",
        method:"get",
        params,
    })
}
//store/bookList.json
//书单列表
export function getBookList(uuid){
    return request({
        url:`store/bookList.json?=uuid${uuid}`,
        method:"get",
    })
}

//store/merged/rankNavi.json
//更多/排行榜分类
export function getMerged(params){
    return request({
        url:"store/merged/rankNavi.json",
        method:"get",
        params
    })
}


//store/rankList.json
//更多列表
export function getRankList(params){
    return request({
        url:"store/rankList.json",
        method:"get",
        params
    })
}
// 新手福利
export function getfl(params) {
    return request({
        url: "novice.json",
        method: "get",
        params
    })
  }
