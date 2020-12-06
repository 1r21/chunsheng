import request from "/@/utils/request";

export async function getNews() {
  return request("/news");
}

export async function translate(q: string) {
  return request("/translate", {
    method: "post",
    data: {
      q,
    },
  });
}
