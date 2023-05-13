
import service from '../../../utils/request'

export function add_item_mate(data,adminToken){
    return service.request({
        url:'/item_material/add',
        method: "post",
        data:data,
        headers: adminToken
    })
}