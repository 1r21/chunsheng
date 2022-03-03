import { ref, onMounted } from "vue";
import { type News, getNewsById } from "@1r21/api-h5";
import { type Text, parseText } from '@1r21/util'


export default function useNews(id: number) {
  const loading = ref(false);
  const exceptionText = ref("");
  const docTitle = ref("");
  const news = ref<News | null>(null);
  const texts = ref<(Text & { trans?: string })[]>([]);

  onMounted(async () => {
    loading.value = true;
    try {
      const article = await getNewsById(String(id));
      if (article) {
        const { date, title } = article;
        news.value = article;
        if (article.transcript) {
          const formateTexts = parseText(article.transcript);
          if (formateTexts) {
            texts.value = formateTexts;
          }
        }
        docTitle.value = `(${date}) ${title}`;
      }
    } catch (error) {
      const errMsg = typeof error === "string" ? error : "error";
      exceptionText.value = errMsg;
      docTitle.value = errMsg;
    }
    loading.value = false;
  });
  return { news, texts, loading, exceptionText, docTitle };
}
