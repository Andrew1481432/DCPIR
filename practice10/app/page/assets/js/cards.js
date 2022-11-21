setTimeout(function () {
    refreshCanvas();

    let cards = document.querySelectorAll('.cards div p');
    for (let i = 0; i < cards.length; i++) {
        cards[i].innerHTML = truncate(cards[i].innerHTML, 16);
    }
}, 1000);
