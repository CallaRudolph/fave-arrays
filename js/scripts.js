$(function() {
$("#formOne").submit(function(event) {
  event.preventDefault();
  var cheese = $("input#cheese").val();
  var animal = $("input#animal").val();
  var larry = $("input#larry").val();
  var max = $("input#max").val();
  var brady = $("input#brady").val();

  var favorites = [cheese, animal, larry, max, brady];

  $("#results").text(favorites);


  });
});
