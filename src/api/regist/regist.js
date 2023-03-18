import service from '../../utils/request'

export function regist(data){
    return service.request({
        url:'/user/regist',
        methods: "get",
        params:data,
    })
}