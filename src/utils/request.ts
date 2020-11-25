import axios from "axios";

axios.defaults.baseURL = "/api";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] = "application/json";

// Add a request interceptor
axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Add a response interceptor
axios.interceptors.response.use((response) => {
  const { status, data } = response;
  if (status === 200) {
    return data;
  }
  return Promise.reject("error");
});

export default axios;
