import { request, req } from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
//请求普通商品数据
export function getHomeGoods(page,cid, pagesize){
	return req({
		url:'/index',
		params: {
      appkey: '026jcbesbq',
			page,
      cid,
			pagesize
		}
	})
}
//请求新款商品数据
export function getNewGoods(page,cid, pagesize){
	return req({
		url:'/index',
		params: {
      appkey: '026jcbesbq',
			page,
      cid,
			pagesize
		}
	})
}
//精选
export function getKingGoods(page,cid, pagesize){
	return req({
		url:'/index',
		params: {
      appkey: '026jcbesbq',
			page,
      cid,
			pagesize
		}
	})
}