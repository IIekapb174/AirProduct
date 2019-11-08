// Scroll to Top
$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#gotoTopBtn').fadeIn()
    } else{
      $('#gotoTopBtn').fadeOut();
    }
  })
})
// -------------------------------------
