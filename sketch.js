const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground2 = new Ground(500, 305, 300, 170);
   // Top level
    block = new Block(390,155,30,40);
   // Second level
    block2 = new Block(420,195,30,40);
    block3 = new Block(390, 195, 30, 40);
    block4 = new Block(360,195,30, 40);
   // Third level
    block5 = new Block(450, 230, 30, 40);
    block6 = new Block(420, 230, 30, 40);
    block7 = new Block(390, 230, 30, 40);
    block8 = new Block(360, 230, 30, 40);
    block9 = new Block(330, 230, 30, 40);
   // Fourth level
    blog10 =  new Block(300, 265, 30, 40);
    block11 = new Block(330, 265, 30, 40);
    block12 = new Block(360, 265, 30, 40);
    block13 = new Block(390, 265, 30, 40);
    block14 = new Block(420, 265, 30, 40);
    block15 = new Block(450, 265, 30, 40);
    Block16 = new Block(480, 265, 30, 40);
    polygon = new Polygon(200,50);
   
    slingshot = new SlingShot(polygon.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    block.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    ground.display();
    ground2.display();

    polygon.display();
    slingshot.display();    
}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){
    slingshot.fly();
    
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}
