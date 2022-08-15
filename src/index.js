function prepend(numSpaces, inputString) {
    // your code here
    for (var i = 0; i < numSpaces; i++) {
        inputString = " " + inputString;
    }
    return inputString;
}
console.log(prepend(3, "bye"));
// const answerElement  = document.getElementsByTagName("h2")[0]; 
// answerElement.innerHTML = prepend(3, "testing"); 
