let pickerElements;
pickerElements = document.querySelectorAll(".color-picker-element");

let colorPickedBox = document.querySelector(".color-picker-selected");

for (let i = 0; i < pickerElements.length; i++) {
   /* Metto il gestore sia al click che al mouseover perchè 
   l'evento mouseover non c'è nel mobile */
   pickerElements[i].onclick = pickerElements[i].onmouseover = gestisciColorePickerElement;
   pickerElements[i].style.backgroundColor = pickerElements[i].dataset.color;
}

function gestisciColorePickerElement(e) {
   let elementoSelezionato = e.target;
   let colorPicked;
   colorPicked = elementoSelezionato.style.backgroundColor;
   colorPickedBox.style.backgroundColor = colorPicked;
}
