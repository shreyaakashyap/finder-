function preload(){
    
}

function setup(){
    canvas = createCanvas(400, 400)
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 400, 400);                                                                                                          
}

function search(){
    objectDetection = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Finding Object..."
}

function modelLoaded(){
    console.log("Model Loaded.");
    status = true
}