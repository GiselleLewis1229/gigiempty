class SlingShot {
    constructor(bodyA,pointB){
        var option = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }  
        this.pointB = pointB
        this.SlingShot = Constraint.create(option)
    World.add(world,this.SlingShot)
    }
    display(){
        if(this.SlingShot.bodyA){

        strokeWeight(3);
        line (this.SlingShot.bodyA.position.x,this.SlingShot.bodyA.position.y,this.pointB.x,this.pointB.y)
        }
    }

    fly(){
        this.SlingShot.bodyA = null;


    }
}