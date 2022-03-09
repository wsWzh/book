import request from "./https";
// 首屏广告
export function getimg(params) {
  return request({
      url: "madr.json",
      method: "get",
      params
  })
}
