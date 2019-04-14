let game = new MainGame('easy', 1, map(mapStr));

game.init = function(){
    ground.init();
    person.init();
    document.addEventListener('keydown', (e) => {
        if (e.which == 37) {
            person.move(Direction['left'], ground.squareTable);
        }
        else if (e.which == 38) {
            person.move(Direction['up'], ground.squareTable);
        }
        else if (e.which == 39) {
            person.move(Direction['right'], ground.squareTable);
        }
        else if (e.which == 40) {
            person.move(Direction['down'], ground.squareTable);
        }
    })
}

game.win = function(map){
    let flag = 0;
	let i, j;
	for (i = 0; i < map.length; i++)
	{
		for (j = 0; j < map[i].length; j++)
		{
			if (map[i][j][0] == 3 || map[i][j][0] == 4)
			{
				flag = 1;
				break;
			}
		}
	}
	if (flag == 0)
        return 1;
    return 0;
}


game.next = function(){
    game.upDate(this.level,this.order+1);
    ground.viewContent.innerHTML = '';
    ground.initSquareTable();
    person.init();
}

game.restart = function (){
    game.upDate(this.level,this.order);
    ground.viewContent.innerHTML = '';
    ground.initSquareTable();
    person.init();
}