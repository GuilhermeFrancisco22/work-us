// Função para verificar se um elemento está visível no viewport
function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
// Função para lidar com a visibilidade dos elementos
function handleVisibility(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}
// Seletor para os elementos que deseja observar
const elementsToObserve = document.querySelectorAll(".animate");
// Criar um novo observador de interseção
const observer = new IntersectionObserver(handleVisibility);
// Adicionar os elementos a serem observados ao observador
elementsToObserve.forEach((element) => {
  observer.observe(element);
});

/* Botao hamburger mobile INICIO */
function clickMenu() {
  if (itens.style.opacity == 1) {
    (itens.style.transition = ".5s"), (itens.style.opacity = 0);
  } else {
    (itens.style.transition = ".5s"), (itens.style.opacity = 1);
  }
}
/* Botao hamburger mobile FIM */

/* Carousel automatico Info */
let count = 1;
document.getElementById("radio1").checked = true;
setInterval(function () {
  nextImage();
}, 4000);
function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}

/* Carousel manual feedbacks */
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" ativo", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " ativo";
}
