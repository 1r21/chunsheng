import Taro, { Chain } from '@tarojs/taro'

const interceptor = async function (chain: Chain) {
  const requestParams = chain.requestParams
  const { method, data: params, url } = requestParams

  console.log(`http ${method || 'GET'} --> ${url} params: `, params)

  return chain.proceed({ ...requestParams, url: __API_HOST__ + url })
}

Taro.addInterceptor(interceptor)
