import request from "./https";


// 原创小说排行榜-M
// rank/original/list/data.json
export function getRankweek(params){
    return request({
        url:'rank/original/list/data.json',
        method:"get",
        params
    })
}