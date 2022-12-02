let arrElements = [];
while(true){
    let item=prompt("Что вам нужно?","");

    if (!item) break;
    arrElements.push(item);
}
loadPage('cards');
loadCSS('cards');
setTimeout(function () {
    refreshCanvas();
    // region practice 12

    // region task 2
    const listBlock=document.querySelector('.create-list');
    const list = document.createElement('ul');
    list.classList.add('user-list');
    listBlock.append(list);

    for(let item of arrElements) {
        let listItem = document.createElement('li');
        listItem.textContent=item;
        list.append(listItem);
    }
    // endregion

    /* region task 3 */
    const notifList=['Мур-мур','Покормите ^-^','Гав-гав','Закрыть сессию без долгов!'];
    setInterval(() => {
        showNotification(notifList[Math.floor(Math.random() * notifList.length)])
    }, 2500);
    /* endregion */

    // region task 4
    drawCoords();
    // endregion

    // endregion
}, 1000);

function showNotification(text) {
    let container1 = document.getElementsByClassName("notif")[0];

    container1.innerHTML = `<div class="ramka-5">
            <div class="content2">
                <p>${text}</p>
            </div>
        </div>`

    setTimeout(()=>{
        container1.innerHTML = "";
    },1500);
}

function drawCoords() {
    const area = document.querySelector(".area");
    const chicken = area.querySelector('img');

    // централизация картинки
    chicken.style.top = Math.round(area.clientHeight/2 - chicken.offsetHeight/2) + "px";
    chicken.style.left = Math.round(area.clientWidth/2 - chicken.offsetWidth/2) + "px";

    const clickX=document.querySelector('.clickX').querySelector('span');
    const clickY=document.querySelector('.clickY').querySelector('span');

    area.onclick = function(click){
        clickX.textContent = click.clientX;
        clickY.textContent = click.clientY;
    }
}
