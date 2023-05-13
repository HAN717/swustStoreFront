import service from '../../../utils/request'

// 获取所有物品
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
// 添加物品图片
export function add_item_picture(file){
    return service.request({
        url:'/item/add_picture',
        method: "post",
        data:file
    })
}
// 添加物品
export function add_item(data,token){
    return service.request({
        url:'/item/add_item',
        method: "post",
        data:data,
        headers:token
    })
}
// 删除物品
export function delete_item_by_id(id){
    return service.request({
        url:'/item/delete_by_id',
        method: "post",
        params:id
    })
}