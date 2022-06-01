function navbarActive() {
    const activePage = window.location.pathname;
    const navLinks = document.querySelectorAll("nav a").forEach((link) => {
      if (link.href.includes(`${activePage}`)) {
        link.classList.add("active");
      }
    });
  }

  
  let indice = 1;
  
  
  // esta funciona el boton de siguiente
  function avanzaSlide(n){
    muestraSlides( indice+=n );
}

// Esta funcion es para el selector de posición
function posicionSlide(n){
    muestraSlides(indice=n);
}

setInterval(function tiempo(){
    muestraSlides(indice+=1)
},4000);


function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('slider');
    let barras = document.getElementsByClassName('barra');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active", "");
    }
    
    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active';
    
}
navbarActive();
muestraSlides(indice);