$(function() {
  $("#appointments").submit(function(event) {
    var nameInput = $("input#name").val();
    var descriptionInput = $("input#description").val();
    var dateInput = $("input#date").val();
    var startInput = $("input#start").val();
    var endInput = $("input#end").val();

    $("#output").text(nameInput);
    $("#output").text(descriptionInput);
    $("#output").text(dateInput);
    $("#output").text(startInput);
    $("#output").text(endInput);

  });
});
