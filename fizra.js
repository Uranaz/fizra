var main = function() {
  $('#btnabout').click(function() {
    $('#abouttext').show();
    $('#btnabout').addClass('active');
    $('#btncoach').removeClass('active');
    $('#coachtext').hide();
  });

  $('#btncoach').click(function() {
    $('#coachtext').show();
    $('#btncoach').addClass('active');
    $('#btnabout').removeClass('active');
    $('#abouttext').hide();
  });

  $('.closebtn').click(function() {
    $('#abouttext').hide();
    $('#btnabout').removeClass('active');
    $('#coachtext').hide();
    $('#btncoach').removeClass('active');
  });

  $('#map').click(function() {
    $('#abouttext').hide();
    $('#btnabout').removeClass('active');
    $('#coachtext').hide();
    $('#btncoach').removeClass('active');
  });

}

$(document).ready(main);
