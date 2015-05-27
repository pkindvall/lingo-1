//Slumpar ett ord från listan
var ordLista = ["mjauu", "malin", "banan"];
var valtOrd = ordLista[Math.floor(Math.random() * 3)];
console.log(valtOrd);

//Användaren gissar ett ord
var button  = document.getElementsByTagName("button")[0];
button.addEventListener("click", function() {
  var anvandarOrd = document.getElementsByTagName("input")[0].value;
  
  if(valtOrd === anvandarOrd)
  {
    alert("GRATTIIIS");
  }
  else
  {
    alert("OBS!! FÖRSÖK IGEN ")
  }
  
})


