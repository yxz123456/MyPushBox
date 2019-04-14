//创建人
let person = new Person();

// x,y表示人前面的，x1,y1表示人前面的前面的
let Direction = {
    left: {
        x: -1,
        y: 0,
        x1:-2,
        y1:0
    },
    up: {
        x: 0,
        y: -1,
        x1:0,
        y1:-2
    },
    right: {
        x: 1,
        y: 0,
        x1:2,
        y1:0
    },
    down: {
        x: 0,
        y: 1,
        x1:0,
        y1:2
    }
}

person.init = function () {
    this.position = ground.personPosition
}
person.move = function (d, map) {
    let i = this.position.x;
    let j = this.position.y;
    if (map[i + d.x][j + d.y][0] == 0 || map[i + d.x][j + d.y][0] == 3)			//人前面是空地或者目的地
    {
        map[i][j][0] -= 5;
        ground.remove(i,j);
        ground.append(i,j,map[i][j][0])
        map[i + d.x][j + d.y][0] += 5;
        ground.remove(i + d.x,j + d.y);
        ground.append(i + d.x,j + d.y,map[i + d.x][j + d.y][0])
        this.position = {
            x:i + d.x,
            y:j + d.y
        }
    }
    else if ((map[i + d.x][j + d.y][0] == 4) || (map[i + d.x][j + d.y][0] == 7))	//人前面是箱子
    {
        if ((map[i + d.x1][j + d.y1][0] == 3) || (map[i + d.x1][j + d.y1][0] == 0))	//箱子前面是空地或者目的地
        {
            map[i][j][0] -= 5;
            ground.remove(i,j);
            ground.append(i,j,map[i][j][0]);
            map[i + d.x][j + d.y][0] += 1;
            ground.remove(i + d.x,j + d.y);
            ground.append(i + d.x,j + d.y,map[i + d.x][j + d.y][0]);
            this.position = {
                x:i + d.x,
                y:j + d.y
            }
            map[i + d.x1][j + d.y1][0] += 4;
            ground.remove(i + d.x1,j + d.y1);
            ground.append(i + d.x1,j + d.y1,map[i + d.x1][j + d.y1][0]);
        }
    }
    setTimeout(() => {
        if(game.win(ground.squareTable)){
            alert('恭喜你顺利通过本关');
            game.next();
        }
    }, 500);
    
}