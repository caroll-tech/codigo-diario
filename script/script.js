const news = [
  {
    page: "portada",
    categoria: "Economia",
    titulo: "Económica clave",
    imagen: "./img/Ipc.jpg",
    texto:
      "<p> Anuncio de tasas de interés, apuestas para <em>Iamcec e IPC. </em></br>El banco Central marcará pauta cuando publique el Imacec de abril este lunes, difundará su informe de Política Monetaria. Por su parte, el<strong> INE</strong> revelará el dato inflactorio de abril.</p > ",
  },
  {
    page: "portada",
    categoria: "Inteligencia Artificial",
    titulo: "Cómo las universidades están liadiando con ChatGPT",
    imagen: "./img/chatGPT.jpg",
    texto: `<strong>Más exámenes orales, ensayos escritos a mano y tareas en clase:</strong> 
        <p>Cómo las universidades están liadiando con ChatGPT
        la proleferación de casos en que en esta herramienta de IA se está mal usando para 
        redactar trabajos académicos está llevando a las instituciones a 
        ya puede hacer trabajos para la universidad, algunos profesores están
        elaborando preguntas que, esperan,seandemasiado ingeniosas para
        ChatGPT, como pedir que escriban sobre sus propias vidas.</p>`,
  },
  {
    page: "portada",
    categoria: "Nacional",
    titulo: "Informes ACADES",
    imagen: "./img/ProyectoIndustrial.jpg",
    texto: `<p><strong>Proyectos industriales de desalinización en Atacama podrían cambiar el escenario hídrico en Chile.</strong>Recientemente, la Asociación Chilena de Desalinización (ACADES) presentó oficialemnte el primer catastro nacional de plantas y proyectos de desalinización de agua de mar en el país.</p> `,
  },
  {
    page: "deporte",
    categoria: "Basquetbol",
    titulo: "Temporada regular de la NBA.",
    imagen: "./img/baloncesto.jpeg",
    texto:
      " <p>Se acerca el cierre de la temporada regular de la <em>NBA</em>. La lucha por meterse a playoffs está muy apretada. <strong>Solo hay cuatro de 30 equipos que ya no tienen ninguna opción de clasificar:</strong> Detroit, Houston, Charlotte y San Antonio. Nunca hubo una definición tan apretada en toda la historia de la mejor liga de basquet del mundo.</p>",
  },
  {
    page: "deporte",
    categoria: "Rugby",
    titulo: "Como va Selknam en el Súper Rugby Américas",
    imagen: "./img/rugbistas.jpg",
    texto: `<p>Como va Selknam en el Súper Rugby Américas cuando ya va casi la mitad del torneo. La tabla, su próximo desafío y la importancia para los "Cóndores". Los Chilenos de la franquicia buscan ganarse un puesto en Francia 2023. El super Rugby, ya va casi en la mitad y con Selknam, de momento, clasificando a las semifinales.</p>`,
  },
  {
    page: "deporte",
    categoria: "Balonmano",
    titulo: "El gran momento del balonmano chileno",
    imagen: "./img/balonmano.jpg",
    texto: `<p><strong>El gran momento del balonmano chileno haciendo historia en mundiales</strong>El balonmano Chileno vive un gran momento a nivel de selecciones.Ya en enero el equipo masculino terminó 26° en el Mundial Polonia-Suecia 2023, y hace algunas semanas, la selección femenina clasificó tras 14 años a una cita planetaria.</p>`,
  },
  {
    page: "negocio",
    categoria: "Nacional",
    titulo: "Perspectivas económicas 2023",
    imagen: "./img/inversionistas.jpg",
    texto: `<p><strong>Perspectivas económicas 2023 para las empresas en Chile:</strong> Exministro Briones adelantó complejo escenario para el próximo año.
                 En el caso de Chile las noticias son malas.
                 El crecimiento del 2023 está completamente jugado, no hay nada que hacer,  ya estamos en recesión. Las estimaciones para el próximo año varían en una
                 caída del 0.5, que es la que dice el Gobierno, y el Banco Central y organismos  internacionales están más arriba,quizás vamos a estar en una caída de 1 o 1,05 
                 por ciento y esto es grave, no lo veíamos desde la crisis subprime(2007),   expresó el exministro.</p>`,
  },
  {
    page: "negocio",
    categoria: "Nacional",
    titulo: "Crecimiento 2023: más cautela que nunca.",
    imagen: "./img/economia.jpg",
    texto: `<p>No fue poca la conmoción que generó el alza de 0,4% del Imacec en enero. Ello no era de extrañar, ya que, junto con ubicarse muy por sobre las expectativas de mercado, también constituyó el primer registro positivo desde </br>Agosto de 2022. Luego de su publicación, la Encuesta de Expectativas Económicas del Banco Central mostró una importante mejora en las</br> estimaciones de crecimiento para este año, en un contexto donde las máximas autoridades del Ejecutivo llevaron a cabo una activa ( y poco frecuente) vocería sobre el aparentamente buen desempeño de la economía.</p>`,
  },
  {
    page: "negocio",
    categoria: "Nacional",
    titulo: "Grave coordinación entre casinos",
    imagen: "./img/ahorro.jpg",
    texto: `<p>Grau califica de <em>sumamente grave</em> la coordinación entre casinos y Marcel dice que el regulador está mirando "con mucha atención"el caso.Lo primero que quiero decir, expresó Grau, es que es una situación sumamente grave. Cualquier actuación de privados que a través de la coodinación u otro mecanismo lo que hacen</br> es alterar las situaciones de competencia, termina afectando finalmente a los individuos. Y no solo genera un desmedro en los ingresos de las personas que participan en ese mercado, sino que además deslegitima todo el mercado en general, sentenció. El ministro de Hacienda, Mario Marcel, respecto al tema señaló que <strong>"hemos visto esta información",</strong> la entidad responsable de supervisar los casinos de juegos en este ministerio es la superintendencia del ramo.</p>`,
  },
];

const showNews = (articulos) => {
  let elemento = document.getElementById("otranoticia");
  let news = "";
  console.log(articulos.length);
  for (let i = 0; i < articulos.length; i++) {
    news =
      news +
      `<div class="card">
        <img src="${articulos[i].imagen}" class="rounded"  alt="${articulos[i].imagen}">
        <div class="card-body">
            <h5 class="card-title">${articulos[i].titulo}</h5>
            <p class="card-text">${articulos[i].texto}</p>
            <a href="#" class="btn btn-primary">${articulos[i].categoria}</a>
        </div>
        </div>`;
  }
  elemento.innerHTML = news;
};

const showNoticias = (pagina) => {
  let elemento = document.getElementById("otranoticia");
  let xmlNews = "";

  for (let i = 0; i < news.length; i++) {
    if (news[i].page == pagina) {
      xmlNews =
        xmlNews +
        `<div class="card">
        <img src="${news[i].imagen}" class="rounded"  alt="${news[i].imagen}">
        <div class="card-body">
            <h5 class="card-title">${news[i].titulo}</h5>
            <p class="card-text">${news[i].texto}</p>
            <a href="#" class="btn btn-primary">${news[i].categoria}</a>
        </div>
        </div>`;
    }
  }
  elemento.innerHTML = xmlNews;
  masNoticias("off");
};
const addNews = () => {
  const fieldTitulo = document.getElementById("field-titulo").value;
  const fieldCuerpo = document.getElementById("field-cuerpo").value;
  const fieldUbicacion = document.getElementById("field-ubicacion").value;
  const fieldDestacado = document.getElementById("field-destacado").value;
  console.log("datos");
  console.log(fieldTitulo, fieldCuerpo, fieldUbicacion, fieldDestacado.value);
  const nuevaNoticia = {
    page: fieldUbicacion,
    categoria: "Nueva Noticia",
    titulo: fieldTitulo,
    imagen: "./img/wewspaper.jpg",
    texto: fieldCuerpo,
  };
  news.push(nuevaNoticia);
  console.log(nuevaNoticia);
  console.log(news);
  
};

const ponerHora = () => {
  const element = document.getElementById("fechahora");
  const hora_actual = new Date();
  const minuto = `${hora_actual.getMinutes()}`.padStart(2, 0);
  const segundo = `${hora_actual.getSeconds()}`.padStart(2, 0);

  element.innerHTML = `${hora_actual.getHours()}:${minuto}:${segundo}`;
};

setInterval(() => {
  ponerHora();
}, 1000);

//inicio del codigo

const masNoticias = (onoff) => {
  let formulario = document.getElementById("mas-noticias");
  let elemento = document.getElementById("otranoticia");
  if (onoff == "on") {
    formulario.style.display = "block";
    elemento.style.display = "none";
  } else {
    formulario.style.display = "none";
    elemento.style.display = "block";
  }
};

masNoticias("off");
showNoticias("portada");
