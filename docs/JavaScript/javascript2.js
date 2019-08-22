var h1 = document.getElementById("titulo");
console.log(h1.innerHTML);

var parrafo = document.querySelectorAll('p');
console.log(parrafo[0]);

var boton = document.getElementById("boton");

function cambiar() {
    h1.style.color = "red";
}

//boton.onclick = cambiar;

boton.addEventListener('click', function() {
    h1.style.color = "red";
});

boton.addEventListener('mouseover', function() {
    console.log('he detectado el ratón');
});

boton.addEventListener('mouseout', function() {
    console.log('adiós ratón');
});