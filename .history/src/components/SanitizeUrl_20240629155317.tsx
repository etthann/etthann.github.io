export default function sanitizeUrl(url) {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  } else {
    return '#';
  }
}

