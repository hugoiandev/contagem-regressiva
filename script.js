const titulo = document.querySelector('.titulo-contador')
const meses = document.querySelector('.meses-js')
const semanas = document.querySelector('.semanas-js')
const dias = document.querySelector('.dias-js')
const horas = document.querySelector('.horas-js')
const minutos = document.querySelector('.minutos-js')
const segundos = document.querySelector('.segundos-js')

const horaAtual = new Date
const horaAlvo = new Date(horaAtual.getFullYear() + 1, 0, 0)
const intervalHoras = 60 * 60000
const intervalMinutes = 60 * 1000
const intervalSecond = 1000
const intervalDias = intervalHoras * 24
const milissegundos = horaAlvo - horaAtual

let totalSegundos = Math.floor(milissegundos / 1000)
let totalMinutos = Math.floor(totalSegundos / 60)
let totalHoras = Math.floor(totalMinutos / 60)
let totalDias = Math.floor(totalHoras / 24)
let totalSemanas = Math.floor(totalDias / 7)
let totalMeses = Math.floor((totalSemanas / 4) - 1)

function iniciaContagem() {
    titulo.innerText = `Contagem regressiva para o ano de ${horaAtual.getFullYear() + 1}`
    meses.innerText = totalMeses
    semanas.innerText = totalSemanas
    dias.innerText = totalDias
    horas.innerText = totalHoras
    minutos.innerText = totalMinutos
    segundos.innerText = totalSegundos
}

function decremento() {
    setInterval(() => {
        segundos.innerText --
    }, intervalSecond)
    setTimeout(() => {
        minutos.innerText --
        setInterval(() => {
            minutos.innerText -- 
        }, intervalMinutes)
    }, intervalMinutes - horaAtual.getSeconds() * intervalSecond)
    setTimeout(() => {
        horas.innerText --
        setInterval(() => {
            horas.innerText --
        }, intervalHoras)
    }, intervalHoras - horaAtual.getMinutes() * intervalMinutes - horaAtual.getSeconds() * intervalSecond)
    setTimeout(() => {
        dias.innerText --
        setInterval(() => {
            dias.innerText --
        }, intervalDias)
    }, intervalDias - horaAtual.getHours() * intervalHoras - horaAtual.getMinutes() * intervalMinutes - horaAtual.getSeconds() * intervalSecond)
}


iniciaContagem()

decremento()