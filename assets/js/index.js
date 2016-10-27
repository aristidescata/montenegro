$(function() {
  $("#first-elem").click(function() {
      $('html, body').animate({ scrollTop: 0}, 500, 'swing');
    });
  $("#second-elem").click(function() {
      $('html, body').animate({ scrollTop: ($(window).height()/3)}, 500, 'swing');
    });
  $("#third-elem").click(function() {
      $('html, body').animate({ scrollTop: ($(window).height()/3) * 2}, 500, 'swing');
    });
})

