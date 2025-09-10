# Amigo Secreto

<p align="center">
  <img src="assets/amigo-secreto.png" alt="Logo/portada del proyecto Amigo Secreto" width="260">
</p>

<p align="center">
  <img alt="Estado" src="https://img.shields.io/badge/STATUS-EN%20DESARROLLO-green">
  <img alt="Licencia" src="https://img.shields.io/badge/LICENCIA-Unlicense-blue">
  <img alt="Lenguaje principal" src="https://img.shields.io/github/languages/top/jesuscarreon2511/Amigo-Secreto">
  <img alt="Último commit" src="https://img.shields.io/github/last-commit/jesuscarreon2511/Amigo-Secreto">
</p>

## Índice
- [Descripción](#descripción)
- [Características](#características)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Uso](#uso)
- [Instalación local](#instalación-local)
- [Publicación en GitHub Pages](#publicación-en-github-pages)
- [Descargas](#descargas-opcional)
- [Tecnologías](#tecnologías)
- [Accesibilidad](#accesibilidad)
- [Posibles mejoras](#posibles-mejoras)
- [Contribución](#contribución)
- [Autor](#autor)
- [Licencia](#licencia)

---

## Descripción
**Amigo Secreto** es una app web simple (HTML/CSS/JS) para:
- **Agregar** nombres de participantes a una lista (validando entrada vacía).
- **Listar** los nombres en pantalla.
- **Sortear** un participante al azar y mostrarlo por alerta y en la UI.

> Mensaje de validación cuando el input está vacío: **“Por favor, inserte un nombre.”**

---

## Características
- `Array "amigos"` para almacenar participantes.
- `agregarAmigo()`:
  - Lee el valor del input con `getElementById`.
  - Valida que no esté vacío → `alert("Por favor, inserte un nombre.")`.
  - Agrega al array con `.push()` y limpia el input.
  - Actualiza la lista en pantalla.
- `actualizarLista()`:
  - Limpia la `<ul>` con `innerHTML = ""`.
  - Recorre el array y crea `<li>` por cada nombre.
- `sortearAmigo()`:
  - Verifica que existan nombres.
  - Elige índice aleatorio con `Math.floor(Math.random() * amigos.length)`.
  - Muestra el resultado en `alert` y lo pinta en `#resultado`.

---

## Estructura del proyecto
.
├── index.html # Página principal
├── app.js # Lógica: agregar, listar, sortear
├── style.css # Estilos
└── assets/ # Imágenes/íconos
├── amigo-secreto.png
└── play_circle_outline.png


---

## Uso
1. Escribe un nombre en el campo de texto.
2. Haz clic en **“Añadir”**.  
   - Si está vacío, verás: **“Por favor, inserte un nombre.”**
3. Repite para agregar más participantes.
4. Haz clic en **“Sortear amigo”** para obtener un ganador al azar.

---

## Instalación local
Opción rápida:
- Abre `index.html` directamente en tu navegador.

Servidor local (opcional):

# Con Python 3
python -m http.server 8080
# Visita: http://localhost:8080

---

Descargas
Aqui tienes el zip del proyecto. Checalo: 
<a href="https://github.com/jesuscarreon2511/Amigo-Secreto/archive/refs/heads/main.zip" class="btn">
  ⬇️ Descargar proyecto completo (ZIP)
</a>
---

Tecnologías
HTML5 — estructura.

CSS3 — estilos responsivos.

JavaScript (ES6+) — arrays, DOM, validación, sorteo.

Shields.io — insignias del README.

GitHub Pages — hosting estático.

---

Accesibilidad
Atributos aria-live en la lista de resultados.

Botones con aria-label.

Mensajes claros en validaciones.

---

Posibles mejoras
Persistencia con LocalStorage (mantener lista tras recargar).

Evitar nombres duplicados.

Botón para limpiar lista completa.

Modal/Toast en lugar de alert() para mejor UX.

Tests básicos de funciones (agregarAmigo, sortearAmigo).

---

Contribución
¿Quieres proponer cambios?

Haz fork del repo.

Crea una rama: git checkout -b feature/mi-mejora

Commit: git commit -m "feat: agrega X"

Push: git push origin feature/mi-mejora

Abre un Pull Request.

---

Autor
jesuscarreon2511
GitHub: https://github.com/jesuscarreon2511

---

Licencia
## Licencia
Este proyecto está dedicado al **dominio público** bajo **The Unlicense**.  
Puedes copiar, modificar, publicar, usar, compilar, vender o distribuir este software, con o sin cambios, para cualquier propósito.
