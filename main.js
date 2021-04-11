Peter="";
Harry="";
song="";
function preload(){
    song=loadSound("Peter Pan Song.mp3");
    Harry=loadSound("Harry Potter Theme Song.mp3");
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(640,200);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,640,480);
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
    console.log("done");
}