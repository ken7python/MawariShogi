function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

var a;
var b;
var sa;

function huru_time(){
    a = new Date();
}
function huru_(){
    var huru_a = new Audio("huru.m4a");
    huru_a.play();
b = new Date();

sa = b - a;

//alert(sa);

var m;
m = 0;
var ms = [];

function t3(s){
    var kooun = 200;
    if (s<=2 + kooun){
        ms.push("逆さ向き");
        m+=20;
    }
    else{
        if (s<=86 + kooun){
            ms.push("縦向き");
            m+=10;
        }
        else{
            if (s<=186 + kooun){
                ms.push("横向き");
                m+=5;
            }
            else{
                if (s<=2697){
                    ms.push("表向き");
                    m++;
                }
                else{
                    if (s<=3000){
                        ms.push("裏向き");
                    }
                    else{
                        ms.push("駒が落ちた");
                    }
                }

            }
        }
    }
}

function t2(s){
    var kooun = 50; 
    if (s<=2 + kooun){
        ms.push("逆さ向き");
        m+=20;
    }
    else{
        if (s<=86 + kooun){
            ms.push("縦向き");
            m+=10;
        }
        else{
            if (s<=186 + kooun){
                ms.push("横向き");
                m+=5;
            }
            else{
                if (s<=2697){
                    ms.push("表向き");
                    m++;
                }
                else{
                    if (s<=3500){
                        ms.push("裏向き");
                    }
                    else{
                        ms.push("駒が落ちた");
                    }
                }

            }
        }
    }
}


function t1(s){
    if (s<=2){
        ms.push("逆さ向き");
        m+=20;
    }
    else{
        if (s<=86){
            ms.push("縦向き");
            m+=10;
        }
        else{
            if (s<=186){
                ms.push("横向き");
                m+=5;
            }
            else{
                if (s<=2697){
                    ms.push("表向き");
                    m++;
                }
                else{
                    ms.push("裏向き");
                }

            }
        }
    }
}

for (var i=1;i<=4;i++){
    var s = getRandomInt(1,4000);
    
    if(sa < 650){
        t1(s);
    }
    else{
        if( (sa > 650) && (sa < 1300) ){
            t2(s);
        }
        else{
            t3(s);
        }
    }
}

ms.push(m);

reigai = [];

for (var i=0;i<4;i++){
    var name = ms[i];
    if (name == "駒が落ちた"){
        document.getElementById("masu2").innerHTML += "<img class='hurigoma_otita' src='koma/" + "裏向き" + ".jpg'>"
    }
    else{
       kazu();
       var obj = document.getElementById( kazu_.toString() );
       console.log(obj);
       var rect = obj.getBoundingClientRect();
        //console.log(rect);
        document.getElementById("masu2").innerHTML += "<img class='hurigoma' src='koma/"+ name +".jpg' style='position: fixed;top: " + rect.y + "px;left: "+ (rect.x) +"px'>"
    }
}
//document.getElementById("masu2").innerHTML += m
return ms;
}
var kazu_;
var reigai = [];

function kazu(){
    console.log(c + 99);
    kazu_ = getRandomInt(100,c + 100);
       if (reigai.includes(kazu_) ){
            kazu();
       }
       else{
            reigai.push(kazu_);
            console.log(kazu_);
       }
}