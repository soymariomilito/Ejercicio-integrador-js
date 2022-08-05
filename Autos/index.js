let filtro = () => {
  const Marcas = [ 
   Toyota  = document.getElementById("Toyota"),
   Citroen  = document.getElementById("Citroen"),
   Fiat  = document.getElementById("Fiat"),
   Ram  = document.getElementById("RAM"),
   Dodge  = document.getElementById("Dodge"),
   Peugeot  = document.getElementById("Peugeot"),
   Audi  = document.getElementById("Audi"),
   Chevrolet  = document.getElementById("Chevrolet"),
   Jeep  = document.getElementById("Jeep")]

  const filtrado = document.querySelector("#marca").value
  
  for(fabricante of Marcas){
  if(filtrado !== fabricante.id) {
    fabricante.classList.remove("image-box")
    fabricante.classList.add("hidden")
  }else {
    fabricante.classList.remove("hidden")
    fabricante.classList.add("image-box")
  }
  
}
}

