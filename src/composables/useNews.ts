import { ref, onMounted } from "vue";
import { type News } from "@1r21/api-h5";
import { type Text, parseText } from '@1r21/util'
import { request } from '@/utils/request'

export default function useNews(id: number) {
  const loading = ref(false);
  const exceptionText = ref("");
  const news = ref<News | null>(null);
  const texts = ref<(Text & { trans?: string })[]>([]);

  onMounted(async () => {
    loading.value = true;
    try {
      const article = await request('/api/news/detail', {
        method: 'POST',
        data: {
          id: String(id)
        }
      })

      if (article) {
        news.value = article;
        if (article.transcript) {
          const formateTexts = parseText(article.transcript);
          if (formateTexts) {
            texts.value = formateTexts;
          }
        }
      }
    } catch (error) {
      const errMsg = typeof error === "string" ? error : "error";
      exceptionText.value = errMsg;
    }
    loading.value = false;
  });

  return { news, texts, loading, exceptionText };
}
