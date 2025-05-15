var play1 = 0;//進んだ場所1
var play2 = play1;//進んだ場所2
var play3 = 0;//駒の地位
var play4 = 0;

var play5 = 0;//おんぶする

var play6_2;//相手が追い越されたか
function show_(){//プレーヤー2におんぶされていない時
    if(play5 != 2){
        document.getElementById("output").innerHTML = play1
        red(play1);//赤が前
        blue_(play1_2);//青が後ろ
    }
    
    else{
        show__();
    }
    
}

function show__(){
    document.getElementById("output").innerHTML = play1
    red_(play1);//赤が後ろ
    blue(play1_2);//青が前
}

function sinka(){
    //alert("進化");
    play3++;

    let count = 0;
    
    const intervalId = setInterval(() =>{
        count++;
        $(function(){
            $('#play1 img').fadeOut(150,function(){$(this).fadeIn(150)});
        });
        if(count > 3){　
            clearInterval(intervalId);　//intervalIdをclearIntervalで指定している
        
            if (play5 != 2){//プレーヤー1におんぶされていないとき
                setTimeout(turn_add,1000);
            }
        }}, 200);
        

    show_();
    agari();
}

function red(play){
    //document.getElementById(play - 1).innerHTML = "<img src='masu.png'>"
    var play_masu = masu[play];
    var rect = document.getElementById( play_masu.toString() ).getBoundingClientRect(); 
    
    //console.log(rect);
    
    //console.log(document.getElementById("play1"));

    p1 = "<img src='koma/"+ koma[play3] +".png' style='z-index: 10000;position: fixed;top: " + rect.y + "px;left: " + rect.x + "px;transform:rotate("+ ( (Math.floor(play1/8)*90)+90) +"deg)'>";
    //console.log(p1);

    document.getElementById("play1").innerHTML = p1;

    document.getElementById("play1_koma").src = "koma/"+ koma[play3] +".png"
    //document.getElementById("masu").innerHTML += "<img src='masu_red.png'>";
}

function red_(play){
    //document.getElementById(play - 1).innerHTML = "<img src='masu.png'>"
    var play_masu = masu[play];
    var rect = document.getElementById( play_masu.toString() ).getBoundingClientRect(); 
    
    //console.log(rect);
    
    //console.log(document.getElementById("play1"));

    document.getElementById("play1").innerHTML = "<img src='koma/"+ koma[play3] +".png' style='z-index: 2;position: fixed;top: " + rect.y + "px;left: " + rect.x + "px;transform:rotate("+ ( (Math.floor(play1/8)*90)+90) +"deg);z-index: 2'>";
    
    document.getElementById("play1_koma").src = "koma/" + koma[play3] +".png"
    //document.getElementById("masu").innerHTML += "<img src='masu_red.png'>";
}

function susumu(){
    if (play1 < play1_2){//相手より前にいる
        play4 = true;
    }
    document.getElementById("output").innerHTML = play1;

    //console.log(play1,play2)
    if (32 <= play1){
        play1 = 0;
        play2 -= 32
        show_();
    }
    
    if (play1 < play2){
        console.log(play2 - play1);
        var susumu_a = new Audio("susumu.m4a");
        susumu_a.play();

        document.getElementById("output").innerHTML = play1 + 1;

        if (play5 === 2){
            susumu_2();
            show_2();
        }

        play1++;
        if (play5 != 1){
            show_();
        }
        if (play1>play1_2 && play4){//追い越した時の処理
            /*
            alert("自分が追い越した");
            alert("自分：" + koma[play3])
            alert("相手：" + koma[play3_2])
            */
            if(play3>play3_2){
                //alert("相手ランクダウン");
                
                play6_2 = true;

            }
        }
        if (play5_2 != 1){//プレーヤー2におんぶされていない時
            show_();
            setTimeout(susumu,400);
        }
    }
    else{
        if (play6_2){
            ranku_down_2();
        }
        if (play1===play1_2){//並んだ時の処理
            if (play5 != 2){//プレーヤー2をおんぶしていないとき
                    //alert("おんぶ");
                    play5_2 = 1;
                    turn_add();
                }
        }
        if (play5 = 2){
            play5 = 0;
        }
        //進化
        if(play2 == 0){
            sinka();
        }
        else if(play2 == 8){
            sinka();
        }
        else if(play2 == 16){  
            sinka();
        }
        else if(play2 == 24){
           sinka();
        }
        else if (play5_2 != 1){//プレーヤー2におんぶされていないとき
            turn_add()
        }
    }

    document.getElementById("output").innerHTML += "<br>"
    document.getElementById("output").innerHTML += koma[play3];

    show_();
  }

  function huru(){
      play6_2 = false;
      turn_1_ok = false;
      play2 = play1;
      document.getElementById("output").innerHTML = " "
            var h = huru_();
            for( j=0;j<5;j++){
                    document.getElementById("output").innerHTML += h[j] + "<br>";
            }
            document.getElementById("output").innerHTML += koma[play3];

            var m = h[4];

            if (play5 === 2){//自分が相手をおんぶしているとき
                    play2_2 = play1_2 + m;
            }

            play2 += m;
            play4 = false;
            setTimeout(susumu,1000);
  }