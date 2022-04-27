import Taro from '@tarojs/taro'
import '@/utils/interceptor'

type Response<T = any> = {
  code: number;
  message: string;
  data: T
}

export const request = async <T = any>(url: string, rest = {}): Promise<T> => {
  const { data: rawData } = await Taro.request<Response<T>>({
    url,
    ...rest
  })
  const { data } = rawData

  return data
}