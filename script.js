var num1 = 0;
var num2 = 0;
var operation = "";

$(".nums").click(function () {
  if ($(".card-body").html().trim() === "Time is an illusion.") {
    $(".card-body").html($(this).html());
  } else {
    $(".card-body").append($(this).html());
  }
});

$(".operation").click(function () {
  num1 = Number($(".card-body").html());
  $(".card-body").append($(this).html());
  operation = $(this).html();
});

$("#equals").click(function () {
  num2 = Number(
    $(".card-body")
      .html()
      .replace(num1 + operation, "")
  );
  if (operation === "+") {
    $(".card-body").html(num1 + num2);
  } else if (operation === "-") {
    $(".card-body").html(num1 - num2);
  } else if (operation === "x") {
    $(".card-body").html(num1 * num2);
  } else if (operation === "÷") {
    $(".card-body").html(num1 / num2);
  }
});

$("#c").click(function () {
  $(".card-body").html("Time is an illusion.");
});

$("#del").click(function () {
  var content = $(".card-body").html();
  $(".card-body").html(content.slice(0, -1));
});
