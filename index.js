var koma = ["歩","香","桂","銀","金","角","飛","王"]
var turn = 1;
var people = 2;
var peoples = [1,2];
var peoples_name = ["A","B"]

var c;

var masu = ["00","01","02","03","04","05","06","07","08","18","28","38","48","58","68","78","88","87","86","85","84","83","82","81","80","70","60","50","40","30","20","10","00"]


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function masu2(){
    c = 0;
    document.getElementById("masu2").innerHTML = " "
    for (i = 0;i<9;i++){
        for(j=0;j<9;j++){
            if ( ( (j > 4) || (i > 4) ) || ( (j % 2) == 1) || ( (i % 2) == 1) ){
                document.getElementById("masu2").innerHTML += "<img src='masu.png'>"
            }else{
                document.getElementById("masu2").innerHTML += "<img id='" + (100 + c) + "' src='masu.png'>"   
                c++;
            }
        }
        document.getElementById("masu2").innerHTML += "<br>"
    }
}

function start_(){

    document.getElementById("masu").innerHTML = " "

    for (i = 0;i<9;i++){
        for(j=0;j<9;j++){
            document.getElementById("masu").innerHTML += "<img id='"+ String(i) + String(j) +"' src='masu.png'>"
        }
        document.getElementById("masu").innerHTML += "<br>"
    }
    turn_1_ok = true;
    turn = 1;
    imag();

    masu2();

    turn_1_ok = true;

    setTimeout(function(){
      red(play1);
      blue(play1_2);
    },1);
}

function botu(t){
    peoples.splice(t-1,t-1);
    if (t === 1){
        peoples.shift();
    }
}
function turn_add(){
    juni = [];

    huru_time();

    turn++;
    masu2();
    if (peoples.length == 1){
        alert("勝者：" + peoples_name[peoples[0] - 1]);
        agari();
    }
    else{
        if (turn > people){
            turn = 1;
            turn_1_ok = true;

            robo_sizumu();
        }
        if (turn === 2){
            my_sizumu();

            setTimeout(huru_2,getRandomArbitrary(100,1800));
        }
        imag();
    }

}
function imag(){
    if (turn === 1){
        //document.getElementById("turn").innerHTML = "<img class='player' id='player1' src='player.jpg'>"
        $('#player2').hide();
        $('#play2_koma').hide();
        
        
        $('#player1').animate({
            "width": 250,
            "height": 250 
         });
        
         
         
          
    }
    if (turn === 2){
        //document.getElementById("turn").innerHTML = "<img class='player' id='player2' src='robot.jpg'>"
    
        $('#player1').hide();
        $('#play1_koma').hide();
        
        
        $('#player2').animate({
            "width": 280,
            "height": 280 
         });
        
        
          
    
    }
}
    function my_sizumu(){
        $('#player1').animate({
            "width": 200,
            "height": 200 
         });

         $('#player2').show();
         $('#play2_koma').show();
     }

     function robo_sizumu(){
        $('#player2').animate({
            "width": 140,
            "height": 140 
         });

         $('#player1').show();
         $('#play1_koma').show();
     }

function agari(){
    if (play3 + 1 > koma.length){
        peoples = [1];

        document.getElementById("output").innerHTML = "あがり";
        play3 = koma.length - 1;
        show_()
    }
    if (play3_2 + 1 > koma.length){
        peoples = [2];

        document.getElementById("output2").innerHTML = "あがり";
        play3_2 = koma.length - 1;
        show_2();
    }
}

function ranku_down_1(){
    if (play3 > 0){
        play3--;
        show_();
    }
}
function ranku_down_2(){
    if (play3_2 > 0){
        play3_2--;
        show_2();
    }
}

window.onload = setTimeout(start_,1)