function setup(){
    video = createCapture(VIDEO);
    video.size(550,500)

    canvas = createCanvas(500,500)
    canvas.position(560,150)

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function modelLoaded() {
    console.log("posenet is initialized");
}

function gotposes(result) {
    if(result.length > 0){
        console.log(result);
    }
}
 function draw() {
     background('red');
 }