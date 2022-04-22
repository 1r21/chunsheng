uni.addInterceptor('request', {
  invoke(args) {
    args.url = import.meta.env.VITE_API_HOST + "/api" + args.url
  },
  success(args) {
    args.data = args.data.data
  },
  fail(err) {
    console.log('interceptor-fail', err)
  },
})