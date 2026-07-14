// =====================================
// THE BAY POINT
// MENU FILTER SCRIPT
// =====================================

const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

// Filter Menu

filterButtons.forEach(button => {
  
  button.addEventListener("click", () => {
    
    // Remove active class
    
    filterButtons.forEach(btn => {
      
      btn.classList.remove("active");
      
    });
    
    // Activate current button
    
    button.classList.add("active");
    
    const category = button.dataset.filter;
    
    menuCards.forEach(card => {
      
      if (category === "all") {
        
        showCard(card);
        
      } else if (card.classList.contains(category)) {
        
        showCard(card);
        
      } else {
        
        hideCard(card);
        
      }
      
    });
    
  });
  
});

// Show Card

function showCard(card) {
  
  card.style.display = "block";
  
  setTimeout(() => {
    
    card.style.opacity = "1";
    card.style.transform = "scale(1)";
    
  }, 100);
  
}

// Hide Card

function hideCard(card) {
  
  card.style.opacity = "0";
  card.style.transform = "scale(.8)";
  
  setTimeout(() => {
    
    card.style.display = "none";
    
  }, 250);
  
}

// Initial Animation

window.addEventListener("load", () => {
  
  menuCards.forEach((card, index) => {
    
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    
    setTimeout(() => {
      
      card.style.transition = ".5s";
      
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
      
    }, index * 80);
    
  });
  
});

// Card Hover Effect

menuCards.forEach(card => {
  
  card.addEventListener("mouseenter", () => {
    
    card.style.transition = ".3s";
    card.style.transform = "translateY(-10px)";
    
  });
  
  card.addEventListener("mouseleave", () => {
    
    card.style.transform = "translateY(0)";
    
  });
  
});

// Smooth Scroll to Menu

const heroButton = document.querySelector(".btn");

if (heroButton) {
  
  heroButton.addEventListener("click", (e) => {
    
    if (heroButton.getAttribute("href") === "#menu") {
      
      e.preventDefault();
      
      document.querySelector(".menu-items").scrollIntoView({
        
        behavior: "smooth"
        
      });
      
    }
    
  });
  
}