const contain= document.getElementById("contain")
const param = document.getElementById("parametros")
const text = document.getElementById("home")
const btnR = document.getElementById("btnR")

const preg1a = document.getElementById("1")
const preg1b = document.getElementById("2")

const preg2a = document.getElementById("3")
const preg2b = document.getElementById("4")
const preg2c = document.getElementById("5")
const preg2d = document.getElementById("6")

const preg3a = document.getElementById("7")
const preg3b = document.getElementById("8")

const preg4a = document.getElementById("9")
const preg4b = document.getElementById("10")

const preg5a = document.getElementById("11")
const preg5b = document.getElementById("12")
const preg5c = document.getElementById("13")

const preg6a = document.getElementById("14")
const preg6b = document.getElementById("15")

const preg7a = document.getElementById("16")
const preg7b = document.getElementById("17")
const preg7c = document.getElementById("18")
const preg7d = document.getElementById("19")
const preg7e = document.getElementById("20")
const preg7f = document.getElementById("21")

const btnF = document.getElementById("btn1")

var conteo1=0
var conteo2=0
var conteo3=0
var conteo4=0
var conteo5=0
var conteo6=0
var conteo7=0
var conteo8=0
var conteo9=0
var conteo10=0
var conteo11=0
var conteo12=0
var conteo13=0
var conteo14=0
var conteo15=0
var conteo16=0
var conteo17=0
var conteo18=0
var conteo19=0
var conteo20=0
var conteo21=0

var bandSelect = false

preg1a.addEventListener('click', function(){
    conteo1=1
    if(preg1b.classList.contains('seleccion')==true){
        preg1b.classList.remove('seleccion')
        preg1a.classList.add('seleccion')
        bandSelect=true
    }else{
        preg1a.classList.remove('seleccion')
        preg1a.classList.add('seleccion')
        bandSelect=false
    }
})

preg1b.addEventListener('click', function(){
    conteo2=2

    if(preg1a.classList.contains('seleccion')==true){
        preg1a.classList.remove('seleccion')
        preg1b.classList.add('seleccion')
        bandSelect=true
    }else{
        preg1b.classList.remove('seleccion')
        preg1b.classList.add('seleccion')
        bandSelect=false
    }
    console.log(conteo1+conteo2)
})

preg2a.addEventListener('click', function(){
    conteo3 = 3
    if(preg2b.classList.contains('seleccion')==true || preg2c.classList.contains('seleccion')==true||preg2d.classList.contains('seleccion')==true){
        preg2b.classList.remove('seleccion')
        preg2c.classList.remove('seleccion')
        preg2d.classList.remove('seleccion')
        preg2a.classList.add('seleccion')
        bandSelect=true
    }else{
        preg2a.classList.remove('seleccion')
        preg2a.classList.add('seleccion')
        bandSelect=false
    }
})

preg2b.addEventListener('click', function(){
    conteo4 = 4
    if(preg2a.classList.contains('seleccion')==true || preg2c.classList.contains('seleccion')==true||preg2d.classList.contains('seleccion')==true){
        preg2a.classList.remove('seleccion')
        preg2c.classList.remove('seleccion')
        preg2d.classList.remove('seleccion')
        preg2b.classList.add('seleccion')
        bandSelect=true
    }else{
        preg2b.classList.remove('seleccion')
        preg2b.classList.add('seleccion')
        bandSelect=false
    }
})

preg2c.addEventListener('click', function(){
    conteo5 = 6
    if(preg2a.classList.contains('seleccion')==true || preg2b.classList.contains('seleccion')==true||preg2d.classList.contains('seleccion')==true){
        preg2a.classList.remove('seleccion')
        preg2b.classList.remove('seleccion')
        preg2d.classList.remove('seleccion')
        preg2c.classList.add('seleccion')
        bandSelect=true
    }else{
        preg2c.classList.remove('seleccion')
        preg2c.classList.add('seleccion')
        bandSelect=false
    }
})

preg2d.addEventListener('click', function(){
    conteo6 = 3
    if(preg2a.classList.contains('seleccion')==true || preg2b.classList.contains('seleccion')==true||preg2c.classList.contains('seleccion')==true){
        preg2a.classList.remove('seleccion')
        preg2b.classList.remove('seleccion')
        preg2c.classList.remove('seleccion')
        preg2d.classList.add('seleccion')
        bandSelect=true
    }else{
        preg2d.classList.remove('seleccion')
        preg2d.classList.add('seleccion')
        bandSelect=false
    }
})

preg3a.addEventListener('click', function(){
    conteo7=3
    if(preg3b.classList.contains('seleccion')==true){
        preg3b.classList.remove('seleccion')
        preg3a.classList.add('seleccion')
        bandSelect=true
    }else{
        preg3a.classList.remove('seleccion')
        preg3a.classList.add('seleccion')
        bandSelect=false
    }
})

preg3b.addEventListener('click', function(){
    conteo8=8

    if(preg3a.classList.contains('seleccion')==true){
        preg3a.classList.remove('seleccion')
        preg3b.classList.add('seleccion')
        bandSelect=true
    }else{
        preg3b.classList.remove('seleccion')
        preg3b.classList.add('seleccion')
        bandSelect=false
    }
})

preg4a.addEventListener('click', function(){
    conteo9=10
    if(preg4b.classList.contains('seleccion')==true){
        preg4b.classList.remove('seleccion')
        preg4a.classList.add('seleccion')
        bandSelect=true
    }else{
        preg4a.classList.remove('seleccion')
        preg4a.classList.add('seleccion')
        bandSelect=false
    }
})

preg4b.addEventListener('click', function(){
    conteo10=5

    if(preg4a.classList.contains('seleccion')==true){
        preg4a.classList.remove('seleccion')
        preg4b.classList.add('seleccion')
        bandSelect=true
    }else{
        preg4b.classList.remove('seleccion')
        preg4b.classList.add('seleccion')
        bandSelect=false
    }
})

preg5a.addEventListener('click', function(){
    conteo11=4
    if(preg5a.classList.contains('seleccion')==true){
        preg5a.classList.remove('seleccion')
    }else{
        preg5a.classList.add('seleccion')
    }
})

preg5b.addEventListener('click', function(){
    conteo12=8
    if(preg5b.classList.contains('seleccion')==true){
        preg5b.classList.remove('seleccion')
    }else{
        preg5b.classList.add('seleccion')
    }
})

preg5c.addEventListener('click', function(){
    conteo13=10
    if(preg5c.classList.contains('seleccion')==true){
        preg5c.classList.remove('seleccion')
    }else{
        preg5c.classList.add('seleccion')
    }
})

preg6a.addEventListener('click', function(){
    conteo14=8
    if(preg6b.classList.contains('seleccion')==true){
        preg6b.classList.remove('seleccion')
        preg6a.classList.add('seleccion')
        bandSelect=true
    }else{
        preg6a.classList.remove('seleccion')
        preg6a.classList.add('seleccion')
        bandSelect=false
    }
})

preg6b.addEventListener('click', function(){
    conteo15=3

    if(preg6a.classList.contains('seleccion')==true){
        preg6a.classList.remove('seleccion')
        preg6b.classList.add('seleccion')
        bandSelect=true
    }else{
        preg6b.classList.remove('seleccion')
        preg6b.classList.add('seleccion')
        bandSelect=false
    }
})

preg7a.addEventListener('click', function(){
    conteo16=1
    if(preg7a.classList.contains('seleccion')==true){
        preg7a.classList.remove('seleccion')
    }else{
        preg7a.classList.add('seleccion')
    }
})

preg7b.addEventListener('click', function(){
    conteo17=4
    if(preg7b.classList.contains('seleccion')==true){
        preg7b.classList.remove('seleccion')
    }else{
        preg7b.classList.add('seleccion')
    }
})

preg7c.addEventListener('click', function(){
    conteo18=8
    if(preg7c.classList.contains('seleccion')==true){
        preg7c.classList.remove('seleccion')
    }else{
        preg7c.classList.add('seleccion')
    }
})

preg7d.addEventListener('click', function(){
    conteo19=5
    if(preg7d.classList.contains('seleccion')==true){
        preg7d.classList.remove('seleccion')
    }else{
        preg7d.classList.add('seleccion')
    }
})

preg7e.addEventListener('click', function(){
    conteo20=1
    if(preg7e.classList.contains('seleccion')==true){
        preg7e.classList.remove('seleccion')
    }else{
        preg7e.classList.add('seleccion')
    }
})

preg7f.addEventListener('click', function(){
    conteo21=2
    if(preg7f.classList.contains('seleccion')==true){
        preg7f.classList.remove('seleccion')
    }else{
        preg7f.classList.add('seleccion')
    }
})

btnF.addEventListener('click', function(){
    var result=0;
    result= conteo1+conteo2+conteo3+conteo4+conteo5+conteo6+conteo7+conteo8+conteo9+conteo10+conteo11+conteo12+conteo13+conteo14+conteo15+conteo16+conteo17+conteo18+conteo19+conteo20+conteo21
    contain.classList.add('display-none')
    parametros.classList.remove('display-none')
    btnR.classList.remove('display-none')
    const calif = document.getElementById("porcentage")
    const message = document.getElementById("message")

    if(result>60){
        calif.innerHTML=result
        message.innerHTML="Tus niveles emocionales estan altos, te recomendamos registrarte en la app y nosotros te ayudaremos con tus emociones"
    }else{
        calif.innerHTML=result
        message.innerHTML="Tus niveles emocionales estan normales, sin embargo te recomendamos registrarte en la app y conoce nuestras opciones para el control de emociones"
    }
    console.log(result)
})







