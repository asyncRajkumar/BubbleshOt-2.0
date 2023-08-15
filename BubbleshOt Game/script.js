let hv;
let score=0;
let num;
const music =new Audio('song.mp3')
const click =new Audio('click.mp3')
music.play();
music.volume=0.65;
music.loop=true;
music.play();
const a = document.querySelector('#bottom');
const hit = () => {
    hv = Math.floor(Math.random() * 10)
    document.querySelector('#hit .box').textContent = hv;
}

const time = () => {
    let Time = 60;
    setInterval(() => {
        if (Time > 0) {
            Time--;
            document.querySelector('#time .box').textContent = Time;
        }
        else {
            clearInterval();
            document.querySelector("#bottom").innerHTML = `<h1>Game Over</h1> <br>
            <h2>Your Score : ${score}</h2>`;
        }
    }, 1000)
}

const bub = () => {
    let ball;
    for (let i = 1; i <= 135; i++) {
        let bv = Math.floor(Math.random() * 10);
        ball += `<div class="bub">${bv}</div>`;
    }
    document.querySelector("#bottom").innerHTML = ball;
}

const scorea = () => {
    
if(hv === num){
     click.play();
    score++;
    document.querySelector("#scorea .box").textContent =score ;
    bub();
hit();
}

}

a.addEventListener('click',(e)=>{
    num = (Number(e.target.textContent));
    console.log(num);
    scorea();
   
});



bub();
time();
hit();
