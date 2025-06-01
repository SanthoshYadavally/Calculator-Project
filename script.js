
function backspace(){
    let x=document.getElementById("a")
    x.value=x.value.substring(0,x.value.length-1)
}

function calculate() {
    let input = document.getElementById("a");
    try {
      input.value = eval(input.value.replace(/÷/g, "/"));
    } catch {
      input.value = "Error";
    }
  }

  function toggleSign() {
    let input = document.getElementById("a");
    if (input.value.charAt(0) === "-") {
      input.value = input.value.substring(1);
    } else {
      input.value = "+" + input.value;
    }
  }