export default function sanitizeUrl(url: string | undefined) {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  } else {
    return '#';
  }
}

