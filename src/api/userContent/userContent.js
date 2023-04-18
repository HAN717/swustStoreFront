import service from '../../utils/request'

export function update_user(data){
    return service.request({
        url:'/user/update_user',
        method: "post",
        data:data
    })
}

export function get_user_info(token){
    return service.request({
        url:'/user/get_user_info',
        method: "post",
        headers:token
    })
}

