const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('Show');
        } else {
            entry.target.classList.remove('Show')
        }
    });
});

export default observer;