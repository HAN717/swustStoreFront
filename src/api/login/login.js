import service from '../../utils/request'

export function login(params){
    return service.request({
        url:'/user/login',
        methods: "get",
        params:params,
    })
}