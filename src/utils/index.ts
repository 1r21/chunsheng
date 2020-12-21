export function formatPlayTime(seconds: number) {
  if (!seconds) {
    return "00:00";
  }
  const min = parseInt(String(seconds / 60));
  const sec = parseInt(String(seconds % 60));
  return `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
}

declare global {
  interface Window {
    dd: any;
  }
}

export function changeTitle(title: string) {
  const { env, biz } = window.dd;
  if (env.platform !== "notInDingTalk") {
    biz.navigation.setTitle({
      title,
    });
  } else {
    document.title = title;
  }
}
