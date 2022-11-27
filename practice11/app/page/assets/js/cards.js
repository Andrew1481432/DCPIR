setTimeout(function () {
    refreshCanvas();

    let taskTwo = document.getElementById("arrayTwo");
    let origArr = document.getElementById("originalArray");
    let filteredArr = document.getElementById("filteredArray");
    let minVal = document.getElementById("min").value;
    let maxVal = document.getElementById("max").value;

    let arrA = [];

    function filterArray(arrA, minVal, maxVal) {
        let arrB = arrA.filter(elem => (elem >= minVal && elem <= maxVal));
        return arrB;
    }

    document.getElementById("filter").onclick = function () {
        minVal = document.getElementById("min").value;
        maxVal = document.getElementById("max").value;
        for (let i = 0; i < 20; i++) {
            arrA[i] = Math.floor(Math.random() * 50);
        }
        filteredArr.innerHTML = "Filtered\n" + filterArray(arrA, minVal, maxVal);
        origArr.innerHTML = "Original\n" + arrA;
    }

    let taskThree = document.getElementById("arrayThree");
    let sortElements = document.querySelectorAll("#arrayThree span");
    sortAsc.onclick = () => sortAscDesc(0);
    sortDesc.onclick = () => sortAscDesc(1);

    function sortAscDesc(mode) {
        for (let i = 0; i < sortElements.length; i++) {
            for (let j = i; j < sortElements.length; j++) {
                if (mode === 0) {
                    if (sortElements[j].innerHTML < sortElements[i].innerHTML) {
                        taskThree.insertBefore(sortElements[j], sortElements[i]);
                        sortElements = document.querySelectorAll("#arrayThree span");
                    }
                } else if (sortElements[j].innerHTML > sortElements[i].innerHTML) {
                    taskThree.insertBefore(sortElements[j], sortElements[i]);
                    sortElements = document.querySelectorAll("#arrayThree span");
                }
            }
        }
    }
}, 1000);
