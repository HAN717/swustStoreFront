
import service from '../../../utils/request'

export function search_all_user(){
    return service.request({
        url:'/user_role/search_all_user_role',
        method: "get",
    })
}