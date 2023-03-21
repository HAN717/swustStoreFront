import service from '../../utils/request'

// 获取用户身份id: 0管理员 1教职工 2在读学生 3非本校人员
export function getUserRole(){
    return service.request({
        url:'/user_role/search_all_user_role',
        methods: "get",
    })
}

// 获取用户身份id: 0管理员 1教职工 2在读学生 3非本校人员
export function userReg(data){
    return service.request({
        url:'/user/reg',
        methods: "post",
        data:data
    })
}