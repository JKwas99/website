const forma = document.querySelectorAll('.column9')
const ocena = document.querySelectorAll('.column8')
const nazwiskaMn = document.querySelectorAll('.column2')
const podium = document.querySelectorAll('.pod>.column3')
const nazwiskaTp = document.querySelectorAll('.pod>.column2')

console.dir(forma)
console.dir(ocena)
console.dir(podium)

let miejsca = []
let pod = []
let punktacja = []


let up = `<td class="column9"><i class="demo-icon icon-up-1"></i></td>`
let down =  `<td class="column9"><i class="demo-icon icon-down-1"></i></td>`
let normal = `<td class="column9"><i class="demo icon-eq"></i></td>`


for(let i=0;i<ocena.length;i++){
    if(ocena[i].textContent.startsWith("0") || ocena[i].textContent.startsWith("1") || ocena[i].textContent.startsWith("2") || ocena[i].textContent.startsWith("3") ){
        forma[i].innerHTML = down;
    }
    if(ocena[i].textContent.startsWith("3.5") || ocena[i].textContent.startsWith("5") || ocena[i].textContent.startsWith("6.5") || ocena[i].textContent.startsWith("4") || ocena[i].textContent.startsWith("6")){
        forma[i].innerHTML = normal;
    }
    if(ocena[i].textContent.startsWith("7") || ocena[i].textContent.startsWith("8") || ocena[i].textContent.startsWith("9")){
        forma[i].innerHTML = up;
    }
}




// for(let i=0;i<ocena.length;i++){ 
//     miejsca[i] = parseFloat(ocena[i].textContent)
//     if(thMax<=miejsca[i]){
//         if(miejsca[i]<=secMax){
//             thMax = miejsca[i]
//             pod[2] = thMax
//             nazwiskaTp[2].innerHTML = nazwiskaMn[i].textContent
//             if((thMax*2)%2==0)
//                 pod[2] = thMax + ".0"
//         }
//     }
//     podium[2].innerHTML = pod[2]}

const punkty = document.querySelectorAll('.pl>.column3')
const bramki = document.querySelectorAll('.pl>.column4')
const asysty = document.querySelectorAll('.pl>.column5')
const mecze = document.querySelectorAll('.pl>.column6')
const konta = document.querySelectorAll('.pl>.column7')

for(let i=0;i<punkty.length;i++){
    if(mecze[i].textContent!="0"){
        punktacja[i] = (parseInt(bramki[i].textContent) + parseInt(asysty[i].textContent) + parseInt(konta[i].textContent))*10;
        punkty[i].innerHTML = punktacja[i]/parseInt(mecze[i].textContent)
    }
    else{
        punkty[i].innerHTML = 0
        bramki[i].innerHTML = 0
        asysty[i].innerHTML = 0
        konta[i].innerHTML = 0
    }
}

function punktyAlg(){
    let max = punkty[0].textContent
    let secMax = punkty[0].textContent
    let thMax = punkty[0].textContent

    for(let i=0;i<punkty.length;i++){
        miejsca[i] = punkty[i].textContent
        if(max<=miejsca[i]){
            max = miejsca[i]
            console.dir(i)
            nazwiskaTp[0].innerHTML = nazwiskaMn[i+1].textContent 
        }
        podium[0].innerHTML = max
    }
    for(let i=0;i<punkty.length;i++){
        miejsca[i] = punkty[i].textContent
        if(secMax<=miejsca[i] && miejsca[i]<=max){
            if(nazwiskaTp[0].innerHTML!=nazwiskaMn[i+1].textContent){
                secMax = miejsca[i]
                nazwiskaTp[1].innerHTML = nazwiskaMn[i+1].textContent 
                console.log(i)
            }
        }
        podium[1].innerHTML = secMax
    }
    for(let i=0;i<punkty.length;i++){
        miejsca[i] = punkty[i].textContent
        if(thMax<=miejsca[i] && miejsca[i]<=secMax){
            if(nazwiskaTp[1].innerHTML!=nazwiskaMn[i+1].textContent && nazwiskaTp[0].innerHTML!=nazwiskaMn[i+1].textContent){
                thMax = miejsca[i]
                nazwiskaTp[2].innerHTML = nazwiskaMn[i+1].textContent 
                console.log(i)
            }
        }
        podium[2].innerHTML = thMax
    }
}

let alg = punktyAlg()
