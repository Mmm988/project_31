const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var person,personImage;
var thunder,thunderImage1,thunderImage2,thunderImage3,thunderImage4;
var drops=[];
var maxDrop=100;
var ground;


function preload(){
  personImage=loadAnimation("images/Walking Frame/walking_8.png",
  "images/Walking Frame/walking_7.png",
  "images/Walking Frame/walking_6.png",
  "images/Walking Frame/walking_5.png",
  "images/Walking Frame/walking_4.png",   
  "images/Walking Frame/walking_3.png",
  "images/Walking Frame/walking_2.png",
  "images/Walking Frame/walking_1.png")
  thunderImage1=loadImage("images/thunderbolt/1.png")
  thunderImage2=loadImage("images/thunderbolt/2.png")
  thunderImage3=loadImage("images/thunderbolt/3.png")
  thunderImage4=loadImage("images/thunderbolt/4.png")
}


function setup(){
   createCanvas(500,700)

   engine=Engine.create();
   world = engine.world;

    ground=createSprite(250,695,500,10);
    ground.shapeColor="brown";

    person = createSprite(235,550);
    person.addAnimation("person",personImage);
    person.scale=0.4;
    
    if(frameCount%150===0){
       for(var i=0; i<maxDrop; i++){
       drops.push( new Drop( random(0,500), random(0,700),5 ) )
      }
    }
      if(drops.y>height){
         Matter.Body.setPosition(drops.body,{x:random(0,500),y:0})
      } 
}


function draw(){
    background(0)
    Engine.update(engine)
    
    ThunderBolt();
    

    for(var i=0; i<maxDrop; i++){
      drops[i].display()
    }

    drawSprites();
}   


function ThunderBolt(){
  rand=Math.round(random(1,4))
  if(frameCount%80===0){
      thunderCreateFrame=frameCount;
      thunder= createSprite(random(10,470),random(10,30),10,10)
      thunder.scale=random(0.3,0.6);
      thunder.lifetime=10;
      switch(rand){
       case 1: thunder.addImage(thunderImage1);
       break;
       case 2: thunder.addImage(thunderImage2);
       break;
       case 3: thunder.addImage(thunderImage3);
       break;
       case 4: thunder.addImage(thunderImage4);
       default: break;
      }
  }
}


