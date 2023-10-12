 
const creazioneTab = () => {

  const tabella = document.getElementById("numeri")

  for (let i = 0; i < 91; i++) {
  const numDiv = document.createElement("div")
  numDiv.classList.add("numero")

  const textTable = document.createElement("h3")
  textTable.innerHTML.text = 1

  numDiv.appendChild(textTable)
  numeri.appendChild(numDiv)
}

}


window.onload = () => {
  creazioneTab()
}




const casualNumber = () => {
  const number = Math.round(Math.random()*91) 

const btnNum = document.getElementById("bottone").innerHTML("Numero casuale " + num)

}
