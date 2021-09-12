noseX=0;
noseY=0;

function preload()
{
Lipstick_img= loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
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
        noseX=results[0].pose.nose.x-20;
        noseY=results[0].pose.nose.y+15;
        console.log("nose X = "+noseX);
        console.log("nose Y = "+noseY);
    }
}

function draw()
{
image(video, 0, 0, 300, 300);
image(Lipstick_img, noseX, noseY, 50, 20);
}

function take_snapshot()
{
save("lipstick pic.png");
}
