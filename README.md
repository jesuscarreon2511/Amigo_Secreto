<!-- Encabezado bonito -->
<h1 align="center">🎁 Amigo Secreto</h1>
<p align="center">
  App web en <b>HTML/CSS/JS</b> para agregar participantes y <b>sortear</b> un amigo secreto al azar.
</p>

<p align="center">
  <img src="assets/amigo-secreto.png" alt="Logo Amigo Secreto" width="220" />
</p>

<p align="center">
  <a href="https://jesuscarreon2511.github.io/Amigo-Secreto/"><img alt="Demo" src="https://img.shields.io/badge/🚀_Ver_App-Online-5ce1e6?labelColor=111218"></a>
  <img alt="Estado" src="https://img.shields.io/badge/STATUS-EN%20DESARROLLO-22c55e?labelColor=111218">
  <img alt="Licencia" src="https://img.shields.io/badge/LICENCIA-Unlicense-64748b?labelColor=111218">
  <img alt="Lenguaje" src="https://img.shields.io/github/languages/top/jesuscarreon2511/Amigo-Secreto?labelColor=111218">
  <img alt="Último commit" src="https://img.shields.io/github/last-commit/jesuscarreon2511/Amigo-Secreto?labelColor=111218">
</p>

---

## 🧭 Índice
- [Descripción](#-descripción)
- [Características](#-características)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Uso](#-uso)
- [Instalación local](#-instalación-local)
- [Descargas](#-descargas)
- [Tecnologías](#-tecnologías)
- [Accesibilidad](#-accesibilidad)
- [Posibles mejoras](#-posibles-mejoras)
- [Contribución](#-contribución)
- [Autor](#-autor)
- [Licencia](#-licencia)

---

## 📝 Descripción
**Amigo Secreto** es una app web simple para:

- **Agregar** nombres de participantes a una lista (con validación de entrada vacía).
- **Listar** los nombres en pantalla.
- **Sortear** un participante al azar y mostrarlo por alerta y en la interfaz.

> Si el campo está vacío, se muestra: **“Por favor, inserte un nombre.”**

---

## ✨ Características
- **Array `amigos`** para almacenar participantes.
- **`agregarAmigo()`**:
  - Lee el input con `document.getElementById`.
  - Valida vacío → `alert("Por favor, inserte un nombre.")`.
  - Inserta con `.push()`, limpia el input y refresca la lista.
- **`actualizarLista()`**:
  - Limpia la `<ul>` con `innerHTML = ""`.
  - Recorre el array y crea un `<li>` por cada nombre.
- **`sortearAmigo()`**:
  - Verifica que existan nombres.
  - Elige índice aleatorio: `Math.floor(Math.random() * amigos.length)`.
  - Muestra el ganador en `alert` y en `#resultado`.

---

## 🗂️ Estructura del proyecto

.
├── index.html                # Página principal
├── app.js                    # Lógica: agregar, listar, sortear
├── style.css                 # Estilos
└── assets/                   # Imágenes/íconos
    ├── amigo-secreto.png
    └── play_circle_outline.png


---

🕹️ Uso

Escribe un nombre en el campo de texto.

Haz clic en “Añadir”.

Si está vacío, verás: “Por favor, inserte un nombre.”

Repite para agregar más participantes.

Haz clic en “Sortear amigo” para obtener un ganador al azar.

---

🛠️ Instalación local

Opción rápida

Abre index.html directamente en el navegador.

Servidor local (opcional):

# Con Python 3
python -m http.server 8080
# Visita: http://localhost:8080

---

Descargas
Aqui tienes el zip del proyecto. Checalo: 


[⬇️ Descargar proyecto (ZIP)](https://github.com/jesuscarreon2511/Amigo_Secreto/archive/refs/heads/main.zip)

---

🧰 Tecnologías

HTML5 — estructura

CSS3 — estilos responsivos

JavaScript (ES6+) — arrays, DOM, validación, sorteo

Shields.io — insignias del README

GitHub Pages — hosting estático

---

♿ Accesibilidad

Atributos aria-live en resultados.

Botones con aria-label.

Mensajes de validación claros.

---

🗺️ Posibles mejoras

 Persistencia con LocalStorage (mantener lista tras recargar).

 Evitar nombres duplicados.

 Botón para limpiar la lista completa.

 Reemplazar alert() por modal/toast.

 Tests básicos (agregarAmigo, sortearAmigo).

---

🤝 Contribución

¿Quieres proponer cambios?

Haz fork del repositorio.

Crea una rama:

git checkout -b feature/mi-mejora

Realiza tu commit:

git commit -m "feat: agrega X"

Sube tu rama:

git push origin feature/mi-mejora

Abre un Pull Request.

---

👤 Autor

jesuscarreon2511
GitHub: https://github.com/jesuscarreon2511

---

📄 Licencia

Este proyecto está dedicado al dominio público bajo The Unlicense.
Puedes copiar, modificar, publicar, usar, compilar, vender o distribuir este software, con o sin cambios, para cualquier propósito.
