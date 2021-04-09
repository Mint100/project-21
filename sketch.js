var canvas;
var music;
var box;
var edges;
var surface1,surface2,surface3,surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces



    //create box sprite and give velocity
    box = createSprite(random(20,750), 350, 30, 30);
    box.shapeColor = "white";
    box.velocityX=2;
    box.velocityY=2;
    
    surface1=createSprite(90, 580, 180, 20);
    surface1.shapeColor="blue";

    surface2=createSprite(290, 580, 180, 20);
    surface2.shapeColor="red";

    surface3=createSprite(490, 580, 180, 20);
    surface3shapeColor="yellow";

    surface4=createSprite(690, 580, 180, 20);
    surface4.shapeColor="cyan";

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites(); 
    box.bounceOff(edges);
    box.bounceOff (surface1);
    box.bounceOff (surface2);
    box.bounceOff (surface3);
    box.bounceOff (surface4);
    //create edgeSprite
    drawSprites();



    //add condition to check if box touching surface and make it box
}
