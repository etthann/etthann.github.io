
export default function Scroll ({page}: {page: string}) {

  switch (page) {
    case "top":
      break;
    case "about":
      break;
    case "projects":
      
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

}