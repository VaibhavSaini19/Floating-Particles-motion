let maxPts = 75;
let points = [];
let FR = 60;
let ctr = 0;

function setup(){
    // frameRate(FR);
    createCanvas(800, 600);
    background(0);
    for(var i=0; i<maxPts; i++){
        addPoint(1);
    }
    stroke(255);
}

function draw(){
    background(0);
    var flag = 0;
    for(pt of points){
        pt.update();
        pt.render();
    }
    for(var i=0; i<points.length; i++){
        if(points[i].offScreen()){
            points.splice(i, 1);
            addPoint(0);
        }
    }
    
}