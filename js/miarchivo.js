let puntaje = 0
let porc = 0

class Quiz {
    constructor(id,pregunta, respuesta1, respuesta2, respuesta3, respuesta4, correcta) {
        this.id = id
        this.pregunta = pregunta
        this.respuesta1 = respuesta1
        this.respuesta2 = respuesta2
        this.respuesta3 = respuesta3
        this.respuesta4 = respuesta4
        this.correcta = correcta
    }
}

const pregunta1 = new Quiz(1, '¿Cuánto pesa la copa del mundo?', 'A- 2 Kilos', 'B- 4 Kilos', 'C- 6 Kilos', 'D- 8 Kilos', 'C')
const pregunta2 = new Quiz(2, '¿Cuáles de los siguientes países clasifico a Qatar 2022?', 'A- Chile', 'B- Ecuador', 'C- Paraguay', 'D- Perú', 'B')
const pregunta3 = new Quiz(3, '¿Como se llama la mascota del mundial?', 'A- Footix', 'B- La’eeb', 'C- Zakumi', 'D- Fuleco', 'B')
const pregunta4 = new Quiz(4, '¿En qué grupo se encuentra Argentina?', 'A- Grupo F', 'B- Grupo A', 'C- Grupo B ', 'D- Grupo C', 'D')
const pregunta5 = new Quiz(5, '¿Cuándo se juega el primer partido del mundial?', 'A- 20/11', 'B- 19/11', 'C- 13/11', 'D- 12/11', 'A')
const pregunta6 = 'Fin del juego'

let string = 'pregunta' + 1
let respuesta = ''
let z = false

for (let i = 1; i === eval(string).id;){
    do{
        respuesta = prompt(`${eval(string).pregunta} \n\n ${eval(string).respuesta1}\n ${eval(string).respuesta2}\n ${eval(string).respuesta3}\n ${eval(string).respuesta4}`).toUpperCase()
        if (respuesta === 'A' || respuesta === 'B' || respuesta === 'C' || respuesta === 'D'){  
            z=false  
        }else{
            alert('Ingrese alguna opción valida')
            z=true
        }
    }while(z)
    esCorrecta(string,respuesta)
    i = i + 1
    string = 'pregunta' + i
}

function esCorrecta(x,resp){
    if (resp===eval(x).correcta){
        alert('Correcta')
        return puntaje = puntaje + 10

    }
        else{
        alert(`Incorrecta`)
        return porc = porc + 10
    }
}

if (eval(string).id === undefined){
    porc = (puntaje / (porc + puntaje) * 100)
    alert(`${pregunta6} \n\nObtuviste ${puntaje} puntos con el ${porc}% de respuesta correctas`)
}