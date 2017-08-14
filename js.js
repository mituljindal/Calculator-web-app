var num1 = null;
var sym = null;


//Only numbers in text field
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
}
//add numbers from buttons
function numClick(x) {
  //get already typed number from text field
  var num = document.getElementById("numInput").value;
  //check if field is empty
  if (num == null) {
    num = x;
  } else { //if not empty
  num += x;
  }
  //Display the number
  document.getElementById("numInput").value = num;
}

//To compute the result
function compute() {
  //convert numbers to integers
  var result = parseInt(num1);
  var x = parseInt(document.getElementById("numInput").value);

  //Switch-case for selected operation
  switch (sym) {
    case "add":
      result += x;
      break;
    case "subtract":
      result = result - x;
      break;
    case "multiply":
      result = result * x;
      break;
    case "divide":
      result = result / x;
      break;
    default:
      console.log("Invalid selection");
      break;
  }
  //Store the result
  num1 = result.toString();
}

//Check which operator was clicked
function symclick(x) {
  //If some other operator was previously clicked
  if (sym == null) {
    num1 = document.getElementById("numInput").value;
  } else
  if (sym != "="){
    compute();
  }
  sym = x;
  document.getElementById("numInput").value = null;
}

//Clear everything
function allClear() {
  num = null;
  num1 = null;
  sym = null;
  document.getElementById("numInput").value = null;
}

//Equal-to button clicked
function equalTo() {
  compute();
  sym = "="
  document.getElementById("numInput").value = num1;
}
