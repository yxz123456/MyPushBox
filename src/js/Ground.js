//创建广场类
let ground = new Ground(BASE_GROUND_X,BASE_GROUND_Y);

ground.init = function () {
    this.viewContent.className = 'ground';
	this.squareTable = [];
	this.personPosition = {};
	this.initSquareTable();
	document.getElementsByClassName('wrapper')[0].appendChild(this.viewContent);
}

ground.initSquareTable = function () {
	this.squareTable = JSON.parse(JSON.stringify(game.cur));
	this.putSquare();
}
ground.putSquare = function () {
    for(let i = 0; i < this.squareTable.length; i++){
        for(let j = 0; j < this.squareTable[i].length; j++){
            switch (this.squareTable[i][j][0] || this.squareTable[i][j])
			{
				case 0:
					this.squareTable[i][j] = {
						0:0,
						1:SquareFactory.create('floor',i , j)
					};	//空白
					break;
				case 1:
					this.squareTable[i][j] = {
						0:1,
						1:SquareFactory.create('wall',i , j)
					};	//墙
					break;
				case 3:
					this.squareTable[i][j] = {
						0:3,
						1:SquareFactory.create('destination',i , j)
					};	//目的地
					break;
				case 4:
					this.squareTable[i][j] = {
						0:4,
						1:SquareFactory.create('box',i , j)
					};	//箱子
					break;
				case 5:
					this.squareTable[i][j] = {
						0:5,
						1:SquareFactory.create('person',i , j)
					};	//人
					this.personPosition = {
						x:i,
						y:j
					}
					break;
				case 7:
					this.squareTable[i][j] = {
						0:7,
						1:SquareFactory.create('darkBox',i , j)
					};//箱子+目的地
					break;
				case 8:
					this.squareTable[i][j] = {
						0:8,
						1:SquareFactory.create('person',i , j)
					};//人+目的地
					this.personPosition = {
						x:i,
						y:j
					}
					break;
			}
			this.viewContent.appendChild(this.squareTable[i][j][1].viewContent);
        }
    }
}

ground.remove = function (x,y) {
    //视觉上拆 
    this.viewContent.removeChild(this.squareTable[x][y][1].viewContent)

    //数据上拆
    this.squareTable[x][y][1] = null
}
ground.type = {
	0:'floor',
	3:'destination',
	4:'box',
	5:'person',
	7:'darkBox',
	8:'person'
}
ground.append = function (x,y,num) {
	let square = SquareFactory.create(this.type[num],x , y);
    //视觉上安
    this.viewContent.appendChild(square.viewContent)
    
    //数据上安
    this.squareTable[square.x][square.y] = {
		0:num,
		1:square
	}
}


