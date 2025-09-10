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
- [Descripción](#descripcion)
- [Características](#caracteristicas)
- [Estructura del proyecto](#estructura)
- [Uso](#uso)
- [Instalación local](#instalacion)
- [Descargas](#descargas)
- [Tecnologías](#tecnologias)
- [Accesibilidad](#accesibilidad)
- [Posibles mejoras](#mejoras)
- [Contribución](#contribucion)
- [Autor](#autor)
- [Licencia](#licencia)

---

<h2 id="descripcion">📝 Descripción</h2>

**Amigo Secreto** es una app web simple para:

- **Agregar** nombres de participantes a una lista (con validación de entrada vacía).
- **Listar** los nombres en pantalla.
- **Sortear** un participante al azar y mostrarlo por alerta y en la interfaz.

> Si el campo está vacío, se muestra: **“Por favor, inserte un nombre.”**

---

<h2 id="caracteristicas">✨ Características</h2>

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

<h2 id="estructura">📁 Estructura del proyecto</h2>

<ul>
  <li><code>index.html</code> — Página principal</li>
  <li><code>app.js</code> — Lógica: agregar, listar, sortear</li>
  <li><code>style.css</code> — Estilos</li>
  <li><code>assets/</code> — Imágenes / íconos
    <ul>
      <li><code>amigo-secreto.png</code></li>
      <li><code>play_circle_outline.png</code></li>
    </ul>
  </li>
</ul>

---

<h2 id="uso">🕹️ Uso</h2>

1. Escribe un nombre en el campo de texto.  
2. Haz clic en **“Añadir”**.  
   - Si está vacío, verás: **“Por favor, inserte un nombre.”**  
3. Repite para agregar más participantes.  
4. Haz clic en **“Sortear amigo”** para obtener un ganador al azar.

---

<h2 id="instalacion">🛠️ Instalación local</h2>

**Opción rápida**
- Abre `index.html` directamente en el navegador.

**Servidor local (opcional)**

# Con Python 3
python -m http.server 8080
# Visita: http://localhost:8080

---

<h2 id="descargas">📥 Descargas</h2>

Aquí tienes el ZIP del proyecto:

[⬇️ Descargar proyecto (ZIP)](https://github.com/jesuscarreon2511/Amigo_Secreto/archive/refs/heads/main.zip)
---

<h2 id="tecnologias">🧰 Tecnologías</h2>

HTML5 — estructura

CSS3 — estilos responsivos

JavaScript (ES6+) — arrays, DOM, validación, sorteo

Shields.io — insignias del README

GitHub Pages — hosting estático

---

<h2 id="accesibilidad">♿ Accesibilidad</h2>

Atributos aria-live en resultados.

Botones con aria-label.

Mensajes de validación claros.

---

<h2 id="mejoras">🗺️ Posibles mejoras</h2>

 Persistencia con LocalStorage (mantener lista tras recargar).

 Evitar nombres duplicados.

 Botón para limpiar la lista completa.

 Reemplazar alert() por modal/toast.

 Tests básicos (agregarAmigo, sortearAmigo).

---

<h2 id="contribucion">🤝 Contribución</h2>

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

<h2 id="autor">👤 Autor</h2>

jesuscarreon2511
GitHub: https://github.com/jesuscarreon2511

---

<h2 id="licencia">📄 Licencia</h2>

Este proyecto está dedicado al dominio público bajo The Unlicense.
Puedes copiar, modificar, publicar, usar, compilar, vender o distribuir este software, con o sin cambios, para cualquier propósito.
