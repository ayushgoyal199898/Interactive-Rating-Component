
var userRating = [];
var x;

$("p").click(function() {
    var userClickedNumber = this.innerHTML;
    userRating.push(userClickedNumber);
    x = "You selected " + userClickedNumber + " out of 5";
    $("."+userClickedNumber).css("background-color", "hsl(25, 97%, 53%)");
    $("p").unbind("click");
});


$(".btn").click(function() {
  if (userRating.length != 0) {
    $('p').children('span').text(x);
    $("#rating-card").addClass("visible");
    $("#thank-you-card").removeClass("visible");
  }
  else {
    alert("Please give a rating before clicking on submit button");
  }
});
