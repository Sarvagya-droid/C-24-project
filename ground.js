class Ground{
    constructor(width, height){
        var optionsForGround ={
            isStatic:true,
        }
        this.body = Bodies.rectangle(400, 690, width, height, optionsForGround);
        this.width = width;
        this.height = height;

        World.add(world, this.body)
    }
    display(){
        rectMode(CENTER);
        fill("pink");
        rect(400, 690, this.width, this.height);
    }
}