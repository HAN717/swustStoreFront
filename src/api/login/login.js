import service from '../../utils/request'

export function login(data){
    return service.request({
        url:'/user/login',
        method: "post",
        params:data,
    })
}