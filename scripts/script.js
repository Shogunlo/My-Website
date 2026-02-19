fetch("/components/nav.html")
.then(response => response.text())
.then(data => {
    document.getElementById("nav-component").innerHTML = data;

    (function() {
      const repo = location.pathname.split('/').filter(Boolean)[0] || '';
      const prefix = repo ? '/' + repo + '/' : '/';
      document.querySelectorAll('#nav-component a').forEach(a => {
        const h = a.getAttribute('href') || '';
        const clean = h.replace(/^(\.\.\/)+/, '');
        a.href = prefix + clean;
      });
    })();

    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("nav-list");

    hamburger.addEventListener("click", () => {
        navList.classList.toggle("active");
    });
})
.catch(error => console.error("Nav didn't load", error));

    