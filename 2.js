var play1_2 = 16; //進んだ場所1
var play2_2 = play1_2; //進んだ場所2
var play3_2 = 0; //駒の地位
var play4_2 = 0;

var play5_2 = 0;//おんぶする
var play6;//自分が追い越されたか

function blue_(play){
    //document.getElementById(play - 1).innerHTML = "<img src='masu.png'>"
    var play_masu = masu[play];
    var rect = document.getElementById( play_masu.toString() ).getBoundingClientRect(); 
    
    //console.log(rect);
    
    //console.log(document.getElementById("play2"));

    document.getElementById("play2").innerHTML = "<img src='koma/"+ koma[play3_2] +".png' style='z-index: 2;position: fixed;top: " + rect.y + "px;left: " + rect.x + "px;transform:rotate("+ ( (Math.floor(play1_2/8)*90)+90) +"deg)'>";
    //document.getElementById("masu").innerHTML += "<img src='masu_red.png'>";
    document.getElementById("play2_koma").src = "koma/" +koma[play3_2] +".png"
}

function blue(play){
    //document.getElementById(play - 1).innerHTML = "<img src='masu.png'>"
    var play_masu = masu[play];
    var rect = document.getElementById( play_masu.toString() ).getBoundingClientRect(); 
    
    //console.log(rect);
    
    //console.log(document.getElementById("play2"));

    document.getElementById("play2").innerHTML = "<img src='koma/"+ koma[play3_2] +".png' style='z-index: 10000;position: fixed;top: " + rect.y + "px;left: " + rect.x + "px;transform:rotate("+ ( (Math.floor(play1_2/8)*90)+90) +"deg)'>";

    document.getElementById("play2_koma").src = "koma/" + koma[play3_2] +".png"
    //document.getElementById("masu").innerHTML += "<img src='masu_red.png'>";
}


function show_2(){
    if(play5_2 != 1){
        document.getElementById("output2").innerHTML = play1_2
        blue(play1_2);
        red_(play1);
    }
    
    else{
        show__2();
    }
    
}

function show__2(){
    document.getElementById("output2").innerHTML = play1_2
    blue_(play1_2);
    red(play1);
}

function sinka_2(){
    //alert("進化");
    play3_2++;
        let count2 = 0;
        const intervalId2 = setInterval(() =>{
            count2++;
            $(function(){
                $('#play2 img').fadeOut(150,function(){$(this).fadeIn(150)});
            });

            if(count2 > 3){　
                clearInterval(intervalId2);　//intervalIdをclearIntervalで指定している

                if (play5 != 2){//プレーヤー1におんぶされていないとき
                    setTimeout(turn_add,1000);
                }
            }}, 200);

    show_2();
    agari();
}

function susumu_2(){
    document.getElementById("output2").innerHTML = play1_2;
    //console.log(play1_2,play2_2);

    if (play1 > play1_2){//相手より前にいる
        play4_2 = true;
    }
    if (32 <= play1_2){
        play1_2 = 0;
        play2_2 -= 32
    }
    
    if (play1_2 < play2_2){
        console.log(play2_2 - play1_2);
        var susumu_a = new Audio("susumu.m4a");
        susumu_a.play();
        
        if (play5_2 === 1){//プレーヤー1をおんぶしている時
            susumu();
        }

        play1_2++;
        if(play4_2){
            if (play1<play1_2){//追い越した時の処理
                /*
                alert("相手が追い越した");
                alert("自分：" + koma[play3])
                alert("相手：" + koma[play3_2])
                */
                if(play3_2>play3){
                    play6 = true;
                }
            }
        }

        if (play5 != 2){//プレーヤー1におんぶされていないとき
            show_2();
            setTimeout(susumu_2,400);
        }
    }
    else{
        //alert(play4_2);
            if (play6){
                ranku_down_1();
            }
            if ( play1===play1_2 ){//並んだ時の処理
                if(play5_2 != 1){//プレーヤー1をおんぶしていない時
                    //alert("おんぶ");
                    play5 = 2;
                    turn_add();
                }
            }
            if (play5_2 = 1){
                play5_2 = 0;
            }
            
            //進化
            if(play2_2 == 0){
                sinka_2();
            }
            else if(play2_2 == 8){
                sinka_2();
            }
            else if(play2_2 == 16){  
                sinka_2();
            }
            else if(play2_2 == 24){
               sinka_2();
            }
            else {
                if (play5 != 2){//プレーヤー1におんぶされていないとき
                    turn_add();
                }
            }
    }

    document.getElementById("output2").innerHTML += "<br>"
    document.getElementById("output2").innerHTML += koma[play3_2];
    
    show_2();
  }

  function huru_2(){
      setTimeout(function(){
                play6 = false
                play2_2 = play1_2;
                document.getElementById("output2").innerHTML = " "
                var h = huru_();
                for( j=0;j<5;j++){
                    document.getElementById("output2").innerHTML += h[j] + "<br>";
                }
                document.getElementById("output2").innerHTML += koma[play3_2];
        
                var m = h[4];
        
                play2_2 += m;
        
                if (play5_2 === 1){//プレーヤー1をおんぶしている時
                play2 = play1 + m;
                }
        
                play4_2 = false;
                setTimeout(susumu_2,1000);
      },600);
  }