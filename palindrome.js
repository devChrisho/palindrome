const palindrome = (original) => {
  if (original == "") {
    output.innerText = `You did not key in anything`;
  } else if (original == "boob" || original == "tit") {
    output.innerHTML = `Hur hur... Yes, ${original} is a palindrome you naughty person! &#128527&#128527&#128527`;
  } else {
    let reverseString = "";
    original = original.toLowerCase();
    //  .length gets number of characters in strength
    // But when trying to access characters in string using bracket notation, it uses a 0 index.
    // So the index of the last character in the string is actually i-1
    for (let i = original.length; original.length - i != original.length; i--) {
      reverseString += original[i - 1];
    }

    if (original == reverseString) {
      output.innerHTML = `${userInput.value} <span style="color:#4bb347; font-weight: 500">IS</span> a palindrome.
    The reversed text is ${reverseString}.`;
    } else {
      output.innerHTML = `${userInput.value} is <span style="color:rgb(215, 126, 126); font-weight: 500">NOT</span> a palindrome.
    The reversed text is ${reverseString}.`;
    }
  }
};

let dom = document;
let userInput = dom.querySelector("#input");
let output = dom.querySelector("#output");
let checkBtn = dom.querySelector("#check");

checkBtn.addEventListener("click", () => {
  palindrome(userInput.value);
});

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    palindrome(userInput.value);
  }
});
