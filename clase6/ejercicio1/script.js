let frutas = ["Manzana", "Banana"];

function añadir() {
    var fruta = window.prompt("Inserta una fruta: ")
    frutas.push(fruta);
    alert(frutas);
}

function borrar() {
    frutas.pop();
    alert(frutas);
}
    
