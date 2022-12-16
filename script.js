// Add your answer here
$(".lesson").hover(
  function () {
    $(this).find(".text-contents").fadeIn(500);
  },
  function () {
    $(this).find(".text-contents").fadeOut(500);
  }
);
