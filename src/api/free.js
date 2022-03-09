import request from "./https";

//store/show.json
// 书城免费展示模板
export function getShowFree(type){
    return request({
        url:`store/show.json?type=${type}`,
        method:"get",
        
    }) 
}