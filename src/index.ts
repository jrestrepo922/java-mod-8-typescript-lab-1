function prepend(numSpaces: number, inputString: string): string {
  // your code here
  for(let i = 0; i < numSpaces; i++){
    inputString = inputString + " "; 
  }
  return inputString; 
}

console.log(prepend(3, "bye"));
// const answerElement  = document.getElementsByTagName("h2")[0]; 
// answerElement.innerHTML = prepend(3, "testing"); 