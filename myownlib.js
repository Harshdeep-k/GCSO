function isTouching(ob1,ob2)
{
if(ob1.x-ob2.x<=ob1.width/2+ob2.width/2
    && ob2.x-ob1.x<=ob1.width/2+ob2.width/2)
{
    ob1.velocityX=0;
    var deformation=(0.5*weight*speed*speed)/22500;
        if(deformation<100)
        {
            ob1.shapeColor=rgb(0,255,0);
        }
        else if(deformation<180 && deformation>100)
        {
            ob1.shapeColor=rgb(230,230,0);
        }
        else if(deformation>180)
        {
            ob1.shapeColor=rgb(255,0,0);
        }
    fill("white");
    stroke("red");
    textSize(30);
    text("Deformation:"+Math.round(deformation),30,50);
}
else
{
   ob1.shapeColo="white";
}
}
