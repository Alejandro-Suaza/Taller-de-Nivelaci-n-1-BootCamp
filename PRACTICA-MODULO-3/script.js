//PUNTO 1 CAMBIO DE COLOR
function changeBackgroundColor() {
    let elements = document.getElementsByClassName("my-element");
    let colores = ["#FF5733", "#33FF57", "#3357FF", "#FF33E9", "#33FFFF", "#FFFF33"];
  
    for (let i = 0; i < elements.length; i++) {
      let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
      elements[i].style.backgroundColor = colorAleatorio;
    }
}
  
  let button = document.getElementById("my-button");
  button.addEventListener("click", changeBackgroundColor);
  
//PUNTO 2 INDICAR ELEMENTO SELECCIONADO
let list = document.getElementById("my-list");

list.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    console.log("Seleccionaste: ", event.target.textContent);
  }
});

//PUNTO 3 VALIDACION FORM
function validateForm(event) {
    event.preventDefault();
  
    let input = document.getElementById("my-input");
    let inputValue = input.value.trim();
  
    if (inputValue === "") {
      let errorElement = document.getElementById("error-message");
      errorElement.textContent = "Por Favor ingresa un valor.";
      errorElement.style.display = "block";
    } else {
      console.log("El Valor enviado fue:", inputValue);
      alert("Formulario enviado con exito! Gracias!");
    }
  }
  
  let form = document.getElementById("my-form");
  form.addEventListener("submit", validateForm);
  
