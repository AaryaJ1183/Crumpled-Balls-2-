class Dustbin2 {
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.image = loadImage("Dustbin.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER)
        fill("red")
        image(this.image,this.body.position.x,this.body.position.y,240, 150)
    }
}