$(document).ready(function() {
  $(".walrus-toggle").click(function() {
    $("#walrus-showing").toggle();    
    $("#walrus-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".emu-fade").click(function() {
    $("#emu-fadein").fadeToggle();
    $("#emu-fadeout").fadeToggle();
  });
});

$(document).ready(function() {
  $(".cheetah-slide").click(function() {
    $("#cheetah-slidein").slideToggle();
    $("#cheetah-slideout").slideToggle();
  });
});