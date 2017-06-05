$(function() {
$("#formOne").submit(function(event) {
  event.preventDefault();
  var cheese = $("input#cheese").val();
  var animal = $("input#animal").val();
  var larry = $("input#larry").val();
  var max = $("input#max").val();
  var brady = $("input#brady").val();

  var favorites = [cheese, animal, larry, max, brady];

  var newArray = [];

  newArray.push(favorites[1], favorites [0], favorites [2]);

  $("#one").text(newArray[0]);
  $("#zero").text(newArray[1]);
  $("#two").text(newArray[2]);

  $("#newArray").show();
  });
});
