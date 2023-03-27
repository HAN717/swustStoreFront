import service from '../../utils/request'

export function getWether(params){
    return service.request({
        url:'https://v0.yiketianqi.com/free/day',
        method: "get",
        params:params,
    })
}