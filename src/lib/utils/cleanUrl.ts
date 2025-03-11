export function cleanURL(url: string) {
  return url.replace(/https?:\/\//, "").replace(/\/$/, "");
}
