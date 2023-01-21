const matrizDeJuego = document.getElementById("matriz");
const tablero = [];

function inicializarMatriz(filas, columnas) {
  for (let i = 0; i < filas; i++) {
    tablero.push(new Array());
    for (let j = 0; j < columnas; j++) {
      tablero[i][j] = "*";
    }
  }
  return tablero;
}

function dibujarTablero() {
  let filasYColumnas;
  for (let i = 0; i < tablero.length; i++) {
    filasYColumnas += `<tr>`;
    for (let j = 0; j < tablero[i].length; j++) {
      filasYColumnas += `<td>${tablero[i][j]}</td>`;
    }
    filasYColumnas += `</tr>`;
  }
  matrizDeJuego.innerHTML = filasYColumnas;
}

inicializarMatriz(30, 27);
dibujarTablero();

