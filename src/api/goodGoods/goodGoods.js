import service from '../../utils/request'

export function search_all_item(){
    return service.request({
        url:'/item/search_all_item',
        method: "get",
    })
}

export function search_item_by_id(id){
    return service.request({
        url:'/item/search_item_by_id',
        method: "post",
        params:id
    })
}

// 通过material查找作品
export function search_item_by_material(id){
    return service.request({
        url:'/item/search_item_by_material',
        method: "post",
        params:id
    })
}

// 通过type查找作品
export function search_item_by_type(id){
    return service.request({
        url:'/item/search_item_by_type',
        method: "post",
        params:id
    })
}

export function add_shop_cart(id,token){
    return service.request({
        url:'/shop_cart/add_shop_cart',
        method: "post",
        params:id,
        headers:token
    })
}

export function add_collection(id,token){
    return service.request({
        url:'/collection/add_collection',
        method: "post",
        params:id,
        headers:token
    })
}