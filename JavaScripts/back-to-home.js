// ====== BACK TO HOME BUTTON ======

// Verificăm dacă suntem pe o subpagină (nu pe index.html)
const currentPage = window.location.pathname;
const isSubpage = !currentPage.endsWith('index.html') && 
                  !currentPage.endsWith('/') && 
                  currentPage !== '/';

// Creăm butonul doar dacă suntem pe o subpagină
if (isSubpage || currentPage.includes('pilates') || currentPage.includes('online') || currentPage.includes('adolescenti')) {
  const backToHomeBtn = document.createElement('a');
  backToHomeBtn.id = 'backToHome';
  backToHomeBtn.href = 'index.html'; // sau doar '/' dacă preferi
  backToHomeBtn.innerHTML = '<i class="fas fa-arrow-left"></i>';
  backToHomeBtn.setAttribute('aria-label', 'Înapoi la pagina principală');
  backToHomeBtn.setAttribute('title', 'Înapoi la Home');
  document.body.appendChild(backToHomeBtn);

  // Stilizare buton
  const style = document.createElement('style');
  style.textContent = `
    #backToHome {
      position: fixed;
      bottom: 30px;
      left: 30px;
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
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px) scale(0.8);
      animation: fadeInLeft 0.6s ease forwards 0.5s;
    }

    @keyframes fadeInLeft {
      to {
        opacity: 1;
        visibility: visible;
        transform: translateY(0) scale(1);
      }
    }

    #backToHome:hover {
      transform: translateX(-5px) scale(1.1);
      box-shadow: 0 12px 35px rgba(255, 121, 0, 0.6);
      background: linear-gradient(135deg, #FF9800 0%, #ffc400 100%);
    }

    #backToHome:active {
      transform: translateX(-3px) scale(1.05);
    }

    #backToHome i {
      animation: slideLeft 2s infinite;
    }

    @keyframes slideLeft {
      0%, 100% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(-5px);
      }
    }

    /* Badge cu text "Home" - apare la hover */
    #backToHome::after {
      content: 'Home';
      position: absolute;
      left: 70px;
      background: rgba(26, 26, 26, 0.95);
      color: white;
      padding: 8px 15px;
      border-radius: 8px;
      font-family: 'Poppins', sans-serif;
      font-size: 13px;
      font-weight: 500;
      white-space: nowrap;
      opacity: 0;
      visibility: hidden;
      transform: translateX(-10px);
      transition: all 0.3s ease;
      pointer-events: none;
    }

    #backToHome:hover::after {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
    }

    /* Arrow indicator pentru badge */
    #backToHome::before {
      content: '';
      position: absolute;
      left: 62px;
      width: 0;
      height: 0;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 8px solid rgba(26, 26, 26, 0.95);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      pointer-events: none;
    }

    #backToHome:hover::before {
      opacity: 1;
      visibility: visible;
    }

    /* Responsive */
    @media (max-width: 768px) {
      #backToHome {
        width: 50px;
        height: 50px;
        bottom: 20px;
        left: 20px;
        font-size: 20px;
      }

      #backToHome::after {
        left: 65px;
        font-size: 12px;
        padding: 6px 12px;
      }

      #backToHome::before {
        left: 57px;
      }
    }

    @media (max-width: 480px) {
      #backToHome {
        width: 45px;
        height: 45px;
        bottom: 15px;
        left: 15px;
        font-size: 18px;
      }

      /* Ascundem tooltip-ul pe ecrane foarte mici */
      #backToHome::after,
      #backToHome::before {
        display: none;
      }
    }
  `;
  document.head.appendChild(style);
}

// Funcție alternativă: detectare automată bazată pe structura URL
// Decomentează dacă vrei să folosești această metodă:
/*
function isOnSubpage() {
  const path = window.location.pathname;
  const fileName = path.substring(path.lastIndexOf('/') + 1);
  
  // Lista cu fișierele subpaginilor
  const subpages = ['pilates.html', 'online.html', 'adolescenti.html'];
  
  return subpages.some(page => fileName.includes(page));
}
*/