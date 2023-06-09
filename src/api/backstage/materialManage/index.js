
import service from '../../../utils/request'

export function add_item_mate(data,adminToken){
    return service.request({
        url:'/item_material/add',
        method: "post",
        data:data,
        headers: adminToken
    })
}

export function delete_item_mate(data,adminToken){
    return service.request({
        url:'/item_material/delete_item_material_by_id',
        method: "post",
        params:data,
        headers: adminToken
    })
}

export function update_item_mate(data,adminToken){
    return service.request({
        url:'/item_material/update_item_material_by_id',
        method: "post",
        params:data,
        headers: adminToken
    })
}
