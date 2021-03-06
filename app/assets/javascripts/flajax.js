// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(event, request){
  $('.hide').hide();
});

$(document).ajaxComplete(function(event, request){
  scrollTop = request.getResponseHeader('X-Scroll-Top');

  if(scrollTop){
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }

  $(['Error','Warning','Notice','Message']).each(function(i, header){
      alertbox = $('.x-flash-' +header.toLowerCase())
      value = request.getResponseHeader('X-Flash-' + header);
      if(value){
         alertbox.fadeIn().find('span.text').html(value);
      }
  });
});
