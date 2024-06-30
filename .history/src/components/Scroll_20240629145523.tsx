
export default function ScrollToPage ({page}: {page: string}) {

  switch (page) {
    case "top":
      break;
    case "about":
      break;
    case "projects":
      break;

  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

}