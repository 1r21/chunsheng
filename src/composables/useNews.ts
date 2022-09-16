import { ref } from "vue";
import type { Translation, News } from "@1r21/api-h5";
import { type Text, parseText } from "@1r21/util";

export default async function useNews(id: string) {
  const news = ref<News | null>(null);
  const texts = ref<(Text & { trans?: string })[]>([]);
  const { apiHost } = useRuntimeConfig();
  const {
    pending: loading,
    data: result,
    error: exceptionText,
  } = await useFetch("/api/news/detail", {
    baseURL: apiHost,
    method: "POST",
    body: {
      id,
    },
  });

  const { data: article } = <any>result.value || {};

  news.value = article;
  if (article && article.transcript) {
    const formateTexts = parseText(article.transcript);
    if (formateTexts) {
      texts.value = formateTexts;
    }
  }

  return { news, texts, loading, exceptionText };
}

export async function translate(q: string) {
  const { apiHost } = useRuntimeConfig();
  const { data: result } = await useFetch("/api/translate", {
    baseURL: apiHost,
    method: "POST",
    body: {
      q,
    },
  });
  const { data } = <any>result.value;
  return <{ list: Translation[] }>data;
}
