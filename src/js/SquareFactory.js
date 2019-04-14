function SquareFactory() {

}

SquareFactory.create = function (type, x, y) {
    if (!SquareFactory.prototype[type]) {
        throw 'no is type'
    }
    //创建这个type的实例
    let newSquare = SquareFactory.prototype[type](type, x, y)
    return newSquare
}

SquareFactory.prototype.init = function (square, type, x, y, strategyMessage) {
    let squareDom = square.viewContent
    squareDom.className = 'square ' + type
    squareDom.style.left = x * SQUAREWIDTH + 'px'
    squareDom.style.top = y * SQUAREWIDTH + 'px'
    //每个方块都有一个touch方法，被触碰会怎么样(蛇头没有)
    square.touch = function () {
        return strategyMessage
    }
}


SquareFactory.prototype.destination = function (type, x, y) {
    let obj = new Destination(x, y, SQUAREWIDTH, SQUAREWIDTH)
    this.init(obj, type, x, y, ACTIONENUM.eat)
    obj.upDate(x,y)
    return obj
}

SquareFactory.prototype.floor = function (type, x, y) {
    let obj = new Floor(x, y, SQUAREWIDTH, SQUAREWIDTH)
    this.init(obj, type, x, y, ACTIONENUM.move)
    return obj
}

SquareFactory.prototype.wall = function (type, x, y) {
    let obj = new Wall(x, y, SQUAREWIDTH, SQUAREWIDTH)
    this.init(obj, type, x, y, ACTIONENUM.die)
    return obj
}

SquareFactory.prototype.person = function (type, x, y) {
    let obj = new Person(x, y, SQUAREWIDTH, SQUAREWIDTH)
    this.init(obj, type, x, y)
    obj.upDate(x,y)
    return obj
}

SquareFactory.prototype.box = function (type, x, y) {
    let obj = new Box(x, y, SQUAREWIDTH, SQUAREWIDTH)
    this.init(obj, type, x, y, ACTIONENUM.die)
    return obj
}
SquareFactory.prototype.darkBox = function (type, x, y) {
    let obj = new Box(x, y, SQUAREWIDTH, SQUAREWIDTH)
    this.init(obj, type, x, y, ACTIONENUM.die)
    return obj
}