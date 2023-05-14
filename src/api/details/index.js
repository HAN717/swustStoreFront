import service from '../../utils/request'

export function get_item(data){
    return service.request({
        url:'/item/search_item_by_id',
        method: "post",
        params:data
    })
}
