$(document).ready(() => {
    score=0;
    stop=true;
scorestop=true;
    $('body').keyup(function (e) {

        if (e.keyCode == 38) {
            $('.dino').addClass("dinoanim")
            setTimeout(() => {
                $('.dino').removeClass("dinoanim")
            }, 800)
        }
       else if (e.keyCode == 39) {
            var d = parseInt($('.dino').css('margin-left'));
            $('.dino').css('margin-left', d + 20);
        }
      else if (e.keyCode == 37) {
            var e = parseInt($('.dino').css('margin-left'));
            $('.dino').css('margin-left', e-20);
        }

    })
    setInterval(() => {
        const e1=document.getElementById("dino")
        const e2=document.getElementById("obstacle")
        console.log(elementsOverlap(e1,e2));
        if(elementsOverlap(e1,e2)){
            $('.gameOver').html('GameOver');
            $('#obstacle').removeClass('obstacleAni');
             $('.gameOver').text('Game Over:'+" " +score);
             $('.gameOver').css('visibility','visible');
             scorestop=false;
        }else if(stop){
            stop=false;
            $('#scoreCont').text("Your Score:" +score);
            
            setInterval(()=>{
               if(scorestop){ score++;} 
                stop=true;
            },1000);
        }
    }, 100);
    function elementsOverlap(el1, el2) {
        const dino1 = el1.getBoundingClientRect();
        const obstacle1 = el2.getBoundingClientRect();
        return !(dino1.right < obstacle1.left || dino1.left > obstacle1.right || dino1.bottom < obstacle1.top || dino1.top > obstacle1.bottom);
    }
})