//Create variables here
var dog, happydog, database;
var foodS, foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("sprites/Dog.png");
  happydogImg = loadImage("sprites/happydog.png");
}

function setup() {
  database = firebase.database;
  console.log(database);
  createCanvas(500, 500);
  var dog = createSprite(250,250,20,20);
  this.image = loadImage("sprites/Dog.png");

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here
textSize(30);
text("Press Up_Arrow to feed the dog", width-300, 50);
fill("black");
stroke("red");
}

//function to read values from DB
function readStock(data){
  foodS=data.val();
}

//function to write values from DB
function writeStock(x){

  if(x<=0){
    x = 0;
  }
    else{
      x=x-1;
    }
  
  database.ref('/').update({
    Food:x
   }
  )
}



