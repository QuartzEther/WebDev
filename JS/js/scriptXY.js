const map = document.getElementById('map');
const help = document.getElementById('help');
const border = 100;

// console.log(map.width, map.height);

const treasure = {
    x: ~~(Math.random() * (map.width - border) + border),
    y: ~~(Math.random() * (map.height - border) + border)
}

// console.log(treasure);

let moves = 0;
map.addEventListener('click', playerClicked);


function playerClicked(e){
    moves++;
    // console.log(e.offsetX, e.offsetY);
    const distance = Math.sqrt((e.offsetX - treasure.x) ** 2 + (e.offsetY - treasure.y) ** 2);
    let helpText = "";
    if(distance > 250)
        helpText = "Холодно, просто Арктика!";
    else
    if(distance > 200)
        helpText = "Холодно";
    else
    if(distance > 150)
        helpText = "Прохладно";
    else
    if(distance > 120)
        helpText = "Теплее";
    else
    if(distance > 100)
        helpText = "Тепло";
    else
    if(distance > 90)
        helpText = "Очень тепло";
    else 
    if(distance > 70)
        helpText = "Горячее";
    else
    if(distance > 50)
        helpText = "Очень горячо";
    else
    if(distance > 20)
        helpText = "Агонь!";
    else
    if(distance < 20)
    {
        map.removeEventListener('click', playerClicked);
        alert(`Ура! Вы нашли сокровище!`);
        return;
    }
    help.innerText = `Это ваш ${moves}-й ход. ${helpText}`;
}

