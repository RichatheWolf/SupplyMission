class packages {
    constructor(x, y, width, height){
        var packageoptions = {
            restitution: 1
        }
        this.body = Bodies.rectangle(x, y, width, height, packageoptions);
        World.add(world, this.body);
    }

    /*
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        pop();
    }
    */
}

