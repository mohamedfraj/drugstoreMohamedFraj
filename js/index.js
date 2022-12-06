var total = 0;

$(".btn-increment").click(function () {
  prix = parseFloat($(this).parent().siblings(".price").text());

  totlqt = parseInt($(this).siblings(".totlq").text());
  totlqt++;
  $(this).siblings(".totlq").html(totlqt);

  $(this)
    .parent()
    .siblings(".totl")
    .html(Number(prix * totlqt).toFixed(1) + " dt");

  total += prix;
  $("#tots").html(total.toFixed(1) + " dt");
});



 //inverse---------------
$(".btn-decrement").click(function () {
  prix = parseFloat($(this).parent().siblings(".price").text());

  totl = parseInt($(this).siblings(".totlq").text());
  if (totl != 0) {
    totlqt = parseInt($(this).siblings(".totlq").text());
    totlqt--;
    $(this).siblings(".totlq").html(totlqt);

    $(this)
      .parent()
      .siblings(".totl")
      .html(Number(prix * totlqt).toFixed(1) + " dt");

    total -= prix;
    $("#tots").html(total.toFixed(1) + " dt");
  }
});
