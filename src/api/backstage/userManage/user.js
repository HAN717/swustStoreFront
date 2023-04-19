
import service from '../../../utils/request'

export function get_user_info(adminToken){
    return service.request({
        url:'/user/get_user_info',
        method: "post",
        headers: adminToken
    })
}

export function get_user(userId){
    return service.request({
        url:'/user/search_user_by_id',
        method: "post",
        params:userId
    })
}

export function search_all_user(adminToken){
    return service.request({
        url:'/user/search_all_user',
        method: "post",
        headers: adminToken
    })
}

export function addUser(data){
    return service.request({
        url:'/user/reg',
        method: "post",
        data:data
    })
}

export function update_user(data,adminToken){
    return service.request({
        url:'/user/update_user',
        method: "post",
        data:data,
        headers:adminToken
    })
}

export function delete_user(userId,adminToken){
    return service.request({
        url:'/user/delete_user_by_id',
        method: "post",
        params:userId,
        headers:adminToken
    })
}