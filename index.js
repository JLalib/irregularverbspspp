let preguntas_aleatorias = true;
let mostrar_pantalla_juego_términado = true;
let reiniciar_puntos_al_reiniciar_el_juego = true;

let interprete_bp;

window.onload = function () {
  // Intentar cargar desde variable global primero, luego desde archivo
  if (typeof base_preguntas !== 'undefined') {
    interprete_bp = JSON.parse(base_preguntas);
  } else {
    // Intentar cargar desde archivo
    try {
      const texto = readText("base-preguntas.json");
      interprete_bp = JSON.parse(texto);
    } catch(e) {
      console.error("Error cargando preguntas:", e);
      alert("Error: No se pudieron cargar las preguntas. Por favor, verifica que el archivo base-preguntas.json esté en la misma carpeta.");
      return;
    }
  }
  
  if (!interprete_bp || interprete_bp.length === 0) {
    alert("Error: No hay preguntas disponibles.");
    return;
  }
  
  escogerPreguntaAleatoria();
};

let pregunta;
let posibles_respuestas;
btn_correspondiente = [
  select_id("btn1"),
  select_id("btn2"),
  select_id("btn3"),
  select_id("btn4")
];
let npreguntas = [];

let preguntas_hechas = 0;
let preguntas_correctas = 0;

function escogerPreguntaAleatoria() {
  let n;
  if (preguntas_aleatorias) {
    n = Math.floor(Math.random() * interprete_bp.length);
  } else {
    n = 0;
  }

  while (npreguntas.includes(n)) {
    n++;
    if (n >= interprete_bp.length) {
      n = 0;
    }
    if (npreguntas.length == interprete_bp.length) {
      // Juego finalizado con estilo mejorado
      if (mostrar_pantalla_juego_términado) {
        const porcentaje = Math.round((preguntas_correctas / (preguntas_hechas - 1)) * 100);
        let mensaje = "";
        let icono = "success";
        
        if (porcentaje === 100) {
          mensaje = "¡Perfecto! 🎉 ¡Eres un maestro de los verbos irregulares!";
          icono = "success";
        } else if (porcentaje >= 80) {
          mensaje = "¡Excelente trabajo! 🌟 ¡Sigue así!";
          icono = "success";
        } else if (porcentaje >= 60) {
          mensaje = "¡Buen trabajo! 👍 Sigue practicando.";
          icono = "info";
        } else {
          mensaje = "¡Sigue intentándolo! 💪 La práctica hace al maestro.";
          icono = "warning";
        }
        
        swal.fire({
          title: "🎮 Juego Finalizado",
          html: `
            <div style="font-size: 1.2em; margin: 20px 0;">
              <p style="margin: 10px 0;">${mensaje}</p>
              <p style="font-size: 2em; font-weight: bold; color: #667eea; margin: 20px 0;">
                ${preguntas_correctas}/${preguntas_hechas - 1}
              </p>
              <p style="font-size: 1.5em; color: #764ba2;">
                ${porcentaje}% de aciertos
              </p>
            </div>
          `,
          icon: icono,
          confirmButtonText: '🔄 Jugar de nuevo',
          confirmButtonColor: '#667eea',
          background: '#fff',
          backdrop: `
            rgba(102, 126, 234, 0.4)
            left top
            no-repeat
          `
        });
      }
      if (reiniciar_puntos_al_reiniciar_el_juego) {
        preguntas_correctas = 0;
        preguntas_hechas = 0;
      }
      npreguntas = [];
    }
  }
  npreguntas.push(n);
  preguntas_hechas++;

  escogerPregunta(n);
}

function escogerPregunta(n) {
  pregunta = interprete_bp[n];
  
  // Animación de entrada para la pregunta
  const preguntaElement = select_id("pregunta");
  preguntaElement.style.opacity = "0";
  preguntaElement.style.transform = "scale(0.9)";
  
  setTimeout(() => {
    select_id("categoria").innerHTML = pregunta.categoria;
    preguntaElement.innerHTML = pregunta.pregunta;
    select_id("numero").innerHTML = n + 1;
    
    preguntaElement.style.opacity = "1";
    preguntaElement.style.transform = "scale(1)";
  }, 100);
  
  let pc = preguntas_correctas;
  if (preguntas_hechas > 1) {
    select_id("puntaje").innerHTML = `⭐ ${pc} / ${preguntas_hechas - 1}`;
  } else {
    select_id("puntaje").innerHTML = "🎯 ¡Comienza!";
  }

  style("imagen").objectFit = pregunta.objectFit;
  desordenarRespuestas(pregunta);
  
  if (pregunta.imagen) {
    select_id("imagen").setAttribute("src", pregunta.imagen);
    style("imagen").height = "200px";
    style("imagen").width = "100%";
  } else {
    style("imagen").height = "0px";
    style("imagen").width = "0px";
    setTimeout(() => {
      select_id("imagen").setAttribute("src", "");
    }, 500);
  }
}

function desordenarRespuestas(pregunta) {
  posibles_respuestas = [
    pregunta.respuesta,
    pregunta.incorrecta1,
    pregunta.incorrecta2,
    pregunta.incorrecta3,
  ];
  posibles_respuestas.sort(() => Math.random() - 0.5);

  // Animación de entrada para los botones
  btn_correspondiente.forEach((btn, index) => {
    btn.style.opacity = "0";
    btn.style.transform = "translateY(20px)";
    
    setTimeout(() => {
      btn.innerHTML = posibles_respuestas[index];
      btn.style.opacity = "1";
      btn.style.transform = "translateY(0)";
    }, 100 * (index + 1));
  });
}

let suspender_botones = false;

function oprimir_btn(i) {
  if (suspender_botones) {
    return;
  }
  suspender_botones = true;
  
  // Remover clases previas
  btn_correspondiente.forEach(btn => {
    btn.classList.remove('correct', 'incorrect');
  });
  
  if (posibles_respuestas[i] == pregunta.respuesta) {
    preguntas_correctas++;
    btn_correspondiente[i].classList.add('correct');
    
    // Efecto de confeti o celebración
    crearConfeti();
  } else {
    btn_correspondiente[i].classList.add('incorrect');
  }
  
  // Mostrar la respuesta correcta
  for (let j = 0; j < 4; j++) {
    if (posibles_respuestas[j] == pregunta.respuesta) {
      btn_correspondiente[j].classList.add('correct');
      break;
    }
  }
  
  setTimeout(() => {
    reiniciar();
    suspender_botones = false;
  }, 1200);
}

function reiniciar() {
  btn_correspondiente.forEach(btn => {
    btn.classList.remove('correct', 'incorrect');
    btn.style.background = "";
    btn.style.color = "";
    btn.style.borderColor = "";
  });
  escogerPreguntaAleatoria();
}

// Función para crear efecto de confeti cuando se acierta
function crearConfeti() {
  const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#84fab0', '#8fd3f4'];
  const confettiCount = 30;
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    confetti.style.opacity = '1';
    confetti.style.zIndex = '1000';
    confetti.style.pointerEvents = 'none';
    
    document.body.appendChild(confetti);
    
    const animation = confetti.animate([
      { 
        transform: 'translateY(0) rotate(0deg)',
        opacity: 1
      },
      { 
        transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`,
        opacity: 0
      }
    ], {
      duration: Math.random() * 1000 + 1000,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
    
    animation.onfinish = () => {
      confetti.remove();
    };
  }
}

function select_id(id) {
  return document.getElementById(id);
}

function style(id) {
  return select_id(id).style;
}

function readText(ruta_local) {
  var texto = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", ruta_local, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    texto = xmlhttp.responseText;
  }
  return texto;
}
