const btnEl =  document.getElementById("myBtn");

btnEl.addEventListener("mouseover", (event) => {
 const x =  (event.pageX - btnEl.offsetLeft);
 const Y =  (event.pageY - btnEl.offsetTop);

 btnEl.style.setProperty("--xPos", x + "px");
 btnEl.style.setProperty("--yPos",y + "px")
})