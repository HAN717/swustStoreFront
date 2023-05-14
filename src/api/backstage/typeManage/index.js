
import service from '../../../utils/request'

export function add_item_type(data,adminToken){
    return service.request({
        url:'/item_type/add',
        method: "post",
        data:data,
        headers: adminToken
    })
}

export function delete_item_type(data,adminToken){
    return service.request({
        url:'/item_type/delete_item_type_by_id',
        method: "post",
        params:data,
        headers: adminToken
    })
}

export function update_item_type(data,adminToken){
    return service.request({
        url:'/item_type/update_item_type_by_id',
        method: "post",
        params:data,
        headers: adminToken
    })
}
