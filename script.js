var rs = new Audio("run.mp3");
rs.loop = true;
var js = new Audio("jump.mp3");
var ds = new Audio("dead.mp3");
function key(event) {
    // alert(event.which);
    if (event.which == 13) {
        if (rw == 0) {

            rw = setInterval(run, 100);
            rs.play();
            bw = setInterval(back, 100);
            mw = setInterval(move, 100);
            fid = f();
            sw = setInterval(score, 500);



        }

    }
    if (event.which == 32) {
        if (jw == 0) {

            clearInterval(rw);
            rs.pause();
            jw = setInterval(jump, 300);
            js.play();




        }

    }

}
var a = 1;
var rw = 0;
var boy = document.getElementById("boy");
function run() {

    a = a + 1;
    if (a == 20) {
        a = 1;
    }
    boy.src = "Run (" + a + ").png";
}
var bw = 0;
var b = 0;
function back() {
    var ba = document.getElementById("div1");
    b = b - 20;
    ba.style.backgroundPositionX = b + "px";


}
var fid = 0;
function f() {
    var x = 800;
    for (var y = 0; y < 10; y++) {
        var i = document.createElement("img");

        i.src = "oba.png";
        i.className = "f";

        i.style.marginLeft = x + "px";
        // i.style.m = p + "px";
        x = x + 1000;

        if (y <= 2) {
            x = x + 400;


        }


        i.id = "f" + y;

        document.getElementById("div1").appendChild(i);
    }
}
var mw = 0;
function move() {
    for (var y = 0; y < 10; y++) {
        var z = getComputedStyle(document.getElementById("f" + y));
        var w = parseInt(z.marginLeft);
        w = w - 20;


        if (w <= 220 && w >= 20) {

            if (mt > 160) {
                dw = setInterval(dead, 100);
                ds.play();
                clearInterval(rw);
                rs.pause();
                clearInterval(jw);
                js.pause();
                jw = -1;
                clearInterval(mw);
                clearInterval(bw);
                clearInterval(sw);


            }

        }


        document.getElementById("f" + y).style.marginLeft = w + "px";
    }
}
var j = 1;
var jw = 0;
var mt = 230;



function jump() {
    if (j <= 5) {
        mt = mt - 40;

    }
    if (j >= 6) {
        mt = mt + 40;

    }

    boy.style.marginTop = mt + "px";

    j = j + 1;
    if (j == 11) {
        j = 1;
        clearInterval(jw);
        jw = 0;
        rw = 0;

        rw = setInterval(run, 100);
        rs.play();

        if (bw == 0) {
            bw = setInterval(back, 100);
        }
        if (fid == 0) {
            fid = f();
        }
        if (mw == 0) {
            mw = setInterval(move, 100);
        }
        if (sw == 0) {
            sw = setInterval(score, 100);
        }
    }

    boy.src = "Jump (" + j + ").png";
}
var u = 0;
var sw = 0;
function score() {

    // u = u + 50;
    u = u + 25;
    document.getElementById("score").innerHTML = u;

    if (u === 800) {

        document.getElementById("win").style.visibility = "visible";
        document.getElementById("win1").innerHTML = u;
        rs.pause();
        clearInterval(jw);
        js.pause();
        jw = -1;
        clearInterval(mw);
        clearInterval(bw);
        clearInterval(sw);
        clearInterval(f);






    }

}

var d = 1;
var dw = 0;

function dead() {

    d = d + 1;
    if (d == 30) {
        d = 30;
        boy.style.marginTop = "250px";
        document.getElementById("end").style.visibility = "visible";
        document.getElementById("endscore").innerHTML = u;

    }
    boy.src = "Dead (" + d + ").png";

}


function restart() {

    window.location.reload();


}
function reward() {
    alert("ok");
}
