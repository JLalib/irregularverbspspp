# ✨ Irregular Verbs Game

<div align="center">

![Irregular Verbs Game](https://raw.githubusercontent.com/JLalib/irregularverbspspp/main/img/irverbs.png)

**Una forma divertida e interactiva de aprender verbos irregulares en inglés**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[Demo en Vivo](https://jlalib.github.io/irregularverbspspp/) • [Reportar Bug](https://github.com/JLalib/irregularverbspspp/issues) • [Solicitar Característica](https://github.com/JLalib/irregularverbspspp/issues)

</div>

---

## 📖 Descripción

**Irregular Verbs Game** es una aplicación web educativa diseñada para ayudar a estudiantes de inglés a dominar los verbos irregulares de manera divertida e interactiva. Con un diseño moderno y animaciones atractivas, aprender nunca fue tan entretenido.

### ✨ Características Principales

- 🎮 **Juego Interactivo** - Practica más de 80 verbos irregulares
- 🎨 **Diseño Moderno** - Interfaz elegante con gradientes y glassmorphism
- 🎯 **Sistema de Puntuación** - Rastrea tu progreso en tiempo real
- ✅ **Feedback Visual** - Colores y animaciones para respuestas correctas/incorrectas
- 🎊 **Efectos de Confeti** - Celebración cuando aciertas
- 📱 **Responsive** - Funciona perfectamente en móviles, tablets y escritorio
- 🌟 **Sin Instalación** - Solo abre el HTML en tu navegador
- 🔄 **Preguntas Aleatorias** - Cada juego es diferente

---

## 🚀 Demo

Prueba el juego aquí: **[Irregular Verbs Game - Demo en Vivo](https://jlalib.github.io/irregularverbspspp/)**

### 📸 Capturas de Pantalla

<div align="center">

| Pantalla Principal | Respuesta Correcta | Finalización |
|:------------------:|:------------------:|:------------:|
| ![Main](https://via.placeholder.com/250x150/667eea/ffffff?text=Main+Screen) | ![Correct](https://via.placeholder.com/250x150/84fab0/ffffff?text=Correct!) | ![Complete](https://via.placeholder.com/250x150/f093fb/ffffff?text=Game+Over) |

</div>

---

## 🎯 Cómo Usar

### Opción 1: Uso Directo (Recomendado)

1. **Descarga el proyecto**
   ```bash
   git clone https://github.com/JLalib/irregularverbspspp.git
   cd irregularverbspspp
   ```

2. **Abre el archivo HTML**
   - Simplemente haz doble clic en `index.html`
   - O arrástralo a tu navegador favorito

3. **¡Empieza a jugar!** 🎉

### Opción 2: Servidor Local

Si prefieres usar un servidor local:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (npx)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

---

## 📁 Estructura del Proyecto

```
irregular-verbs-game/
│
├── index.html              # Archivo principal HTML
├── index.js                # Lógica del juego
├── base-preguntas.json     # Base de datos de preguntas
├── sweetalert2.all.min.js  # Librería para alertas bonitas
├── README.md               # Este archivo
│
└── img/                    # Imágenes y recursos
    ├── _logo_bilal_jebari.ico
    └── _logo_bilal_jebari_copyright.png
```

---

## 🎮 Cómo Jugar

1. **Lee el verbo** que aparece en la tarjeta principal
2. **Selecciona la respuesta correcta** entre las 4 opciones
3. **Recibe feedback instantáneo**:
   - 💚 Verde = ¡Correcto!
   - 💗 Rosa/Rojo = Incorrecto
4. **Completa todas las preguntas** para ver tu puntuación final
5. **Intenta mejorar** tu porcentaje de aciertos

### 🏆 Sistema de Puntuación

- **100%** - ¡Perfecto! 🎉 ¡Eres un maestro!
- **80-99%** - ¡Excelente trabajo! 🌟
- **60-79%** - ¡Buen trabajo! 👍
- **<60%** - ¡Sigue practicando! 💪

---

## 🛠️ Tecnologías Utilizadas

<div align="center">

| Tecnología | Uso |
|:----------:|:---:|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | Estructura |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | Estilos y Animaciones |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | Lógica del Juego |
| ![SweetAlert2](https://img.shields.io/badge/SweetAlert2-7066D9?style=for-the-badge) | Alertas Elegantes |
| ![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white) | Tipografía Poppins |

</div>

### 📚 Características Técnicas

- **Vanilla JavaScript** - Sin frameworks pesados
- **CSS Animations** - Transiciones suaves y efectos modernos
- **Glassmorphism** - Efectos de vidrio esmerilado
- **Responsive Design** - Media queries para todos los dispositivos
- **JSON Data** - Base de datos de preguntas fácil de modificar
- **Partículas Animadas** - Fondo dinámico con JavaScript

---

## 📝 Personalización

### Agregar/Modificar Preguntas

Edita el archivo `base-preguntas.json`:

```json
{
  "categoria": "Irregular Verbs - P.Simple / P.Participle",
  "pregunta": "go",
  "respuesta": "went / gone",
  "incorrecta1": "goed / goed",
  "incorrecta2": "wented / goed",
  "incorrecta3": "goes / going"
}
```

### Cambiar Colores

En el archivo `index.html`, modifica los gradientes CSS:

```css
/* Gradiente principal */
background: linear-gradient(135deg, #TU_COLOR_1 0%, #TU_COLOR_2 100%);
```

### Configuración del Juego

En `index.js`, al inicio del archivo:

```javascript
let preguntas_aleatorias = true;              // Orden aleatorio
let mostrar_pantalla_juego_términado = true;  // Mostrar resultado final
let reiniciar_puntos_al_reiniciar_el_juego = true; // Reiniciar puntos
```

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si quieres mejorar este proyecto:

1. **Fork** el proyecto
2. Crea una **rama** para tu característica (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. Abre un **Pull Request**

### 💡 Ideas para Contribuir

- [ ] Agregar más verbos irregulares
- [ ] Implementar niveles de dificultad
- [ ] Agregar modo de práctica específica
- [ ] Incluir pronunciación de audio
- [ ] Agregar estadísticas persistentes
- [ ] Modo oscuro/claro
- [ ] Traducción a otros idiomas
- [ ] Tabla de clasificación (leaderboard)

---

## 🐛 Reportar Problemas

¿Encontraste un bug? [Abre un issue](https://github.com/JLalib/irregularverbspspp/issues) describiendo:

- 📱 Navegador y versión
- 💻 Sistema operativo
- 📝 Pasos para reproducir el problema
- 📸 Capturas de pantalla (si aplica)

---

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

```
MIT License

Copyright (c) 2024 Genbyte | Bilal Jebari

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 👨‍💻 Autor

<div align="center">

**Genbyte**

Hecho con ❤️ by Genbyte e IA

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JLalib)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://es.linkedin.com/in/bilal-jebari)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Bilal_Jebari)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/bilaljebari_/)
[![Blog](https://img.shields.io/badge/Blogger-FF5722?style=for-the-badge&logo=blogger&logoColor=white)](https://genbyte.blogspot.com/)

</div>

---

## 🌟 Agradecimientos

- [SweetAlert2](https://sweetalert2.github.io/) - Por las alertas hermosas
- [Google Fonts](https://fonts.google.com/) - Por la tipografía Poppins
- [Font Awesome](https://fontawesome.com/) - Por los iconos
- [Socializer](https://github.com/vaakash/socializer) - Por los botones sociales

---

## 📊 Estadísticas del Proyecto

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/JLalib/irregularverbspspp?style=social)
![GitHub forks](https://img.shields.io/github/forks/JLalib/irregularverbspspp?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/JLalib/irregularverbspspp?style=social)

</div>

---

<div align="center">

### ⭐ Si te gustó este proyecto, ¡dale una estrella! ⭐

**¿Preguntas? ¿Sugerencias?**

📧 Email: info.genbyte@gmail.com

</div>

---

<div align="center">
  <sub>Desarrollado con 💜 para estudiantes de inglés en todo el mundo</sub>
</div>
