class Ball{
    constructor(x,y,r){
       var options = {
        frictionAir: 0.005,
        density: 1
       }
    
       this.body = Bodies.circle(x,y,r,options)
       this.r = r
       World.add(world,this.body)
    
    }

    display(){
        var angle = this.body.angle
        var pos = this.body.position
        push ()
        rotate (angle)
        translate (pos.x, pos.y)
        ellipseMode(CENTER)
        fill ("red")
        ellipse(0, 0, this.r)
        
        pop ()
    }
}