// Vanilla JavaScript (codigo imperativo)

// recuperamos todos los botones
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  // al hacer click en el botón, tenemos que ejecutar una función
  button.addEventListener("click", function () {
    // recuperar la id del atributo del HTML
    const id = this.getAttribute("data-id");

    // llamar a un servicio para actualizar si me gusta
    // toggleLike(id)

    if (button.classList.contains("liked")) {
      this.classList.remove("liked");
      this.innerText = "Me gusta";
    } else {
      this.classList.add("liked");
      this.innerText = "Quitar me gusta";
    }
  });
});
