var canvas,backgroundImage;
var gameState=0;
var playerCount;
var database;
var form,player,game;

function setup(){
  canvas=createCanvas(200,200);
  database=firebase.database();
  //kkvbrnjmejkhnj
  game=new Game();
  game.getState();
  game.start();
}

function draw(){
}
