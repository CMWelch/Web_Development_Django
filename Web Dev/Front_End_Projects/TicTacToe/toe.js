var boxes = document.querySelectorAll("td")
var restart = document.querySelector("#b")
function clearB()
{
  for(var i = 0; i < boxes.length; i++)
  {
    boxes[i].textContent = "";
  }
}

function bContent()
{
  if(this.textContent === "")
  {
    this.textContent = "X";
  }
  else if(this.textContent === "X")
  {
    this.textContent = "O";
  }
  else
  {
    this.textContent = '';
  }
}

restart.addEventListener("click", clearB)

for(var i = 0; i < boxes.length; i++)
{
  boxes[i].addEventListener("click", bContent)

}
