import request from "./https";
//热门搜索
//search/getHotWords
export function getHotWords() {
    return request({
        url: "search/getHotWords",
        method: "get",
    })
}
//search/searchHint
//搜索建议
export function getSearchHint(search){
    return request({
        url:`search/searchHint?search=${search}`,
        method:"get",
        
    })
}
//search/book.json
//搜索结果列表
export function getSearchbook(search){
    return request({
        url:`search/book.json?search=${search}`,
        method:"get",
        
    })
}
