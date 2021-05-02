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


//Función para consulta de Api
const getAnimal = async (ruta) => {
    const { data } = await axios.get(ruta);
    const animalsArray = data.animales;
    const animalData = animalsArray.find( animal => 
        animal.name == animalSelector.value);
    return animalData
}

//IIFE + evento de selector + consulta API: Cambio de imagen según selector
(() => {
    animalSelector.addEventListener("change", async() => {
        getAnimal("/animales.json").then(resp => {
            let foto = resp.imagen;
            imgVisor.style.backgroundImage = `url(assets/imgs/${foto})`;
            imgVisor.style.backgroundPosition = "center";
            visorContainer.style.padding="0";
        })
    });
})();

//IIFE + evento de selector + consulta API: Creación de instancia
(() => {
    btnRegistrar.addEventListener("click", async() => {
        getAnimal("/animales.json").then(resp => {
            let sonidoAnimal = resp.sonido;
            let foto = resp.imagen;
            let animalClass = animalSelector.value;
            let nuevoAnimal = {};
            if (animalClass == "Leon") {
                nuevoAnimal = new Leon(animalSelector.value, ageInput.value, foto, comentarios.value, sonidoAnimal);
            } else if (animalClass == "Lobo") {
                nuevoAnimal  = new Lobo(animalSelector.value, ageInput.value, foto, comentarios.value, sonidoAnimal);
            } else if (animalClass == "Oso") {
                nuevoAnimal  = new Oso(animalSelector.value, ageInput.value, foto, comentarios.value, sonidoAnimal);
            } else if (animalClass == "Serpiente") {
                nuevoAnimal  = new Serpiente(animalSelector.value, ageInput.value, foto, comentarios.value, sonidoAnimal);
            } else {
                nuevoAnimal  = new Aguila(animalSelector.value, ageInput.value, foto, comentarios.value, sonidoAnimal);
            }
            console.log(nuevoAnimal)
        })
    })
})();

//crear las instancias de los animales asociandolas a los selectores del html

//Asociar el evento submit con la generación de una instancia de la clase animal con la subclase correspondiente, que incluya la incorporación de esa instancia a la tabla.

//Crear los métodos de sonido de cada animal en sus clases, usando la etiqueta <audio src=...></audio>
