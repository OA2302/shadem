 const menuBtn = document.querySelector(".menu");
  const nav = document.querySelector(".nav");


  const dropdown = document.createElement("div");
  dropdown.classList.add("dropdown");
  dropdown.innerHTML = `
    <ul>
      <li><a onclick="closeMenu()" href="#">Home</a></li>
      <li><a onclick="closeMenu() "href="#about">About / Our Story</a></li>
      <li><a onclick="closeMenu()" href="#pic">Gallery</a></li>
    </ul>
  `;
  nav.appendChild(dropdown);

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuBtn.classList.toggle("active");

    const icon = menuBtn.querySelector("img");
    if (menuBtn.classList.contains("active")) {
      icon.src = "./assests/images/icon-close.svg";
    } else {
      icon.src = "./assests/images/icon-hamburger.svg";
    }
  });
  

  function closeMenu() {
  const nav = document.getElementById('nav');
  const menuBtn = document.querySelector('.menu');
  nav.classList.remove('open');
  menuBtn.classList.remove('active');
  const img = menuBtn.querySelector('img');
  if (img) img.src = './assests/images/icon-hamburger.svg';
}
