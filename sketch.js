 var bg;
 var issImage;
 var spacecraft1Img,spacecraft2Img,spacecraft3Img,spacecraft4Img;

 var iss;
 var spaceCraft;
 var hasDocked = false;

function preload(){
  bg = loadImage("spacebg.jpg");

  issImage = loadImage("iss.png");
  
  spacecraft1Img = loadImage("spacecraft1.png");
  spacecraft2Img = loadImage("spacecraft2.png");
  spacecraft3Img = loadImage("spacecraft3.png");
  spacecraft4Img = loadImage("spacecraft4.png");

}

function setup() {
  var canvas = createCanvas(1000,600);
  canvas.position(200,100);

  spaceCraft = createSprite(430,500,50,50);
  spaceCraft.addImage(spacecraft1Img);
  spaceCraft.scale = 0.2;

  iss = createSprite(500, 270, 50, 50);
  iss.addImage(issImage);
  iss.scale = 1;

 
}

function draw() {
  background(bg); 
  spaceCraft.addImage(spacecraft1Img);

  if(!hasDocked){
     spaceCraft.x = Math.round(random(432,437));

     if(keyDown(UP_ARROW)){
        spaceCraft.y = spaceCraft.y - 1;
         

     }

     if(keyDown(DOWN_ARROW)){
        spaceCraft.addImage(spacecraft2Img); 
        //spaceCraft.y = spaceCraft.y +1;

         
     }

     if(keyDown(RIGHT_ARROW)){
      spaceCraft.addImage(spacecraft4Img);
      spaceCraft.x = spaceCraft.x +1;
      
     }

     if(keyDown(LEFT_ARROW)){
      spaceCraft.addImage(spacecraft3Img);
       spaceCraft.x = spaceCraft.x - 1;
       
     }
  }   

  if(spaceCraft.y === 350 && spaceCraft.x === 434){
       hasDocked = true;
       textFont("algerian");
       fill("red");
       textSize(30);
       text ("Docking Successful",400,550);
       console.log("hi");
  }

  console.log(spaceCraft.y);
  console.log(spaceCraft.x);

  drawSprites();
}