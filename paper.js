class Paper{
    constructor(x,y,radius){
        var options={
            'isStatic':false,
            'friction':0.5,
            'restiution':0.3,
            'density':1.2,

        }
  
     this.body=Bodies.circle(56, 614, 25,options);
     this.x=56;
     this.y=614;  
     this.radius=25      
      World.add(world,this.body);

    }
    display(){ 
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        
        ellipseMode(RADIUS);
        //strokeWeight(4);
      //  stroke("green");
        fill("red");
        ellipse(0,0, 25, 25);
        pop(); 
    }

};