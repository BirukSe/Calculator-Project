
function add(input){
   document.getElementById("in").value+=input;

}
function evaluateExpression() {
    const inputField = document.getElementById("in");
    try {
        const result = eval(inputField.value);
        inputField.value = result;
    } catch (error) {
        inputField.value = "Error";
    }
}