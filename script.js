$(document).ready(function(){
  $('[data-toggle="popover"]').popover({
    placement : 'top',
    trigger : 'hover'
  });
});

$(document).ready(function() {
  $( ".card" ).hover(
  function() {
    $(this).addClass('shadow-lg').css('cursor', 'pointer');
  }, function() {
    $(this).removeClass('shadow-lg');
  }
  );
});
