function preload()
{

}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    PoseNet=ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose', gotposes);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose X = "+results[0].pose.nose.x);
        console.log("nose Y = "+results[0].pose.nose.y);
    }
}

function draw()
{
image(video, 0, 0, 300, 300);
}

function takeSnapshot()
{
save("lipstick pic.png");
}
