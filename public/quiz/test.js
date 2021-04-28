const preg1a = document.getElementById("1")
const preg1b = document.getElementById("2")
var conteo1=0
var conteo2=0
var bandSelect = false

preg1a.addEventListener('click', function(){
    conteo1=8
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






