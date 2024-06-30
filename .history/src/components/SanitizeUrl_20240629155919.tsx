export default function sanitizeUrl(url: string) {

  try {
    
  } catch (error) {
    
  }

  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  } else {
    return '#';
  }
}

