function set_like() {
    var like_button = document.getElementById("bl2");
    var splitSrc = like_button.src.split('/');
    if (splitSrc[splitSrc.length - 1] === "reactions-off.png") {
        like_button.src = 'assets/img/like/reactions-on.png';
    }
    else {
        like_button.src = 'assets/img/like/reactions-off.png';
    }
    //TODO get counter from server
}
