window.addEventListener("load", loadAvvenuto);

function loadAvvenuto() {
   const sliderContainer = document.getElementById("slider");

   sliderContainer.addEventListener("click", gestioneSliderClick);

   let idTimer = setInterval(slider, 5000);
   let imgInsideColorPicker = document.querySelector(".color-picker-selected img");
   let pulsanteToggleBlendMode = document.querySelector(".settings .toggle-colori");
   let pulsanteToggleImmagine = document.querySelector(".settings .toggle-immagini");

   pulsanteToggleImmagine.addEventListener("click", function () {
      imgInsideColorPicker.classList.toggle("nascondi-immagine");

      /* Imposto il src dell'immagine nel caso diventi visibile per visualizzare
      l'immagine corrente del carosello */
      /*   imgInsideColorPicker.getAttribute(
         "src",
         document.querySelector("#slider .visibile").getAttribute("src")
      ); */
   });

   pulsanteToggleBlendMode.addEventListener("click", function () {
      imgInsideColorPicker.classList.toggle("elimina-blend-mode");
   });

   imgInsideColorPicker.setAttribute(
      "src",
      document.querySelector("#slider .visibile").getAttribute("src")
   );

   document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
         clearInterval(idTimer);
      } else {
         idTimer = setInterval(slider, 5000);
      }
   });

   function gestioneSliderClick() {
      clearInterval(idTimer);
      slider();
      idTimer = setInterval(slider, 5000);
   }

   function slider() {
      let imgVisibile;
      let imgProssima;
      let nextProssimaImmagineFratello;
      let newImmagineVisibile;
      imgVisibile = document.querySelector(".visibile");
      imgVisibile.classList.remove("visibile");

      imgProssima = document.querySelector(".prossima");
      /* imgProssima.classList.remove("prossima");
   imgProssima.classList.add("visibile"); */
      imgProssima.classList.replace("prossima", "visibile");

      newImmagineVisibile = document.querySelector(".visibile");
      nextProssimaImmagineFratello = newImmagineVisibile.nextElementSibling;
      imgInsideColorPicker.setAttribute("src", newImmagineVisibile.getAttribute("src"));

      if (nextProssimaImmagineFratello != null) {
         nextProssimaImmagineFratello.classList.add("prossima");
      } else {
         //Se qui nell'else se non c'è un fratello destro, cioè nextElementSibling ha tornato null
         //document.querySelector("#slider img:first-of-type")
         let nodoPadre = newImmagineVisibile.parentElement;
         console.log(nodoPadre);
         let nodiFigli = nodoPadre.children;
         console.log(nodiFigli);

         let primoFiglio = nodiFigli[0];
         console.log(primoFiglio);
         primoFiglio.classList.add("prossima");
      }
   }
}
