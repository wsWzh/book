import request from "./https";

//store/show.json
// 书城免费展示模板
export function getShowRank(type){
    return request({
        url:`store/show.json?type=${type}`,
        method:"get",
        
    }) 
}

//排行榜分类
// store/merged/rankNavi.json
export function getRankNavi(params){
    return request({
        url:'store/merged/rankNavi.json',
        method:"get",
        params
    })
}
//排行榜列表
//store/rankList.json
export function getRankListss(params){
    return request({
        url:'store/rankList.json',
        method:"get",
        params
    })
}
export function getRankListsss(type){
    return request({
        url:`store/rankList.json?${type}`,
        method:"get",
        
    })
}

// 原创小说排行榜-M
// rank/original/list/data.json
export function getOriginal(params){
    return request({
        url:'rank/original/list/data.json',
        method:"get",
        params
    })
}


export function getOriginAweek(params){
    return request({
        url:'rank/original/list/data.json',
        method:"get",
        params
    })
}


export function getOrigimonth(params){
    return request({
        url:'rank/original/list/data.json',
        method:"get",
        params
    })
}
//出版图书排行榜-M
//rank/publish/list/data.json
export function getPublish(params){
    return request({
        url:'rank/original/list/data.json',
        method:"get",
        params
    })
}