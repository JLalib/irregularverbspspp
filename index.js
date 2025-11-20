let preguntas_aleatorias = true;
let mostrar_pantalla_juego_términado = true;
let reiniciar_puntos_al_reiniciar_el_juego = true;

let interprete_bp = [];
let pregunta;
let posibles_respuestas;
let preguntas_hechas = 0;
let preguntas_correctas = 0;
let npreguntas = [];
let btn_correspondiente = [];

window.onload = async function () {
  const resp = await fetch("base-preguntas.json");
  interprete_bp = await resp.json();

  btn_correspondiente = [
    select_id("btn1"),
    select_id("btn2"),
    select_id("btn3"),
    select_id("btn4")
  ];

  escogerPreguntaAleatoria();
};

function escogerPreguntaAleatoria() {

  if (npreguntas.length === interprete_bp.length) {
    finalizarJuego();
    return;
  }

  let n;
  do {
    n = Math.floor(Math.random() * interprete_bp.length);
  } while (npreguntas.includes(n));

  npreguntas.push(n);
  preguntas_hechas++;

  escogerPregunta(n);
}

function escogerPregunta(n) {
  pregunta = interprete_bp[n];

  select_id("categoria").innerHTML = pregunta.categoria;
  select_id("pregunta").innerHTML = pregunta.pregunta;
  select_id("numero").innerHTML = preguntas_hechas;

  select_id("puntaje").innerHTML =
    preguntas_hechas > 1
      ? `${preguntas_correctas}/${preguntas_hechas - 1}`
      : "";

  desordenarRespuestas(pregunta);
}

function desordenarRespuestas(p) {
  posibles_respuestas = [
    p.respuesta,
    p.incorrecta1,
    p.incorrecta2,
    p.incorrecta3
  ];
  posibles_respuestas.sort(() => Math.random() - 0.5);

  btn_correspondiente.forEach((btn, i) => {
    btn.innerHTML = posibles_respuestas[i];
    btn.className = "btn"; // limpiar colores
  });
}

function oprimir_btn(i) {
  let btn = btn_correspondiente[i];

  if (posibles_respuestas[i] === pregunta.respuesta) {
    preguntas_correctas++;
    btn.classList.add("correcto");
  } else {
    btn.classList.add("incorrecto");

    btn_correspondiente.forEach((b, index) => {
      if (posibles_respuestas[index] === pregunta.respuesta) {
        b.classList.add("correcto");
      }
    });
  }

  setTimeout(() => {
    escogerPreguntaAleatoria();
  }, 700);
}

function finalizarJuego() {
  Swal.fire({
    title: "¡Juego finalizado!",
    text: `Puntuación: ${preguntas_correctas}/${preguntas_hechas}`,
    icon: "success",
    background: "#1e293b",
    color: "#fff",
    confirmButtonColor: "#22c55e",
  });

  if (reiniciar_puntos_al_reiniciar_el_juego) {
    preguntas_correctas = 0;
    preguntas_hechas = 0;
  }
  npreguntas = [];
  setTimeout(() => escogerPreguntaAleatoria(), 1000);
}

function select_id(id) {
  return document.getElementById(id);
}
