$('footer').click(function() {
    $('div.subfoot').removeClass("hidden");
  });

$('div.subfoot').hover(function() {
    $(this).removeClass("hidden");
  }, function() {
    $(this).addClass("hidden");
  });