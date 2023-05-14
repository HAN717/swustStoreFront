import service from '../../utils/request'

export function update_user(data,token){
    return service.request({
        url:'/user/update_user',
        method: "post",
        data:data,
        headers:token
    })
}

export function get_user_info(token){
    return service.request({
        url:'/user/get_user_info',
        method: "post",
        headers:token
    })
}

export function search_user_shop_cart(token){
    return service.request({
        url:'/shop_cart/search_all_shop_cart',
        method: "get",
        headers:token
    })
}

export function search_user_collection(token){
    return service.request({
        url:'/collection/search_all_collection',
        method: "get",
        headers:token
    })
}