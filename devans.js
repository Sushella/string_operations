/* 1)document.querySelectorAll('.like-btn').forEach(btn => 
    {
        btn.addEventListener('click', () =>      
    {
        btn.classList.toggle('liked');
    });
});*/





/*function pink() {
    document.body.style.backgroundColor = "pink"

}
function crimson() {
    document.body.style.backgroundColor = "crimson"
}
function purple() {
    document.body.style.backgroundColor = "purple"

}
function dotted() {
    document.getElementById("box5").style.border = "dotted 2px green"
}
function dashed() {
    document.getElementById("box6").style.border = "dashed 2px green"
}
function rideg() {
    document.getElementById("box7").style.border = "ridge 8px green"
}
function pranithya() {
    document.getElementById("i7").innerHTML ="pranithya"

    document.getElementById("i12").style.backgroundColor="violet"
}
function nisarga() {
    document.getElementById("i8").innerHTML ="nisarga"

    document.getElementById("i11").style.backgroundColor ="crimson"
}
function dheeksha() {
    document.getElementById("i9").innerHTML = "dheeksha"
    document.getElementById("i10").style.backgroundColor ="purple"
}*/





function analyzeString() {
  let str = document.getElementById("inputStr").value.trim();
  let result = "";

 
  let words = str.split(" ").filter(w => w !== "");

  result += "<p><b>Length:</b> " +  str.length + "</p>";


  result += "<p><b>Uppercase:</b> "  + str.toUpperCase() + "</p>";


  result += "<p><b>Lowercase:</b> " + str.toLowerCase() + "</p>";

  let middle = "NA";
  if (words.length === 1) {
    let word = words[0];
    let len = word.length;
    if (len % 2 === 0) {
      middle = word[len/2 - 1] + word[len/2];  
    } else {
      middle = word[Math.floor(len/2)];      
    }
  }
  result += "<p><b>Middle character:</b> " + middle + "</p>";


  result += "<p><b>Total words:</b> " + words.length + "</p>";

  let vowels = "aeiouAEIOU";
  let vowelCount = 0, consonantCount = 0;

  for (let ch of str) {
    if (/[a-zA-Z]/.test(ch)) {  
      if (vowels.includes(ch)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }

  result += "<p><b>Vowels count:</b> " + vowelCount + "</p>";
  result += "<p><b>Consonants:</b> " + consonantCount + "</p>";

 
  let camelCase = "";
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      camelCase += words[i].toLowerCase();
    } else {
      camelCase += " " + words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
  }
  result += "<p><b>CamelCase:</b> " + camelCase + "</p>";


  document.getElementById("output").innerHTML = result;
}

