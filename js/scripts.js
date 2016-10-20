$(document).ready(function(){
  var choice = prompt("What animal would you like to learn about? Enter: t for Turtle, s for Snake, p for Preying Mantis.")

  if (choice === "t"){
    $("#turtle").show();
  }
  if (choice === "s"){
    $("#snake").show();
  }
  if (choice === "p") {
    $("#mantis").show();
  }
});
