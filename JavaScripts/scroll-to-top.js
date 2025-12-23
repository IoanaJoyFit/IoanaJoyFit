// ====== SCROLL TO TOP BUTTON ======

// Creăm butonul dinamic
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.id = 'scrollToTop';
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollToTopBtn);

// Stilizare buton
const style = document.createElement('style');
style.textContent = `
  #scrollToTop {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    
    /* Gradient roz identic cu butonul Back to Home */
    background: linear-gradient(
      135deg,
      #fabfd3 0%,
      #e26aa5 100%
    );
    
    color: white;
    border: none;
    cursor: pointer;
    font-size: 22px;
    
    /* Shadow roz */
    box-shadow: 0 10px 30px rgba(226, 106, 165, 0.45);
    
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px) scale(0.8);
    
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #scrollToTop.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
  }

  #scrollToTop:hover {
    transform: translateY(-6px) scale(1.12);
    
    /* Gradient hover roz mai închis */
    background: linear-gradient(
      135deg,
      #e26aa5 0%,
      #b84478 100%
    );
    
    box-shadow: 0 16px 45px rgba(184, 68, 120, 0.55);
  }

  #scrollToTop:active {
    transform: translateY(-4px) scale(1.05);
  }

  #scrollToTop i {
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

  /* Tooltip opțional (ca la Back to Home) */
  // #scrollToTop::after {
  //   content: 'Sus';
  //   position: absolute;
  //   right: 70px;
  //   background: rgba(32, 18, 26, 0.95);
  //   color: white;
  //   padding: 8px 16px;
  //   border-radius: 10px;
    
  //   font-family: 'Poppins', sans-serif;
  //   font-size: 13px;
  //   font-weight: 500;
  //   letter-spacing: 0.5px;
    
  //   opacity: 0;
  //   visibility: hidden;
  //   transform: translateX(10px);
  //   transition: all 0.3s ease;
  //   pointer-events: none;
  // }

  #scrollToTop:hover::after {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }

  /* Săgeată tooltip */
  // #scrollToTop::before {
  //   content: '';
  //   position: absolute;
  //   right: 62px;
  //   width: 0;
  //   height: 0;
  //   border-top: 6px solid transparent;
  //   border-bottom: 6px solid transparent;
  //   border-left: 8px solid rgba(32, 18, 26, 0.95);
  //   opacity: 0;
  //   visibility: hidden;
  //   transition: all 0.3s ease;
  //   pointer-events: none;
  // }

  #scrollToTop:hover::before {
    opacity: 1;
    visibility: visible;
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

    #scrollToTop::after {
      right: 65px;
      font-size: 12px;
      padding: 6px 14px;
    }

    #scrollToTop::before {
      right: 57px;
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

    #scrollToTop::after,
    #scrollToTop::before {
      display: none;
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