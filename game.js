function bar(x, h, w) {
    this.y = 300;
    this.x=x;
    this.h=h;
    this.w=w;

    
}
bar.prototype.show = function (){
    rectMode(CENTER)
    rect(this.x,this.y,this.w,this.h);
}
function calc(dif) {
    var c = -map(dif,-50,50,-0.785398,0.785398);
    //alert(c)
    var v = createVector(5,0);
    v.x=v.x*cos(c)-v.y * sin(c);
    v.y=-v.x*sin(c)+v.y * cos(c);
    return v;

}

function bll (dx,dy){ 
    this.mag = 5;
    this.x=300;
    this.y=300;
    this.dx=dx;    
    this.dy=dy;

    this.show= function () {
        ellipseMode(CENTER);
        ellipse(this.x,this.y,20,20);
    }
    this.next = function() {
        this.x+=this.dx;
        this.y+=this.dy;
    }
    this.colide= function(a,b) {
        if (this.y+10>height) this.dy=-abs(this.dy);
        if (this.x+10>width) return 2;
        if (this.x-10 < 0) return 1;
        if (this.y-10 < 0) this.dy=abs(this.dy);

        if (this.x+10>b.x-5 && this.y < b.y+50 && this.y > b.y-50){
            var vc= calc(this.y-b.y);
            if (this.mag==5) this.mag=7;
            this.mag*=1.05;
            vc.setMag(this.mag);
            vc.x=-abs(vc.x);
            this.dx=vc.x;
            this.dy=vc.y;
            this.next();
            return 3;
            
        };
        if (this.x-10<a.x+5 && this.y < a.y+50 && this.y > a.y-50){
            var vc= calc(this.y-a.y);
            if (this.mag==5) this.mag=7;
            this.mag*=1.05;
            vc.setMag(this.mag);
            this.dx=vc.x;
            this.dy =vc.y;
            this.next();
            return 3;
        } ;
        return 0;
    }
}