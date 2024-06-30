export default function sanitizeUrl(url: string) {
  try {
    if (un)

    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    } else {
      return "#";
    }
  } catch (error) {
    throw error;
  }
}
