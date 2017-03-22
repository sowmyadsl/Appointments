$(function() {
  $("#appointments").submit(function(event) {
    var nameInput = $("input#name").val();
    var descriptionInput = $("input#description").val();
    var dateInput = $("input#date").val();
    var startInput = $("input#start").val();
    var endInput = $("input#end").val();

    $("#text1").text(nameInput);
    $("#text2").text(descriptionInput);
    $("#text3").text(dateInput);
    $("#text4").text(startInput);
    $("#text5").text(endInput);
    $("#initially-showing").hide();
    $("#initially-hidden").show();
    event.preventDefault();
  });
});
