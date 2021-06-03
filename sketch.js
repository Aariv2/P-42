
var hr , mn , sc , hrangle , mnangle, scangle
function setup() {
  createCanvas(400,400);
 angleMode(DEGREES)
}

function draw() {
  background(0);  
hr = hour();
mn = minute();
sc = second();
translate (200,200)
rotate(-90)
hrAngle = map(hr%12,0,12,0,360)
mnAngle = map(mn,0,60,0,360)
scAngle = map(sc,0,60,0,360)
push()
rotate(hrAngle)
stroke("red")
strokeWeight(7)
line(0,0,50,0)
pop()

push()
rotate(mnAngle)
stroke("green")
strokeWeight(7)
line(0,0,75,0)
pop()

push()
rotate(scAngle)
stroke("blue")
strokeWeight(7)
line(0,0,100,0)
pop()



strokeWeight(10)
stroke("red")
noFill()
arc(0,0,260,260,0,hrAngle)

stroke("green")
noFill()
arc(0,0,280,280,0,mnAngle)

stroke("blue")
noFill()
arc(0,0,300,300,0,scAngle)




}