NoseX=0
NoseY=0
//https://i.postimg.cc/qqd5cjcV/1-removebg-preview.png

function preload(){
    mustache = loadImage('https://i.postimg.cc/9MJhLDbQ/download-removebg-preview.png')
}

function setup(){
    canvas = createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size=(400,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        NoseX = results[0].pose.nose.x-180;
        NoseY = results[0].pose.nose.y-195;
        console.log("nose x = " + NoseX);
        console.log("nose y = " + NoseY);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function modelLoaded() {
    console.log('PoseNet is initialised');
}

function draw(){
    image(video, 0, 0, 400, 300);
    image(mustache, NoseX, NoseY, 140, 140);
}

function take_snapshot(){
    save("my_picture.png");
}