const $galeria = document.querySelector(".galeria");

const lista_proyectos = [
  {
    titulo: "Búsquedas de instituciones educativas generales básicas",
    descripción: "Proyecto API",
    imagen: "img/proyecto(1).jpg",
    archivo: "pdfs/proyecto(1).pdf",
  },
  {
    titulo: "Anotador y organizador de turnos",
    descripción: "Proyecto API",
    imagen: "img/proyecto(2).jpg",
    archivo: "pdfs/proyecto(2).pdf",
  },
  {
    titulo: "Aplicación de mapa de eventos interactivo",
    descripción: "Proyecto API",
    imagen: "img/proyecto(3).jpg",
    archivo: "pdfs/proyecto(3).pdf",
  },
  {
    titulo: "Arte fractal",
    descripción: "",
    imagen: "img/proyecto(4).jpg",
    archivo: "pdfs/proyecto(4).pdf",
  },
  {
    titulo: "juego de ta-te-tí y paddle en processing",
    descripción: "",
    imagen: "img/proyecto(5).jpg",
    archivo: "pdfs/proyecto(5).pdf",
  },
];

const TEXTO_HTML = lista_proyectos.map(
  ({ titulo, descripción, imagen, archivo }) => {
    return /*html*/ `<div class="tarjeta"><img src="${imagen}" alt="Proyecto 1"><h3><a href="${archivo}" target="_blank">${titulo}</a></h3><p>${descripción}</p></div>`;
  }
);

$galeria.innerHTML = TEXTO_HTML;
