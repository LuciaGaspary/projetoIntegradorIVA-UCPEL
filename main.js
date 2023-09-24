// Quando a página é carregada
document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopButton = document.getElementById("scrollToTopButton");
  
    // Mostrar o botão quando o usuário rolar a página para baixo
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 100) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    });
  
    // Voltar ao topo quando o botão é clicado
    scrollToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Para uma animação suave de rolagem
      });
    });
  });

  // popover bootstrap
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))