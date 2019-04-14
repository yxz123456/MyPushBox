let menu = new Menu(map(mapStr));

menu.createOrder = function(parent,menuDom,info){
    parent.innerHTML = '';
    for(let i = 0; i < this.length; i++){
        let div = document.createElement('div');
        div.className = 'button small';
        div.innerText = i+1+'';
        div.addEventListener('click',() => {
            game.upDate(menu.level,i+1);
            game.restart();
            menuDom.style.display = 'none';
            ground.viewContent.style.display = 'block';   
            info.style.display = 'flex';         
        })
        parent.appendChild(div);
    }
    
    
}
menu.upDate = function () {
    this.length = this.map[this.level].length || 0;
}
menu.chooseLevel = function(){
    let easy = document.getElementsByClassName('easy')[0];
    let hard = document.getElementsByClassName('hard')[0];

    let level = document.getElementsByClassName('level')[0];
    let order = document.getElementsByClassName('order')[0];
    let menuDom = document.getElementsByClassName('menu')[0];
    let info = document.getElementsByClassName('info')[0];
    let restart = document.getElementsByClassName('restart')[0];
    let returnDom = document.getElementsByClassName('return')[0];

    easy.onclick = function () {
        menu.level = 'easy';
        menu.upDate(); 
        level.style.display = 'none';
        order.style.display = 'flex';
        menu.createOrder(order,menuDom,info)
    }
    hard.onclick = function () {
        menu.level = 'hard';
        menu.upDate();
        level.style.display = 'none';
        order.style.display = 'flex';
        menu.createOrder(order,menuDom,info);
    }
    restart.onclick = function () {
        game.restart();
    }

    returnDom.onclick = function () {
        ground.viewContent.style.display = 'none';
        menuDom.style.display = 'block';
        level.style.display = 'flex';  
        info.style.display = 'none';
        order.style.display = 'none';
        game.upDate('easy',1);
    }
}



menu.chooseLevel()