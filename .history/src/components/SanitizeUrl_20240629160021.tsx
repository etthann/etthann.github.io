export default function sanitizeUrl(url: string) {
  try {
    if (typeof url === 'undefined') {
      throw new Error("Link Defined");
    }
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    } else {
      return "#";
    }
  } catch (error) {
    throw error;
  }
}
