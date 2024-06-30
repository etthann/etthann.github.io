export default function ScrollToPage({page}: {page: string}) {
  let targetPosition = 0; // Default to top

  // Determine the target position based on the page argument
  switch (page) {
    case "top":
      targetPosition = 0; // Stay at the top
      break;
    case "about":
      const aboutSection = document.querySelector("#about");
      if (aboutSection) targetPosition = aboutSection.offsetTop;
      break;
    case "projects":
      const projectsSection = document.querySelector("#projects");
      if (projectsSection) targetPosition = projectsSection.offsetTop;
      break;
    case "contact":
      const contactSection = document.querySelector("#contact");
      if (contactSection) targetPosition = contactSection.offsetTop;
      break;
    default:
      console.warn("Unknown page:", page);
      break;
  }

  // Scroll to the target position
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}