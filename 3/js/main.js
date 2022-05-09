$(document).ready(function () {
  $("#count-sum").click(function () {
    let suma = 0;
    let salaries = $(".salary");

    $(".salary").each(function () {
      suma += +$(this).text();
    });
    
    document.getElementById("sum").innerHTML = suma;
  });
});


