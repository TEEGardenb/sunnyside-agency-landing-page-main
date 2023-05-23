let hamburguer = document.querySelector(".hamburguer");

/* Funcion cuando se le da click al menu agrega una clase de nombre activa*/
hamburguer.onclick = function () {
  let navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};
