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

export function remove_user_collection(id,token){
    return service.request({
        url:'/collection/remove_collection_by_item_id',
        method: "post",
        params:id,
        headers:token
    })
}

export function remove_user_shop_cart(id,token){
    return service.request({
        url:'/shop_cart/remove_shop_cart_by_item_id',
        method: "post",
        params:id,
        headers: token
    })
}

// 添加订单
export function add_order(data){
    return service.request({
        url:'/order/add_order',
        method: "post",
        data:data,
    })
}
// 为订单添加好物
export function add_order_item(data){
    return service.request({
        url:'/order_item/add_order_item',
        method: "post",
        data:data,
    })
}
// 查询当前用户所有订单号
export function search_all_order(token){
    return service.request({
        url:'/order/search_cur_user_order',
        method: "get",
        headers: token
    })
}