//Slumpar ett ord från listan
var ordLista = ["mjauu", "malin", "banan"];
var valtOrd = ordLista[Math.floor(Math.random() * 3)];
console.log(valtOrd);

//Användaren gissar ett ord
var button  = document.getElementsByTagName("button")[0];
button.addEventListener("click", function() {
  var anvandarOrd = document.getElementsByTagName("input")[0].value;
  
  //Hämta rutor och lägg in bokstäverna rätt
  var rutor = document.getElementsByTagName("td");
  
  
  for(var i = 0; i < 5; i++)
  {
    rutor[i].innerHTML = anvandarOrd[i];
    
    if(anvandarOrd[i] === valtOrd[i])
    {
      rutor[i].style.background = "green";
    }
    else
    {
      rutor[i].style.background = "red";
    }
  }
  
  

  
})


