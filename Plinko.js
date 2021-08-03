class Plinko {
    constructor(x,y){
        var options = {
            isStatic:true
        }

        this.body = Bodies.circle(x,y,5,options);
        this.r = 5;
        World.add(world,this.body);

    }

    display(){
       fill('255');
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
    }
}