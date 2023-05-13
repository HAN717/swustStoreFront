import service from '../../utils/request'

// 获取所有物品材质
export function search_all_item_material(){
    return service.request({
        url:'/item_material/search_all_item_material',
        method: "get",
    })
}

// 获取所有物品类别
export function search_all_item_type(){
    return service.request({
        url:'/item_type/search_all_item_type',
        method: "get",
    })
}