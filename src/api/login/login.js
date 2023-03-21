import service from '../../utils/request'

export function login(data){
    return service.request({
        url:'/user/login',
        methods: "post",
        data:data,
    })
}