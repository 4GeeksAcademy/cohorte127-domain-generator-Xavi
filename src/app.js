import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function () {
  const pronouns = ['the', 'our']
  const adjectives = ['great', 'big']
  const noun = ['jogger', 'racoon']
  for (let p = 0; p < pronouns.length; p++) {
    for (let a = 0; a < adjectives.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        document.getElementById("Domain").innerHTML+="<li>"+pronouns[p]+adjectives[a]+noun[n]+".com </li>"
      }
    }
  }
  console.log("Hello Rigo from the console!");
};