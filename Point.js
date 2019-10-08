class Point{
    constructor(x, y, size){
        this.pos = createVector(x, y);
        this.size = size;
        this.xoff = x;
        this.yoff = y;
        this.velX  = random([0.5, 0.75, 1]);
        this.velXFast = this.velX * 4;
        this.velY = 0.001;
        this.velYFast = this.velY * 4;
        // this.velX = 0.001;
        // this.velXFast = this.velX * 4;
        // this.velY  = random([0.5, 0.75, 1]);
        // this.velYFast = this.velY * 4;
    }

    render(){
        strokeWeight(this.size);
        point(this.pos.x, this.pos.y);
        point(width-this.pos.x, this.pos.y);
    }

    update(){
        if(keyIsDown(ENTER)){
            this.xoff += this.velXFast;
            this.yoff += this.velYFast;
        }else{
            this.xoff += this.velX;
            this.yoff += this.velY;
        }
        let y = noise(this.yoff) * height;
        // let x = noise(this.xoff) * width;
        
        this.pos = createVector(this.xoff, y);
        // this.pos = createVector(x, this.yoff);
    }

    offScreen(){
        if(this.pos.x >= width/2 || this.pos.y <= 0 || this.pos.y >= height){
        // if(this.pos.y >= height || this.pos.x <= 0 || this.pos.y >= width){
            return true;
        } 
        return false;
    }
}

function addPoint(inside){
    let x;
    // let y;
    if(inside){
        x = random(width/2);
        // y = random(height);
    }else{
        x = 0;
        // y = 0;
    }    
    let y = random(height);
    // let x = random(width);
    let size = random()*6;
    let pt = new Point(x, y, size)
    points.push(pt);
}
