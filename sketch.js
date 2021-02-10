const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var ground, ball;


function setup(){
    var canvas = createCanvas(400,400);
    myengine = Engine.create();
    myworld = myengine.world;

    var options={

        isStatic:true
    }
    var ballOptions={

        restitution:1.0
    }

    ground = Bodies.rectangle(200,390,400,20,options);
    World.add(myworld,ground);

    ball=Bodies.circle(200,200,20,ballOptions);
     World.add(myworld,ball);

   
    console.log(ground.isStatic);
    console.log(ground.position.x);
}

function draw(){
    background(0);
    Engine.update(myengine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
            //200           //200
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
   
}