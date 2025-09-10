// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// 1) Variable de tipo array para almacenar los nombres
let amigos = [];

/* 2) Función para agregar amigos
   - Captura el valor del input
   - Valida que no esté vacío (alert requerido)
   - Actualiza el array con .push()
   - Limpia el campo de entrada
   - Actualiza la lista visual */
function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  // Validación requerida
  if (!nombre) {
    alert("Por favor, inserte un nombre.");
    input.focus();
    return;
  }

  // Agregar al arreglo
  amigos.push(nombre);

  // Limpiar campo de entrada
  input.value = '';
  input.focus();

  // Actualizar lista en pantalla
  actualizarLista();
}

/* 3) Función para recorrer el array y pintar <li> en la lista
   - Obtiene el <ul> por id
   - Limpia con innerHTML = ""
   - Recorre con un bucle for
   - Crea y agrega <li> por cada amigo */
function actualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // limpiar lista para evitar duplicados

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// (Extra) Sorteo de amigo aleatorio con alerta y reflejo en <ul id="resultado">
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay nombres en la lista. Agrega al menos uno.');
    return;
  }
  const indice = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[indice];

  alert(`🎉 Amigo secreto: ${elegido}`);

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = ''; // limpiar resultado previo
  const li = document.createElement('li');
  li.textContent = `Amigo secreto: ${elegido}`;
  resultado.appendChild(li);
}

// Exponer funciones al scope global para los onclick del HTML
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;
