
var score_one = 0;
var score_two = 0;
var player = "one";

function onewinner() {

    if( $(".game div div.top-left, .game div div.top-center, .game div div.top-right").children(".x").length === 3) {

        console.log("Player one won");
        score_one++;
        $(".disable").removeClass("disable");
        $(".again").prop("disabled", false);
        $(".container, .game div div").css("cursor","not-allowed");
        $(".container .playerone h4").css("display","block");
    } else if( $(".game div div.center-left, .game div div.center-center, .game div div.center-right").children(".x").length === 3) {

        console.log("Player one won");
        score_one++;
        $(".disable").removeClass("disable");
        $(".again").prop("disabled", false);
        $(".container, .game div div").css("cursor","not-allowed");
        $(".container .playerone h4").css("display","block");
    } else if( $(".game div div.bottom-left, .game div div.bottom-center, .game div div.bottom-right").children(".x").length === 3) {

        console.log("Player one won");
        score_one++;
        $(".disable").removeClass("disable");
        $(".again").prop("disabled", false);
        $(".container, .game div div").css("cursor","not-allowed");
        $(".container .playerone h4").css("display","block");
    } else if( $(".game div div.top-left, .game div div.center-left, .game div div.bottom-left").children(".x").length === 3) {

        console.log("Player one won");
        score_one++;
        $(".disable").removeClass("disable");
        $(".again").prop("disabled", false);
        $(".container, .game div div").css("cursor","not-allowed");
        $(".container .playerone h4").css("display","block");
    } else if( $(".game div div.top-center, .game div div.center-center, .game div div.bottom-center").children(".x").length === 3) {

        console.log("Player one won");
        score_one++;
        $(".disable").removeClass("disable");
        $(".again").prop("disabled", false);
        $(".container, .game div div").css("cursor","not-allowed");
        $(".container .playerone h4").css("display","block");
    } else if( $(".game div div.top-right, .game div div.center-right, .game div div.bottom-right").children(".x").length === 3) {

        console.log("Player one won");
        score_one++;
        $(".disable").removeClass("disable");
        $(".again").prop("disabled", false);
        $(".container, .game div div").css("cursor","not-allowed");
        $(".container .playerone h4").css("display","block");
    } else if( $(".game div div.top-left, .game div div.center-center, .game div div.bottom-right").children(".x").length === 3) {

        console.log("Player one won");
        score_one++;
        $(".disable").removeClass("disable");
        $(".again").prop("disabled", false);
        $(".container, .game div div").css("cursor","not-allowed");
        $(".container .playerone h4").css("display","block");
    } else if( $(".game div div.top-right, .game div div.center-center, .game div div.bottom-left").children(".x").length === 3) {

        console.log("Player one won");
        score_one++;
        $(".disable").removeClass("disable");
        $(".again").prop("disabled", false);
        $(".container, .game div div").css("cursor","not-allowed");
        $(".container .playerone h4").css("display","block");
    }

    $(".container .playerone .score-one").text(score_one);
}

function twowinner() {

    if( $(".game div div.top-left, .game div div.top-center, .game div div.top-right").children(".o").length === 3) {

        console.log("Player two won");
        score_two++;
        $(".disable").removeClass("disable");
        $(".again").prop("disabled", false);
        $(".container, .game div div").css("cursor","not-allowed");
        $(".container .playerone h4").css("display","block");
    } else if( $(".game div div.center-left, .game div div.center-center, .game div div.center-right").children(".o").length === 3) {

        console.log("Player two won");
        score_two++;
        $(".disable").removeClass("disable");
        $(".again").prop("disabled", false);
        $(".container, .game div div").css("cursor","not-allowed");
        $(".container .playerone h4").css("display","block");
    } else if( $(".game div div.bottom-left, .game div div.bottom-center, .game div div.bottom-right").children(".o").length === 3) {

        console.log("Player two won");
        score_two++;
        $(".disable").removeClass("disable");
        $(".again").prop("disabled", false);
        $(".container, .game div div").css("cursor","not-allowed");
        $(".container .playerone h4").css("display","block");
    } else if( $(".game div div.top-left, .game div div.center-left, .game div div.bottom-left").children(".o").length === 3) {

        console.log("Player two won");
        score_two++;
        $(".disable").removeClass("disable");
        $(".again").prop("disabled", false);
        $(".container, .game div div").css("cursor","not-allowed");
        $(".container .playerone h4").css("display","block");
    } else if( $(".game div div.top-center, .game div div.center-center, .game div div.bottom-center").children(".o").length === 3) {

        console.log("Player two won");
        score_two++;
        $(".disable").removeClass("disable");
        $(".again").prop("disabled", false);
        $(".container, .game div div").css("cursor","not-allowed");
        $(".container .playerone h4").css("display","block");
    } else if( $(".game div div.top-right, .game div div.center-right, .game div div.bottom-right").children(".o").length === 3) {

        console.log("Player two won");
        score_two++;
        $(".disable").removeClass("disable");
        $(".again").prop("disabled", false);
        $(".container, .game div div").css("cursor","not-allowed");
        $(".container .playerone h4").css("display","block");
    } else if( $(".game div div.top-left, .game div div.center-center, .game div div.bottom-right").children(".o").length === 3) {

        console.log("Player two won");
        score_two++;
        $(".disable").removeClass("disable");
        $(".again").prop("disabled", false);
        $(".container, .game div div").css("cursor","not-allowed");
        $(".container .playerone h4").css("display","block");
    } else if( $(".game div div.top-right, .game div div.center-center, .game div div.bottom-left").children(".o").length === 3) {

        console.log("Player two won");
        score_two++;
        $(".disable").removeClass("disable");
        $(".again").prop("disabled", false);
        $(".container, .game div div").css("cursor","not-allowed");
        $(".container .playerone h4").css("display","block");
    }

    $(".container .playertwo .score-two").text(score_two);
}

function restart() {

    score_one = 0;
    score_two = 0;

    $(".container .playerone .score-one").text("0");
    $(".container .playertwo .score-two").text("0");

    $(".container .game div div").children("img").remove();

    player = "one";

    $(".container .playerone h2, .container .playerone img").css({"opacity":"1","transform":"scale(1,1)"});
    $(".container .playertwo h2, .container .playertwo img").css({"opacity":".7","transform":"scale(.8,.8)"});

    $(".game div div").css("cursor","pointer");
    $(".container").css("cursor","unset");

    $(".again").prop("disabled", true);
    $(".container .playerone h4").css("display","none");
    $("body h1").css("display","none");
}

function playAgain() {

    $(".container .game div div").children("img").remove();

    player = "one";

    $(".container .playerone h2, .container .playerone img").css({"opacity":"1","transform":"scale(1,1)"});
    $(".container .playertwo h2, .container .playertwo img").css({"opacity":".7","transform":"scale(.8,.8)"});

    $(".game div div").css("cursor","pointer");
    $(".container").css("cursor","unset");

    $(".again").prop("disabled", true);
    $(".container .playerone h4").css("display","none");
    $("body h1").css("display","none");
}

$(function() {

    $(".container .playertwo h2, .container .playertwo img").css({"opacity":".7","transform":"scale(.8,.8)"});

    $(".game div div").click(function() {

        if(  $(".container").css("cursor") === "not-allowed") {

            alert("اللعبة أنتهت, أضغط اللعب مرة أخرى للأستمرار");
        } else {

            if( $(this).children('img').length === 0 ) {

                if(player === "one") {
    
                    $(this).append("<img class='x' src='bootstrap/images/x.png' width='"+$(this).css("width")+"' height='"+$(this).css("height")+"'>");
                    player = "two";
                    $(".container .playerone h2, .container .playerone img").css({"opacity":".7","transform":"scale(.8,.8)"});
                    $(".container .playertwo h2, .container .playertwo img").css({"opacity":"1","transform":"scale(1,1)"});
    
                    onewinner();
                    
                } else {
    
                    $(this).append("<img class='o' src='bootstrap/images/o.png' width='"+$(this).css("width")+"' height='"+$(this).css("height")+"'>");
                    player = "one";
                    $(".container .playertwo h2, .container .playertwo img").css({"opacity":".7","transform":"scale(.8,.8)"});
                    $(".container .playerone h2, .container .playerone img").css({"opacity":"1","transform":"scale(1,1)"});
    
                    twowinner();
                }
            }
        }

        if( $(".game div div").children("img").length === 9 && $(".container .playerone h4").css("display") === "none" && $(".container .playertwo h4").css("display") === "none") {

            $("body h1").fadeIn(500);

            $(".disable").removeClass("disable");
            $(".again").prop("disabled", false);
        }

    });

    $(".restart").click(function() {

        restart();
    });

    $(".again").click(function() {

        playAgain();
    });
});