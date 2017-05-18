/**
 * Created by mephisto on 5/18/17.
 */


$(document).ready(function(){
    console.log('hello')

    var cards = ['<img src="default/monsters-01.png">',
        '<img src="default/monsters-02.png">',
        '<img src="default/monsters-03.png">',
        '<img src="default/monsters-04.png">'];

    var gridSize = 8;
    var memoryGameHTML = '';
    for(let i = 0; i < gridSize; i++){
        if(i < 2){
            card = cards[0];
        }else if(i < 4){
            card = cards[1];
        }else if(i < 6){
            card = cards[2];
        }else{
            card = cards[3];
        }


        memoryGameHTML += '<div class="card col-sm-3">';
            memoryGameHTML += '<div class="card-holder">';
                memoryGameHTML += `<div class="card-front">${card}</div>`;
                //memoryGameHTML += '<div class="card-front">'+card+'</div>';
                memoryGameHTML += '<div class="card-back"></div>';
            memoryGameHTML += '</div>';
        memoryGameHTML += '</div>';
    }
    //console.log(memoryGameHTML);
    $('.mg-contents').html(memoryGameHTML);



    $('.card-holder').click(function () {
        $(this).toggleClass('flip');

        var cardsUp = $('.flip'); //all elements with class flip
        if(cardsUp.length === 2){
            var card1 = cardsUp[0].children[0].children[0].src;
            var card2 = cardsUp[1].children[0].children[0].src;

            //cardsUpImages = cardsUp.find('.card-front img');
            if(card1 === card2){

            }else{
                setTimeout(function () {
                    cardsUp.removeClass('flip');
                }, 2000);

            }
        }

    })

});