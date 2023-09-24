$(function() {
  $("#jumbotron").dialog({
    autoOpen: false, // Set to false to initially hide the jumbotron
    modal: true,     // Make it modal (overlay background)
    draggable: false, // Make it not draggable
    resizable: false, // Make it not resizable
    width: 500,       // Set the width of the jumbotron
    height: 300       // Set the height of the jumbotron
  });

  $("#showJumbotron").on("click", function() {
    $("#jumbotron").dialog("open");
  });
});