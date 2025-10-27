// ======= 2) Verificar cantidad de stickers =======
document.getElementById("btnStickers").onclick = function () {
  var n1 = parseInt(document.getElementById("qty1").value);
  var n2 = parseInt(document.getElementById("qty2").value);
  var n3 = parseInt(document.getElementById("qty3").value);

  // Si algún campo está vacío o NaN, se reemplaza por 0
  if (isNaN(n1)) n1 = 0;
  if (isNaN(n2)) n2 = 0;
  if (isNaN(n3)) n3 = 0;

  var total = n1 + n2 + n3;

  if (total <= 10) {
    document.getElementById("stickersMsg").textContent =
      "Llevas " + total + " stickers";
  } else {
    document.getElementById("stickersMsg").textContent =
      "Llevas demasiados stickers";
  }
};

// ======= 3) Validación de password =======
document.getElementById("btnIngresar").onclick = function () {
  var d1 = document.getElementById("d1").value;
  var d2 = document.getElementById("d2").value;
  var d3 = document.getElementById("d3").value;

  var password = d1 + d2 + d3;

  if (password === "911") {
    document.getElementById("pwdMsg").textContent = "password 1 correcto";
  } else if (password === "714") {
    document.getElementById("pwdMsg").textContent = "password 2 es correcto";
  } else {
    document.getElementById("pwdMsg").textContent = "password incorrecto";
  }
};
