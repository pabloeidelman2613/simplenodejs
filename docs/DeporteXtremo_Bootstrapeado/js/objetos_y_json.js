/*
Formas de integrar un Script a HTML
1) Archivo Externo: <script src="js/archivo.js"></script>
2) Bloque Interno: <script></script>
3) Atributo HTML: onclick, onchange, onblur...
*/

window.onload = function() {

    persona = {
        nombre: "Martin",
        edad: 40,
        peso: 95,
        altura: 1.82,
        comidas_preferidas: ["milanga", "pizza", "zapallito relleno"],
        quejarse: function() {
            alert("Uy!...que pesado estoy")
        }
    }

    perro = {
        nombre: "Fido",
        tipo: "caniche",
        peso: 23,
        ladrar: function() {
            if (this.peso > 20) {
                alert("Worf Worf")
            } else {
                alert("Guau Guau")
            }
        },
        hacer_dieta: function() {
            this.peso = this.peso - 1
        }
    }


    texto = '[{"nombre":"Martín","edad":40,"peso":95,"altura":1.82,"comidas_preferidas":["milanga","pizza","zapallito relleno"]},{"nombre":"Joel","edad":30,"peso":95,"altura":1.82,"comidas_preferidas":["arepas","tequeño"]},{"nombre":"Jose","edad":31,"peso":80,"altura":1.72,"comidas_preferidas":["asado","repas","pastas"]}]'

    los_pibes = JSON.parse(texto)

    texto2 = '{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],"base":"stations","main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15},"visibility":10000,"wind":{"speed":4.1,"deg":80},"clouds":{"all":90},"dt":1485789600,"sys":{"type":1,"id":5091,"message":0.0103,"country":"GB","sunrise":1485762037,"sunset":1485794875},"id":2643743,"name":"London","cod":200}'

    clima_londres = JSON.parse(texto2)





}