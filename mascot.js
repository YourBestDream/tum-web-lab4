// Cookie mascot functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create the mascot elements
    const mascotContainer = document.createElement('div');
    mascotContainer.className = 'cookie-mascot-container';
    
    const mascotImg = document.createElement('img');
    mascotImg.className = 'cookie-mascot';
    mascotImg.src = 'photo/Mascot.png';
    mascotImg.alt = 'Cookie Delights Mascot';
    
    const mascotMessage = document.createElement('div');
    mascotMessage.className = 'cookie-message';
    mascotMessage.innerHTML = "Hi there! 👋 I'm Crumbs, and I'd love to help you find your perfect cookie! Click <a href='#cookies'>here</a> to see our delicious selection!";
    
    // Append elements
    mascotContainer.appendChild(mascotImg);
    mascotContainer.appendChild(mascotMessage);
    document.body.appendChild(mascotContainer);
    
    // Show the mascot after a delay (3 seconds)
    setTimeout(function() {
      mascotContainer.style.opacity = '1';
    }, 3000);
    
    // Change message on different page sections
    window.addEventListener('scroll', function() {
      const aboutSection = document.getElementById('about');
      const cookiesSection = document.getElementById('cookies');
      const testimonialSection = document.getElementById('testimonials');
      const contactSection = document.getElementById('contact');
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      if (isElementInView(contactSection, scrollPosition)) {
        mascotMessage.innerHTML = "Ready to order? Contact us now and get freshly baked cookies delivered to your door!";
      } else if (isElementInView(testimonialSection, scrollPosition)) {
        mascotMessage.innerHTML = "Don't just take my word for it! See what our happy customers are saying!";
      } else if (isElementInView(cookiesSection, scrollPosition)) {
        mascotMessage.innerHTML = "Check out our bestseller - the Double Chocolate cookie! It's absolutely delicious!";
      } else if (isElementInView(aboutSection, scrollPosition)) {
        mascotMessage.innerHTML = "We've been baking with love for over 20 years! Each cookie is handcrafted with care.";
      } else {
        mascotMessage.innerHTML = "Hi there! 👋 I'm Crumbs, and I'd love to help you find your perfect cookie! Click <a href='#cookies'>here</a> to see our selection!";
      }
    });
    
    // Helper function to check if an element is in the viewport
    function isElementInView(element, scrollPos) {
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      const elemTop = rect.top + window.scrollY;
      const elemBottom = elemTop + rect.height;
      return scrollPos >= elemTop && scrollPos <= elemBottom;
    }
  });