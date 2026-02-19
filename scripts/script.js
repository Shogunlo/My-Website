const navPath = window.location.pathname.includes('/Other-Pages/')
  ? '../components/nav.html'
  : 'components/nav.html';

fetch(navPath)
  .then(r => r.text())
  .then(data => {
    document.getElementById("nav-component").innerHTML = data;
    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("nav-list");
    if (hamburger && navList) {
      hamburger.addEventListener("click", () => {
        navList.classList.toggle("active");
      });
    }
  })
  .catch(error => console.error("Nav didn't load", error));

    