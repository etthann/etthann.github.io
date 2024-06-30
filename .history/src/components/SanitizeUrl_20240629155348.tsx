export default function sanitizeUrl(url: string) {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  } else {
    return '#';
  }
}

