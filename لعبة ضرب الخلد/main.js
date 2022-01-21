let time = document.querySelector(".time");
let square = document.querySelector(".square");
let squer = document.querySelectorAll(".squer");
let resolt = 0;
let carntime = time.textContent;

function movement(){
squer.forEach(classname =>{
    classname.classList.remove("moul");
})
let randompostion = squer[Math.floor(Math.random()*9)];
randompostion.classList.add("moul");

}


squer.forEach(id =>{
    id.addEventListener('click', ()=>{
        if(id.id === squer[Math.floor(Math.random()*9)].id){
            resolt = resolt + 1;
            square.textContent=resolt;
        }
        
    })
})
function movemole(){
    let timeid = null;
    timeid = setInterval(movement, 1000);
}
movemole()

function timeout(){
    carntime--;
    time.textContent=carntime;
            if(carntime==0){
                clearInterval(timeid)
                alert("Game over your sqore is "+ resolt);
            }
}

let timeid = setInterval(timeout, "1000")