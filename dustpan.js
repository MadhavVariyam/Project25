class Pan{
    constructor(x,y,width,height){
        var options ={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png")
        World.add(world,this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        rectMode(CENTER);
        fill("silver");
        rect(pos.x,pos.y,this.width,this.height);
        image(this.image,425,350,350,350)
        pop();
    }   
}