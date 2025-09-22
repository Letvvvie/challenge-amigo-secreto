let amigos = [];

const input = document.getElementById('amigo');

input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    agregarAmigo();
  }
});

function agregarAmigo() {
  const nombre = input.value.trim(); 

  if (nombre === '') {
    alert('Por favor, inserte un nombre');
    return;
  }

  if (/\d/.test(nombre)) {
    alert('No se permiten números en el nombre');
    return;
  }

  amigos.push(nombre);
  input.value = '';
  actualizarLista();
}

function actualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  amigos.forEach(nombre => {
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay amigos para sortear');
    return;
  }

  if (typeof confetti === 'function') {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  } else {
    console.warn('Confetti no está disponible');
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[indice];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = ''; 

  const li = document.createElement('li');
  li.innerHTML = `<strong>Amigo secreto:</strong> ${elegido}`;
  li.classList.add('animado');
  resultado.appendChild(li);

  input.value = '';
}

