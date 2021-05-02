//Variables para manipulación del DOM
let animalSelector = document.getElementById("animal");
let ageInput = document.getElementById("edad");
let comentarios = document.getElementById("comentarios");
let imgVisor = document.getElementById("preview");
let visorContainer = document.getElementById("previewContainter");
let btnRegistrar = document.getElementById("btnRegistrar");
let divTabla = document.getElementById("animales");

//Clases
import Leon from "./leon.js";
import Lobo from "./lobo.js";
import Oso from "./oso.js";
import Serpiente from "./serpiente.js";
import Aguila from "./aguila.js";


//IIFE + evento de selector + consulta API

(() => {
    animalSelector.addEventListener("change", async() => {
        const { data } = await axios.get("/animales.json");
        const animalsArray = data.animales;
        console.log(animalsArray);
        const animalData = animalsArray.find( animal => 
            animal.name == animalSelector.value);
        console.log(animalData)
            let foto = animalData.imagen;
            imgVisor.style.backgroundImage = `url(assets/imgs/${foto})`;
            imgVisor.style.backgroundSize = "cover";
            visorContainer.style.padding="0";
    });
})();

//crear las instancias de los animales asociandolas a los selectores del html

//Asociar el evento submit con la generación de una instancia de la clase animal con la subclase correspondiente, que incluya la incorporación de esa instancia a la tabla.

//Crear los métodos de sonido de cada animal en sus clases, usando la etiqueta <audio src=...></audio>
