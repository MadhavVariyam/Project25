class paper{
    constructor(x,y,diameter){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,diameter,options)
        this.diameter = this.diameter
        this.image = loadImage("paperball.png")
        World.add(world,this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        translate(pos.x,pos.y)
        ellipseMode(CENTER);
        fill(246, 38, 129)
        //ellipse(pos.x,pos.y,this.diameter,this.diameter);
        imageMode(CENTER)
        image(this.image,0,0,this.diameter/2,this.diameter/2)
        pop();
    }
}
