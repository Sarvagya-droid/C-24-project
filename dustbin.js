class Dustbin{
    constructor(x, y, width, height){
        var optionsForDustbin ={
            isStatic:true
           // density:1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, optionsForDustbin);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        fill("white");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}

