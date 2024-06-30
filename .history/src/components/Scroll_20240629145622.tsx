
export default function ScrollToPage ({page}: {page: string}) {

  let pagePosition = 0;

  switch (page) {
    case "top":
      break;
    case "about":
      break;
    case "projects":
      break;
    case "contact":
      break;
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

}