// ======================================
// THE BAY POINT RESTAURANT
// MAIN JAVASCRIPT
// ======================================

// Mobile Navigation

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  
  if (menuBtn.innerHTML.includes("bars")) {
    menuBtn.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

// Close menu after clicking a link

document.querySelectorAll("nav a").forEach(link => {
  
  link.addEventListener("click", () => {
    
    nav.classList.remove("active");
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    
  });
  
});

// ======================================
// Sticky Header
// ======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  
  if (window.scrollY > 50) {
    
    header.style.background = "#ffffff";
    header.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";
    header.style.transition = ".3s";
    
  } else {
    
    header.style.background = "#ffffff";
    header.style.boxShadow = "0 3px 12px rgba(0,0,0,.08)";
  }
  
});

// ======================================
// Reveal Animation
// ======================================

const reveals = document.querySelectorAll(
  ".welcome, .services, .why, .cta, .card, .features div"
);

function revealElements() {
  
  const trigger = window.innerHeight * 0.85;
  
  reveals.forEach(item => {
    
    const top = item.getBoundingClientRect().top;
    
    if (top < trigger) {
      
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
      
    }
    
  });
  
}

reveals.forEach(item => {
  
  item.style.opacity = "0";
  item.style.transform = "translateY(60px)";
  item.style.transition = ".8s ease";
  
});

window.addEventListener("scroll", revealElements);

revealElements();

// ======================================
// Back To Top Button
// ======================================

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "25px";
topButton.style.bottom = "25px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#9b1c1c";
topButton.style.color = "#fff";
topButton.style.cursor = "pointer";
topButton.style.fontSize = "18px";
topButton.style.display = "none";
topButton.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {
  
  if (window.scrollY > 500) {
    
    topButton.style.display = "block";
    
  } else {
    
    topButton.style.display = "none";
    
  }
  
});

topButton.addEventListener("click", () => {
  
  window.scrollTo({
    
    top: 0,
    behavior: "smooth"
    
  });
  
});

// ======================================
// Highlight Current Page
// ======================================

const currentPage = location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {
  
  const href = link.getAttribute("href");
  
  if (href === currentPage) {
    
    link.classList.add("active");
    
  }
  
});

// ======================================
// Dynamic Copyright Year
// ======================================

const copyright = document.querySelector(".copyright");

if (copyright) {
  
  copyright.innerHTML =
    `© ${new Date().getFullYear()} The Bay Point Restaurant. All Rights Reserved.`;
  
}

// ======================================
// Hero Button Hover Animation
// ======================================

document.querySelectorAll(".btn").forEach(btn => {
  
  btn.addEventListener("mouseenter", () => {
    
    btn.style.transform = "scale(1.05)";
    
  });
  
  btn.addEventListener("mouseleave", () => {
    
    btn.style.transform = "scale(1)";
    
  });
  
});

// ======================================
// Image Hover Animation
// ======================================

document.querySelectorAll(".card img").forEach(img => {
  
  img.addEventListener("mouseenter", () => {
    
    img.style.transform = "scale(1.08)";
    img.style.transition = ".6s";
    
  });
  
  img.addEventListener("mouseleave", () => {
    
    img.style.transform = "scale(1)";
    
  });
  
});