import request from "./https";

// 书城导航
//gender
export function getNaviM(gender) {
    return request({
        url: `store/navi.json?${gender}`,
        method: "get",
    })
}
//store/show.json
// 书城展示模板
export function getShowM(type){
    return request({
        url:`store/show.json?type=${type}`,
        method:"get",
        
    }) 
}

//store/node.json
//所有频道
export function getNode(gender){
    return request({
        url:`store/node.json?gender=${gender}`,
        method:"get",
        
    })
}

