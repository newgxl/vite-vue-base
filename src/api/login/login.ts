import service from '@/network'


// import type { }

// import type { AccountLoginType } from './types'
// 登录接口
// export let login = (userInfo: AccountLoginType) => {
//   return service.post()
// }

// 获取数据的接口
export let text = () => {
  return service.get({
    url: 'https://www.fastmock.site/mock/0548c1818d31d1d196646f57e714507a/text/hehe'
  })
}
