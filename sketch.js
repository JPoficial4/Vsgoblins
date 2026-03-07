var player,playerRunning,playerJumping,playerAttacking;
var canvas;
var chao,chaoImg ;
var bloco;
var montanha1,montanha1Img,montanha2,montanha2Img,montanha3,montanha3Img;
var goblin,goblinRunning,goblinAttacking,goblinArqueiro,goblinArqueiroRunning,goblinArqueiroAttacking
var goblinsGroup;
var soloInvisivel;
function preload () {
  playerRunning = loadAnimation("./assets/sprite_0.png",
   "./assets/sprite_1.png",
   "./assets/sprite_2.png",
   "./assets/sprite_3.png",
   "./assets/sprite_4.png");
   playerJumping = loadAnimation("./assets/sprite_pulo_0.png",
   "./assets/sprite_pulo_1.png",
   "./assets/sprite_pulo_2.png",
   "./assets/sprite_pulo_3.png");
   playerAttacking = loadAnimation("./assets/playerAttacking1.png",
   "./assets/playerAttacking2.png",
   "./assets/playerAttacking3.png",
   "./assets/playerAttacking4.png");
   goblinRunning = loadAnimation("./assets/goblinandando1.png",
   "./assets/goblinandando2.png",
   "./assets/goblinandando3.png",);
   goblinAttacking = loadAnimation("./assets/goblinatacando1.png",
   "./assets/goblinatacando2.png",
   "./assets/goblinatacando3.png",);
   goblinArqueiroRunning = loadAnimation("./assets/correndo1.png",
   "./assets/correndo2.png",
   "./assets/correndo3.png",
   "./assets/correndo4.png");
   goblinArqueiroAttacking = loadAnimation("./assets/atirando1.png",
   "./assets/atirando2.png",
   "./assets/atirando3.png",
   "./assets/atirando4.png");
   montanha3Img = loadImage("./assets/montanha3.png")
   montanha2Img = loadImage("./assets/montanha2.png")
   montanha1Img = loadImage("./assets/montanha1.png")
   chaoImg = loadImage("./assets/chao.png")
}

function setup() {
  canvas = createCanvas(1510,710);
  montanha1 = createSprite(200,200);
  montanha2 = createSprite(700,200);
  montanha3 = createSprite(1400,200);
  montanha1.addImage(montanha1Img);
  montanha2.addImage(montanha2Img);
  montanha3.addImage(montanha3Img);
  montanha1.velocityX = -1;
  montanha2.velocityX = -1;
  montanha3.velocityX = -1;
  soloInvisivel = createSprite(755,400,1510,100);
  soloInvisivel.visible = false;
  player = createSprite(200,200,50,50);
  player.addAnimation("running",playerRunning);
  player.addAnimation("jumping",playerJumping);
  player.addAnimation("attacking",playerAttacking);
  bloco = createSprite(755,620,1510,200);
  bloco.shapeColor = ("#c76c16");
  chao = createSprite(755,570,1510,50)
  chao.addImage(chaoImg);
  chao.velocityX = -3
}
                                   
function draw() {
  background("#081d31");
  player.velocityY = player.velocityY + 0.8
  player.collide(chao);
  if(keyDown("space") && player.y >= 345){
    player.changeAnimation("jumping");
    player.velocityY = -16;
    player.scale = 1;
  } else if(keyDown("x")){
    player.changeAnimation("attacking");
    player.scale = 1.8;
    console.log("x")
  } 
  if(chao.x < -1400){
    chao.x = 755
  }
  if(player.y > 356){
    player.changeAnimation("running");
    player.scale = 1;
  } else{
    player.changeAnimation("jumping");
  }
  gerarMontanha();

  gerarGoblin()

  drawSprites();
}
  function gerarMontanha(){
   if(frameCount % 600  === 0){
    var tipo =  Math.round(random(1,3))
    var montanha = createSprite(1750,200);
    switch (tipo){
      case 1: montanha.addImage(montanha1Img)
        break;
    
      case 2: montanha.addImage(montanha2Img)
        break;

      case 3:montanha.addImage(montanha3Img)
    }
    montanha.velocityX = -1;
    montanha.depth = soloInvisivel.depth - 1;
    montanha.lifetime = 3000;
  }
}

  function gerarGoblin(){
   if(frameCount % 250  === 0){
    var tipo =  Math.round(random(1,2))
    var enemy = createSprite(1750,430);
    switch (tipo){
      case 1: enemy.addAnimation("goblinRunning",goblinRunning)
        break;
      case 2: enemy.addAnimation("goblinArqueiroRunning",goblinArqueiroRunning)
      enemy.mirrorX(-1);
        break;
    }
    enemy.velocityX = -3
    enemy.scale = 0.4
    enemy.lifetime = 1500;
   }
  }