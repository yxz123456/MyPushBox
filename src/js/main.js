/***********************************************************
把所有的东西都看成一个方块
0:空地  1:墙  3:目的地  4:箱子  5:人  7:箱子+目的地  8:人+目的地
					人不可以移动:
						1.人前面是墙
						2.人前面是箱子，箱子前面是墙
					人可以移动:
						1.人前面是空地
						2.人前面是目的地
						3.人前是箱子
							a.箱子前面是目的地
							b.箱子前面是空地
判断输赢:
	如果地图上没有 目的地 且 没有 箱子 则通关
***********************************************************/

const BASE_GROUND_X = 400
const BASE_GROUND_Y = 60

//方块宽度
const SQUAREWIDTH = 60;

//游戏地图
const mapStr = {
    'easy':{
        1:'0 0 0 0 0 0 0 0 0 0|0 0 0 1 1 1 1 0 0 0|0 0 0 1 3 3 1 0 0 0|0 0 1 1 0 3 1 1 0 0|0 0 1 0 0 4 3 1 0 0|0 1 1 0 4 0 1 1 1 0|0 1 0 0 0 4 4 0 1 0|0 1 0 0 5 0 0 0 1 0|0 1 1 1 1 1 1 1 1 0|0 0 0 0 0 0 0 0 0 0',
        2:'0 0 0 0 0 0 0 0 0 0|0 0 1 1 1 1 1 0 0 0|0 0 1 0 0 0 1 0 0 0|0 0 1 0 0 3 1 1 0 0|0 1 1 4 0 4 3 1 0 0|0 1 0 0 3 0 1 1 1 0|0 1 0 1 0 4 4 0 1 0|0 1 0 0 5 0 0 3 1 0|0 1 1 1 1 1 1 1 1 0|0 0 0 0 0 0 0 0 0 0'
    },
    'hard':{
        1:'1 1 1 1 1 1 1 1 1 0|1 0 0 0 1 1 0 0 1 0|1 0 1 0 4 0 4 0 1 0|1 0 0 0 3 0 0 0 1 0|1 1 0 1 3 0 3 1 1 0|1 1 5 1 1 1 3 1 1 1|1 0 4 0 0 0 0 0 0 1|1 0 0 0 1 1 4 1 0 1|1 1 1 1 1 1 0 0 0 1|0 0 0 0 0 1 1 1 1 1'
    }
}

//转成二维数组
function map(mapStr){
    let map = {};
    for(let key in mapStr){
        map[key]= {length:0};
        for(let index in mapStr[key]){
            map[key].length++;
            map[key][index] = [];
            let arr = mapStr[key][index].split('|');
            console.log(arr)
            arr.forEach((val) => {
                map[key][index].push(val.split(' ').map((v) => parseInt(v)));
            })
        }
    }
    return map;
}
//方块类
function Square(x,y,width,height,dom){
    this.x = x;
    this.y = y;
    this.width = width + 'px';
    this.height = height + 'px';
    this.viewContent = dom || document.createElement('div');
}

//游戏类
function Game(level,order,map){
    this.map = map;
    this.level = level;
    this.order = order;
    this.cur = map[level][order];
}

Game.prototype.upDate = function(level,order){
    this.level = level;
    this.order = order;
    //是否还有下一关
    //有
    if(this.map[this.level].length >= this.order){
        this.cur = this.map[this.level][this.order];
    }
    //没有
    else{
        alert('恭喜你已通过当前难度全部关卡~');
    }
    
}

Square.prototype.touch = function(){

}

Square.prototype.upDate = function(x, y){
    this.x = x
    this.y = y
}

//菜单类
function Menu(map){
    this.level = null;
    this.order = null;
    this.map = map;
}

let Wall = tool.extends(Square);
let Floor = tool.extends(Square);
let Box = tool.extends(Square);
let Destination = tool.extends(Square);
let Person = tool.extends(Square);
let Ground = tool.extends(Square);
let MainGame = tool.extends(Game);



let ACTIONENUM = {
    eat:'eat',
    move:'move',
    die:'die'
}