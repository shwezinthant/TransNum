function myfunction(event) {
  event.preventDefault();
  var userInput = $("#mm").val();
  console.log(userInput);

  if (userInput == "") {
    $("#mm").addClass("is-invalid");
    return;
  } else {
    $("#mm").removeClass("is-invalid");
    $("#mm").addClass("is-valid");
  }
  var result = "";
  let changeToArr = userInput.split("");
  if (isNaN(userInput)) {
    //၁၂၃
    changeToArr.forEach((element) => {
      if (element == "၀") {
        result += "0";
      }
      if (element == "၁") {
        result += "1";
      }
      if (element == "၂") {
        result += "2";
      }
      if (element == "၃") {
        result += "3";
      }
      if (element == "၄") {
        result += "4";
      }
      if (element == "၅") {
        result += "5";
      }
      if (element == "၆") {
        result += "6";
      }
      if (element == "၇") {
        result += "7";
      }
      if (element == "၈") {
        result += "8";
      }
      if (element == "၉") {
        result += "9";
      }
    });
  } else {
    //123
    changeToArr.forEach((element) => {
      if (element == 0) {
        result += "၀";
      }
      if (element == 1) {
        result += "၁";
      }
      if (element == 2) {
        result += "၂";
      }
      if (element == 3) {
        result += "၃";
      }
      if (element == 4) {
        result += "၄";
      }
      if (element == 5) {
        result += "၅";
      }
      if (element == 6) {
        result += "၆";
      }
      if (element == 7) {
        result += "၇";
      }
      if (element == 8) {
        result += "၈";
      }
      if (element == 9) {
        result += "၉";
      }
    });
  }
  $("#result").val(result);
}
