let tool = {
    //原型上的继承
    inherit(Target,Origin){
        function temp() {}
        temp.prototype = Origin.prototype
        Target.prototype = new temp()
        Target.prototype.constuctor = Target
        Target.prototype.uber = Origin
    },
    //继承公有属性
    extends(origin){
        let result = function () {
            origin && origin.apply(this, arguments)
        }
        this.inherit(result,origin)
        return result
    },
}


