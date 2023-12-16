window.addEventListener('scroll', function() {
    var stickyDiv = document.querySelector('.sticky-top');
    var cafeDiv = document.querySelector('.cafe');
  
    var stickyRect = stickyDiv.getBoundingClientRect();
    var cafeRect = cafeDiv.getBoundingClientRect();
  
    if (stickyRect.bottom >= cafeRect.top) {
      stickyDiv.style.display = 'none'; 
    } else {
      stickyDiv.style.display = 'block'; 
    }
  });

  window.onload = function() {
    alert('¡A continuación, nuestra historia como restaurante!');
};