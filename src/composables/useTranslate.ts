import { translate } from "@/services";
import { entityMap } from "@/utils";

export default function useTranslate() {
  function getMousePos(e: MouseEvent) {
    const { x, y } = e;
    const selection = window.getSelection();
    if (selection) {
      const range = selection.getRangeAt(0);
      const txt = String(range);
      return {
        x,
        y,
        sectionText: txt,
      };
    }
  }

  function parseText(article: string) {
    let content = article.replace(/(\r\n|\n|\r)/gm, "");
    for (let key in entityMap) {
      const re = new RegExp("&" + key + ";", "g");
      content = content.replace(re, entityMap[key]);
    }
    const hReg = /<p[^>]*>(.*?)<\/p>/gm;
    const texts = content.match(hReg);

    if (texts) {
      return texts.map((item) => {
        if (item.includes("</strong>")) {
          const tRe = /<p><strong[^>]*>(.*?)<\/strong><\/p>/g;
          return {
            type: "title",
            value: item.replace(tRe, "$1"),
          };
        }
        return {
          type: "text",
          value: item.replace(/<p[^>]*>(.*?)<\/p>/g, "$1"),
        };
      });
    }
  }

  async function doTranslate(
    texts: { type: string; value: string; trans?: string }[],
    text: string,
    trans: string | null
  ) {
    if (trans) {
      return texts.map((item) => {
        if (item.value === text) {
          item.trans = "";
          return item;
        }
        return item;
      });
    } else {
      const { list } = await translate(text);
      if (list && list.length > 0) {
        const [first] = list;
        return texts.map((item) => {
          if (item.value === text) {
            item.trans = first.dst;
            return item;
          }
          return item;
        });
      }
    }
  }

  return {
    parseText,
    doTranslate,
    getMousePos,
  };
}
