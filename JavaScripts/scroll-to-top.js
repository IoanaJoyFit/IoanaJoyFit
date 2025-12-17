// ====== SCROLL TO TOP BUTTON ======

// Creăm butonul dinamic
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.id = 'scrollToTop';
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollToTopBtn);

// Stilizare buton (adaugă acest CSS în style.css sau într-un tag <style>)
const style = document.createElement('style');
style.textContent = `
  #scrollToTop {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: linear-gradient(135deg, #FF7900 0%, #FF9800 100%);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 22px;
    box-shadow: 0 8px 25px rgba(255, 121, 0, 0.4);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px) scale(0.8);
  }

  #scrollToTop.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
  }

  #scrollToTop:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 12px 35px rgba(255, 121, 0, 0.6);
    background: linear-gradient(135deg, #FF9800 0%, #ffc400 100%);
  }

  #scrollToTop:active {
    transform: translateY(-3px) scale(1.05);
  }

  #scrollToTop i {
    display: flex;
    align-items: center;
    justify-content: center;
    animation: bounceUp 2s infinite;
  }

  @keyframes bounceUp {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  /* Responsive */
  @media (max-width: 768px) {
    #scrollToTop {
      width: 50px;
      height: 50px;
      bottom: 20px;
      right: 20px;
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    #scrollToTop {
      width: 45px;
      height: 45px;
      bottom: 15px;
      right: 15px;
      font-size: 18px;
    }
  }
`;
document.head.appendChild(style);

// Funcție pentru afișarea/ascunderea butonului
function toggleScrollButton() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollPosition > 400) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
}

// Funcție smooth scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Event listeners
window.addEventListener('scroll', toggleScrollButton);
scrollToTopBtn.addEventListener('click', scrollToTop);

// Verificare inițială
toggleScrollButton();