const repoBase = location.hostname.includes("github.io")
  ? "/My-Website"
  : "";

fetch(`${repoBase}/components/nav.html`)
.then(response => response.text())
.then(data => {
        document.getElementById("nav-component").innerHTML = data;

        const hamburger = document.getElementById("hamburger");
        const navList = document.getElementById("nav-List");

        hamburger.addEventListener("click", () => {
            navList.classList.toggle("active");
        });
    });

    