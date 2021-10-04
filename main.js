img="";
status="";
function preload(){
img=loadImage("dog_cat.jpg")
  
}
function setup(){
  canvas=createCanvas(640,420);
  canvas.center();
  objectDetecter=ml5.objectDetecter('cocossd',modleloaded);
  document.getElementById("status").innerHTML="status:detecting object";

}

function draw(){
  image(img,0,0,640,420)
  fill("#0000FF")
  text("dog",45,75);
  nofill();
stroke("#0000FF");
rect(30,60,450,350);
fill("#0000FF");
text("cat",320,120);
nofill();
stroke("#0000FF");
rect(300,90,270,320);
}
function modleloaded(){
console.log("modleloaded");
status=true;
objectDetecter.detecter(img,gotResult);

}
function gotResult(error,results){
if(error){console.log (error);}
console.log(results);


  


}