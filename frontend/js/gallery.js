// =====================================
// THE BAY POINT GALLERY
// =====================================

const galleryButtons = document.querySelectorAll(".gallery-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

// FILTERING

galleryButtons.forEach(button => {
  
  button.addEventListener("click", () => {
    
    galleryButtons.forEach(btn => {
      
      btn.classList.remove("active");
      
    });
    
    button.classList.add("active");
    
    const filter = button.dataset.filter;
    
    galleryItems.forEach(item => {
      
      if (filter === "all") {
        
        item.style.display = "block";
        
      } else if (item.classList.contains(filter)) {
        
        item.style.display = "block";
        
      } else {
        
        item.style.display = "none";
        
      }
      
    });
    
  });
  
});

// LIGHTBOX

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

galleryItems.forEach(item => {
  
  item.addEventListener("click", () => {
    
    const image = item.querySelector("img");
    
    lightbox.style.display = "flex";
    
    lightboxImg.src = image.src;
    
  });
  
});

// CLOSE BUTTON

closeBtn.addEventListener("click", () => {
  
  lightbox.style.display = "none";
  
});

// CLICK OUTSIDE IMAGE

lightbox.addEventListener("click", (e) => {
  
  if (e.target === lightbox) {
    
    lightbox.style.display = "none";
    
  }
  
});

// ESC KEY

document.addEventListener("keydown", (e) => {
  
  if (e.key === "Escape") {
    
    lightbox.style.display = "none";
    
  }
  
});