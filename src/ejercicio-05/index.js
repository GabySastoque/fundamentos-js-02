// Escribe tu código aquí:
const persona = {
    nombre: "Gabriela",
    edad:24,
    ciudad:"Bogotá"
}

for(const propiedad in persona) {
    console.log(propiedad + ": "+ persona[propiedad])
}
