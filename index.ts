let dato = document.getElementById("dato2document");
let btnEnv = document.getElementById("enviar");

btnEnv.addEventListener("click", () => {
  console.log(dato.value);
  console.log(typeof dato.value);

  let base: number = Number(dato.value);

  console.log(base * 5);
  console.log(typeof base);
});
