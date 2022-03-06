const userInput = document.getElementById("text-input");

userInput.addEventListener("input", function () {
  if (userInput.value === "say hello") {
    console.log("Hello!");
  }
});
