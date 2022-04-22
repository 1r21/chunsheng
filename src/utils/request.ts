type Response<T> = {
  code: string;
  message: string;
  data: T
}

export const request = <T = any>(url: string, rest: any): Promise<T> => {
  return new Promise((resolve, reject) => {
    uni.request({
      url,
      ...rest,
      success(data: Response<T>) {
        resolve(data.data)
      },
      fail(reason: any) {
        reject(reason)
      }
    })
  })
}