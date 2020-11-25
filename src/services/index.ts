import request from "/@/utils/request";

export async function getNews() {
  return request("/news");
}
