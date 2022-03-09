import request from "./https";

//store/show.json
// 书城展示模板
export function getShowBook(type){
    return request({
        url:`store/show.json?type=${type}`,
        method:"get",
        
    }) 
}

//shelf/info.json
//书架推荐阅读
export function getShelf(){
    return request({
        url:"shelf/info.json",
        method:"get",
        
    }) 
}