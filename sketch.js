var PLAY = 1;
var END = 0;
var gameState = PLAY;
var back,backImage;
var boy,boyImage;
var boyrunImage,boyrun;
var boyattackImage,boyattack;
var boygun,boygunImage;
var ground;
var enemy1,enemy1Image;
var enemy2,enemy2Image;
var enemy3,enemy3Image;
var score;
var enemysGroup,enemys2Group,enemys3Group;
var enemy;
var gameover,restart,gameoverImage,restartImage;
var dead,deadImage;
var instructions,instructionsImage;
var youwin,youwinImage;

function preload(){

  backImage = loadImage("images/gameback.jpg");
  boyImage = loadImage("images/boyImage.png");
  boyrunImage = loadAnimation("images/Boyrun1.png","images/Boyrun2.png","images/Boyrun3.png","images/Boyrun4.png","images/Boyrun5.png","images/Boyrun6.png");
  boyattackImage = loadAnimation("images/boyattack1.png","images/Boyattack2.png","images/Boyattack3.png","images/Boyattack4.png");
  boygunImage = loadAnimation("images/Boygun1.png","images/Boygun2.png","images/Boygun3.png","images/Boygun4.png","images/Boygun5.png","images/Boygun6.png");
  enemy1Image = loadImage("images/Enemyno1.1.png");
    gameoverImage = loadImage("images/gmaeover.png");
    restartImage = loadImage("images/Restart.png");
    enemy3Image = loadImage("images/Enemyno3.4.png");
    deadImage = loadImage("images/deadImage.png");
    instructionsImage = loadImage("Instructions.png");
    youwinImage = loadImage("images/you win.jpg");

}

function setup(){

  createCanvas(windowWidth,windowHeight);

  back = createSprite(width/2,height/2);
  back.addImage(backImage);
    
  back.visible = false;

  boy = createSprite(100,600);
  boy.addImage(boyImage);
  boy.scale  = 2.4;

  boyrun = createSprite(100,690,2,2);

  boyattack = createSprite(100,690,2,2);

  boygun = createSprite(100,690,2,2);

  inground = createSprite(100,800,4000,20);
  inground.visible = false;

  score = 0;

  dead = createSprite(900,100);
  dead.addImage(deadImage);
  dead.visible = false;
  dead.scale = 0.9;

  instructions = createSprite(900,500);
  instructions.addImage(instructionsImage);
  instructions.scale = 2;

  youwin = createSprite(800,500);
  youwin.addImage(youwinImage);
  youwin.visible = false;
  youwin.scale = 2;

  //enemy = createSprite(1500,750,2,2);
  //enemy.visible = false;

  restart = createSprite(800,800);
  restart.addImage(restartImage);
  restart.scale = 1;

  gameover = createSprite(800,500);
  gameover.addImage(gameoverImage);
  gameover.scale = 1;

//  enemy3 = createSprite(1500,750,2,2);
 //  enemy.visible = false;

  enemysGroup = new Group();
  enemys2Group = new Group();
  enemys3Group = new Group();



}

function draw(){

  background('#F9D66F');
  console.log(boyrun.y);

  if (gameState === PLAY){
    back.velocityX=-4;
    if (keyDown("space")){
       boyrun.velocityY = -19;
      
       
  }
  
    
   enemys3();
     enemys();

     if (score === 500){
      youwin.visible = true;
     }

     if (score === 500){
      enemys3Group.destroyEach();
     }

     if (score === 500){
      enemysGroup.destroyEach();
           }

     if (score === 500){
      background.velocityX = 0;
    }

    if (score === 500){
      boyrun.visible = false;
     }

     if (score === 500){
      dead.visible = false;
     }

     if (score === 500){
      background.velocityX = 0;
     }

     if (score === 500){
      boygun.visible = false;
     }


     if (score === 500){
       boyattack.visible = false;
     }

     

     if (keyDown("s")){
      text.visible = false;
     }

    gameover.visible = false;
    restart.visible = false;

  boyrun.velocityY = boyrun.velocityY + 0.8;
  console.log(back.x);
  
  if (back.x < width/2.5){
    back.x = width/2;
   }

  if (keyDown("s")){
     boyrun.addAnimation("running",boyrunImage);
     boyrun.scale  = 2.4;
  }

  if (keyDown("s")){
     boy.visible = false;
  }

  if (keyWentDown("a")){
     boyattack.addAnimation("attacking",boyattackImage);
     boyattack.visible = true;
     boyattack.scale = 2.4;
  }

  if (keyWentDown("a")){
     boyrun.visible = false;
  }

  if (keyWentUp("a")){
     boyrun.visible = true;
  }

  if (keyWentUp("a")){
     boyattack.visible = false;
  }

    if (keyDown("g")){
       boyrun.visible = false;
    }

    if (keyWentUp("g")){
       boyrun.visible = true;
    }

    if (keyWentDown("g")){
       boygun.addAnimation("guning",boygunImage);
       boygun.scale = 2.4;
       boygun.visible = true;
    }
    
    if (keyWentUp("g")){
       boygun.visible = false;
    }

    if (boygun.isTouching(enemysGroup)){
      enemysGroup.destroyEach();
      dead.visible = true;
      score = score+1;
    }

    if (boyrun.isTouching(enemys3Group)){
      boyrun.visible = false;
      gameState = END;
    }


    
    

  }

  if (keyDown("s")){
    instructions.visible = false;
  }

  

  


     
    if (gameState === END){
      boyrun.visible = false;
      boygun.visible = false;
      boyattack.visible = false;
      enemysGroup.visible = false;
      enemys3Group.visible = false;
      restart.visible = true;
      instructions.visible = true;
      dead.visible = false;
      gameover.visible = true;
      if (mousePressedOver(restart)){
        gameState = PLAY;
      boyrun.visible = true;
      score=0;

      instructions.visible = false;
        
        enemys3Group.destroyEach();
        enemysGroup.destroyEach();

      }
    }
    
    
   
   if (keyDown("s")){
       back.visible = true;
    }


   
    boyrun.collide(inground);
    boy.collide(inground);
    drawSprites();
    stroke("white");
  textSize(40);
  fill("black");
  text("Score --- " + score,800,50);

   
}

function enemys(){

  if (frameCount % 150 === 0){
    enemy = createSprite(500,750,2,2);
     enemy.velocityX = -(6+score/15);
     enemy.addImage(enemy1Image);
    
     enemy.x = Math.round(random(800,600));
     enemy.lifetime = 200;
     enemysGroup.add(enemy);
     if (keyDown("s")){
    enemy.visible = true;
   }
 
 
  
   
  }
}


function enemys3(){

  if (frameCount %350=== 0){
     enemy3 = createSprite(1500,750,2,2);
     enemy3.velocityX = -(6+score/20);
     enemy3.addImage(enemy3Image);
     enemy3.debug = true;
     enemy3.x = Math.round(random(400,800));
     enemy3.lifetime = 200;
     enemys3Group.add(enemy3);
     if (keyDown("s")){
    enemy3.visible = true;
   }
  }
}