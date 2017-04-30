var barL,barR,ball,st=10,wait = 0;
var score = [0,0];
function setup() {
    createCanvas(600,600);
    barL=new bar(20,100,10);
    barR=new bar(580,100,10);
    ball=new bll(3,6);
}

function keyReleased() {
    if(keyCode==32) wait = !wait
    if(keyCode=='R'.charCodeAt(0)) {
        wait = false
        score[0]=score[1]=0;
              var m = random()+1;
        st=10;
        var vc = createVector(1,m);
        if (random()*100 < 50 ) vc.x=-1
        
        vc.setMag(6.7)
        ball = new bll(vc.x,vc.y);
    }
}
function drawEle() {
    background(0);
    fill(255)
    textSize(32);
    text(score[1].toString(),50,50);
    text(score[0].toString(),550-16,50);
    barL.show();
    barR.show();
}

function draw() {
        

    if (wait) {
        text("Paused",200,250)
        return;
    }
    drawEle()
    var gb =constrain(map(st,10,40,255,0),0,255);
    fill(255,gb,gb)
    ball.show();
    var c = ball.colide(barL,barR);
    if (c == 3) {
        st*=1.05
    } else
    if (c>0) {
        score[c-1]++;
        if (score[c-1]>=7 && score[c-1]-score[c%2]>=2) {
            var stt=" Left";
            if (c==1)stt=" Right";
            
            drawEle()
            text("Winner"+ stt,300,350);
            
            score[0]=score[1]=0;
            wait = true
            
        }
        var m = random()*1.5-.75;
        m;
        st=10;
        var vc;
        if (random()*100<50) {
             vc = createVector(cos(m),sin(m));
        } else {
            
             vc = createVector(-cos(m),sin(m));
             
        }

        
        
        vc.setMag(6.7)
        ball = new bll(vc.x,vc.y);
    }
    ball.next()
    if(barL.y-barL.h/2>=10)
    if(keyIsDown('W'.charCodeAt(0))) {
        barL.y-=st;
    } 
    if(barL.y+barL.h/2<= height-st)
    if (keyIsDown('S'.charCodeAt(0))) barL.y+=st;
    if(barR.y-barR.h/2>=st)
    if(keyIsDown('I'.charCodeAt(0))) {
        barR.y-=st;
    } 
    if(barR.y+barR.h/2<= height-st)
    if (keyIsDown('K'.charCodeAt(0))) barR.y+=st;


}
