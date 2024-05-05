import { fetchPetByKey } from "./modules/petApi.js";

/*Para extraer parámetros de la url:*/

/*1: Guardamos la url en una variable*/
const url = window.location.href;

/*2: Creamos una instancia del objeto URLSearch params*/
const params = new URLSearchParams(new URL(url).search);

/*3: Extraemos el parámetro que deseamos*/
let petKey = params.get("petKey");
console.log(petKey);

const printPetData = async (petKey) => {
  let petData = await fetchPetByKey(petKey);
  console.log(petData);
  let {
    name,
    tamaño,
    Certificado,
    HechoEnMexico,
    color,
    modelo,
    picture,
    Descripcion,
  } = petData;

  document.getElementById("pet-picture").setAttribute("src", picture);
  document.getElementById("pet-name").innerText = name;
  document.getElementById("pet-presentation").innerText = Descripcion;
  document.getElementById("pet-specie").innerText = modelo;
  document.getElementById("pet-breed").innerText = color;
  document.getElementById("pet-age").innerText = tamaño;
  document.getElementById("pet-sterilized").innerText = HechoEnMexico
    ? "Sí"
    : "No";
  document.getElementById("pet-is-vaccinate").innerText = Certificado
    ? "Sí"
    : "No";
};

printPetData(petKey);
