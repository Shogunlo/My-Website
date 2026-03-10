fetch("components/nav.html")
.then(response => response.text())
.then(data => {
    document.getElementById("nav-component").innerHTML = data;
//should add font awesome here so it loads before the nav icons are used
    const fa = document.createElement('link');
    fa.rel = 'stylesheet';
    fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    document.head.appendChild(fa);

    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("nav-list");

    hamburger.addEventListener("click", () => {
        navList.classList.toggle("active");
    });
})
.catch(error => console.error("Nav didn't load", error));

    