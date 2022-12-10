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
    list.onclick = (event) => {
        selectElements(event);
        console.log("ыыыы");
    };
    listBlock.append(list);

    for(let item of arrElements) {
        let listItem = document.createElement('li');
        listItem.textContent=item;
        list.append(listItem);
    }
    // endregion

    /* region task 3 (off) */
/*    const notifList=['Мур-мур','Покормите ^-^','Гав-гав','Закрыть сессию без долгов!'];
    setInterval(() => {
        showNotification(notifList[Math.floor(Math.random() * notifList.length)])
    }, 2500);*/
    /* endregion */

    // region task 4
    drawCoords();
    // endregion
    // endregion

    loadSlider();
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


function loadSlider() {
    //task 4
    let thumb = slider.querySelector('.thumb');
    thumb.onmousedown = function (event) {
        event.preventDefault(); // предотвратить запуск выделения (действие браузера)

        let shiftX = event.clientX - thumb.getBoundingClientRect().left;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        function onMouseMove(event) {
            let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

            // курсор вышел из слайдера => оставить бегунок в его границах.
            if (newLeft < 0) {
                newLeft = 0;
            }
            let rightEdge = slider.offsetWidth - thumb.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }

            thumb.style.left = newLeft + 'px';
        }

        function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        }
    };

    thumb.ondragstart = function () {
        return false;
    };
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
