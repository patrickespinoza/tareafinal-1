import { fetchAllPets } from "./modules/petApi.js";

const createPetCard = (petObject) => {
  let { name, color, tamaño, picture, modelo, key } = petObject;

  // Crear el contenedor principal
  const colDiv = document.createElement("div");
  colDiv.classList.add("col-6");

  // Crear el enlace
  const link = document.createElement("a");
  link.href = `../view/detalle.html?petKey=${key}`;

  // Crear la tarjeta
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "pet-card", "p-0", "overflow-hidden", "h-100");

  // Crear la fila
  const rowDiv = document.createElement("div");
  rowDiv.classList.add("row", "g-0", "h-100");

  // Crear la columna para la imagen
  const imageColDiv = document.createElement("div");
  imageColDiv.classList.add("col-md-3");

  // Crear la imagen
  const img = document.createElement("img");
  img.src = picture;
  img.classList.add("pet-card__picture");
  img.alt = "...";

  // Agregar la imagen a la columna de la imagen
  imageColDiv.appendChild(img);

  // Crear la columna para el contenido de la tarjeta
  const contentColDiv = document.createElement("div");
  contentColDiv.classList.add("col-md-8");

  // Crear el cuerpo de la tarjeta
  const cardBodyDiv = document.createElement("div");
  cardBodyDiv.classList.add("card-body");

  // Crear el título de la tarjeta
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = name;

  // Crear la lista
  const ul = document.createElement("ul");
  ul.classList.add("list-group");

  // Crear los elementos de la lista
  const modeloLi = document.createElement("li");
  modeloLi.classList.add("list-group-item");
  modeloLi.textContent = `Modelo: ${modelo}`;

  const colorLi = document.createElement("li");
  colorLi.classList.add("list-group-item");
  colorLi.textContent = `Color: ${color}`;

  const tamañoLi = document.createElement("li");
  tamañoLi.classList.add("list-group-item");
  tamañoLi.textContent = `Tamaño: ${tamaño} años`;

  // Agregar los elementos de la lista al cuerpo de la tarjeta
  ul.appendChild(modeloLi);
  ul.appendChild(colorLi);
  ul.appendChild(tamañoLi);

  // Agregar el título y la lista al cuerpo de la tarjeta
  cardBodyDiv.appendChild(cardTitle);
  cardBodyDiv.appendChild(ul);

  // Agregar el cuerpo de la tarjeta a la columna del contenido
  contentColDiv.appendChild(cardBodyDiv);

  // Agregar las columnas a la fila
  rowDiv.appendChild(imageColDiv);
  rowDiv.appendChild(contentColDiv);

  // Agregar la fila a la tarjeta
  cardDiv.appendChild(rowDiv);

  // Agregar la tarjeta al enlace
  link.appendChild(cardDiv);

  // Agregar el enlace al contenedor principal
  colDiv.appendChild(link);

  // Agregar el contenedor principal al documento
  document.body.appendChild(colDiv);
};

const printPets = (petsArray, wrapperId) => {
  let wrapper = document.getElementById(wrapperId);
  /* la siguiente línea debe ser reemplazada por el ciclo while que borra todos los childs de un elemento */
  wrapper.innerHTML = "";

  petsArray.forEach((pet) => {
    let currentContent = wrapper.innerHTML;
    wrapper.innerHTML = currentContent + createPetCard(pet);
  });
};

const printAllPets = async () => {
  let petsArray = await fetchAllPets();
  printPets(petsArray, "pets-wrapper");
};

printAllPets();
