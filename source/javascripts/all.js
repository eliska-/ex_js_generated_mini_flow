//= require_tree .

$(document).ready(function(){
  $("#myform").submit(function(e){
    e.preventDefault();
    var text = $('textarea').val();
    $('#new_p').prepend('<p>' + text + '</p>');
    $('textarea').val('');
  });
  window.setInterval(function(){
    $('#new_p').prepend('<p>' + "un mini bout" + '</p>');
  }, 15000);
});