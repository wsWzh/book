// 分类
import request from "./https";

//simpleCategroy.json
// 简单分类
export function getSimpleCategroy(){
    return request({
        url:"simpleCategroy.json",
        method:"get",
        
    }) 
}

// category/original/data.json
//原创小说分类列表-M
export function getOriginal(params){
    return request({
        url:"category/original/data.json",
        method:"get",
        params
        
    }) 
}
