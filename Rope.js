class Rope{
    constructor(bodyA, pointB){
       var options = {
          bodyA: bodyA, 
          pointB:pointB,
          stiffness: 1.2,
          length: 250
       }
      
       
       this.rope = Constraint.create(options)
       this.pointB = pointB
       World.add(world,this.rope)
    
    }

    attach (body){
        this.rope.bodyA = body
    }

    fly (){
        this.rope.bodyA = null 
    }
    

    display(){
        if(this.rope.bodyA){
        var posA = this.rope.bodyA.position
        var posB = this.pointB
        push ()
        rectMode(CENTER)
        strokeWeight(3)
        stroke("white")
        line (posA.x,posA.y, posB.x, posB.y )
      
        pop ()
        }
    }
}