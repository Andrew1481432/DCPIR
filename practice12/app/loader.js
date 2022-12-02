function changeFormToRegister() {
    var formAuth = document.getElementById("form_auth");
    formAuth.innerHTML = "                    <input class=\"input_field\" pattern=\"[А-Яа-яЁё]+ [А-Яа-яЁё]+ [А-Яа-яЁё]+\" type=\"text\" name=\"fio_field\" placeholder=\"ФИО(Иванов Иван Иванович)\" />\n" +
        "                    <input class=\"input_field\" type=\"text\" name=\"login_field\" placeholder=\"Логин\" />\n" +
        "                    <input class=\"input_field\" type=\"tel\" name=\"phone_num_field\" placeholder=\"Номер телефона\" />\n" +
        "                    <input class=\"input_field\" type=\"email\" name=\"email_field\" placeholder=\"EMail\" />\n" +
        "                    <input class=\"input_field\" type=\"password\" name=\"password_field\" placeholder=\"пароль\" />\n" +
        "                    <fieldset>\n" +
        "                        <legend>Выберите пол</legend>\n" +
        "                        <div>\n" +
        "                            <input type=\"radio\" id=\"man\" name=\"gender\" value=\"man\" />\n" +
        "                            <label for=\"man\">Мужчина</label>\n" +
        "                        </div>\n" +
        "                        <div>\n" +
        "                            <input type=\"radio\" id=\"women\" name=\"gender\" value=\"women\" />\n" +
        "                            <label for=\"women\">Женщина</label>\n" +
        "                        </div>\n" +
        "                    </fieldset>\n" +
        "                    <fieldset>\n" +
        "                        <div>\n" +
        "                            <input type=\"checkbox\" id=\"privacy\" name=\"accept_privacy\" value=\"true\" required />\n" +
        "                            <label for=\"privacy\">Соглашаюсь с правилами использования</label>\n" +
        "                        </div>\n" +
        "                        <div>\n" +
        "                            <input type=\"checkbox\" id=\"advertising\" name=\"accept_push_ads\" value=\"true\" checked />\n" +
        "                            <label for=\"women\">Хочу принимать рекламную рассылку</label>\n" +
        "                        </div>\n" +
        "                    </fieldset>\n" +
        "                    <label for=\"city-select\">Ваш город</label>\n" +
        "                    <select name=\"city\" id=\"city-select\" size=\"2\" multiple=\"multiple\" required>\n" +
        "                        <option value=\"\">-- Выберите город --</option>\n" +
        "                        <option value=\"Moscow\">Москва</option>\n" +
        "                        <option value=\"spb\">Санкт-Петербург</option>\n" +
        "                        <option value=\"samara\">Самара</option>\n" +
        "                        <option value=\"magadan\">Магадан</option>\n" +
        "                        <option value=\"perm\">Пермь</option>\n" +
        "                        <option value=\"kazan\">Казань</option>\n" +
        "                    </select>\n" +
        "                    <br>\n" +
        "                    <label for=\"happybirthday\">Введите дату рождения:</label>\n" +
        "                    <input id=\"happybirthday\" type=\"datetime-local\" name=\"happybirthday\" min=\"1930-06-01T08:30\" max=\"2020-06-01T08:30\" value=\"2001-06-01\">\n" +
        "\n" +
        "                    <label for=\"file_passport\">Прикрепите файл паспорта:</label>\n" +
        "                    <input id=\"file_passport\" type=\"file\" name=\"file_passport\" required>\n" +
        "                    <input type=\"submit\" class='button3' value=\"Зарегистрироваться\">\n" +
        "                    <div class=\"lables_passreg_text\">\n" +
        "                        <span><a href=\"#\">забыли пароль?</a></span> | <span><a onclick=\"changeFormToAuth()\">авторизация</a></span>\n" +
        "                    </div>";
}

function loadPage(name) {
    var xhr = new XMLHttpRequest();
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    dir += '/app/page/' + name + ".html?" + Math.random();
    xhr.open("GET", dir);
    xhr.send();
    xhr.onerror = function (args) {
        console.error("Undefined page " + name + '.html');
        throw new Error("Произошла ошибка");
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            var main = document.getElementById("main");
            main.innerHTML = String(xhr.responseText);
        }
    };
}
function addScript(name) {
    var xhr = new XMLHttpRequest();
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    dir += '/app/page/assets/js/' + name + ".js?" + Math.random();
    xhr.open("GET", dir);
    xhr.send();
    xhr.onerror = function (args) {
        console.error("Undefined script js " + name + '.js');
        throw new Error("Произошла ошибка");
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            var script = document.getElementsByName("script")[0]; // create a script DOM node
            script.innerText = (String(xhr.responseText));
        }
    };
}

function executeScript(name) {
    var xhr = new XMLHttpRequest();
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    dir += '/app/page/assets/js/' + name + ".js?" + Math.random();
    xhr.open("GET", dir);
    xhr.send();
    xhr.onerror = function (args) {
        console.error("Undefined script js " + name + '.js');
        throw new Error("Произошла ошибка");
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            eval(String(xhr.responseText));
        }
    };
}

function loadCSS(name) {
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    dir += '/app/page/assets/css/' + name + ".css?" + Math.random();
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = dir;
    document.head.appendChild(link);
}

function changeFormToAuth() {
    var formAuth = document.getElementById("form_auth");
    formAuth.innerHTML = "<input class=\"input_field\" type=\"text\" name=\"login_field\" placeholder=\"логин\" />\n" +
        "                    <input class=\"input_field\" type=\"password\" name=\"password_field\" placeholder=\"пароль\" />\n" +
        "                    <button class='ripple'>вход</button>\n" +
        "                    <div class=\"lables_passreg_text\">\n" +
        "                        <span><a href=\"#\">забыли пароль?</a></span> | <span><a onclick=\"changeFormToRegister()\">регистрация</a></span>\n" +
        "                    </div>";
}

/* region prac10 */

/* region task1 captcha */
const randomSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let checkSum = false, a = 0, b = 0;

let captcha = {
    code: "",
    refresh() {
        this.code = "";
        for (let i = 0; i < 5; i++) {
            this.code += randomSymbols[Math.floor(Math.random() * randomSymbols.length)];
        }
        return this.code;
    }
}

function refreshCanvas() {
    let canvas = document.getElementById('captchaCanvas').getContext('2d');
    let captchaInput = document.getElementById("enterCaptcha");
    captchaInput.value = "";

    captcha.refresh();
    canvas.canvas.width = 150;
    canvas.font = "italic 20pt Arial";
    canvas.fillStyle = "white";

    canvas.fillRect(0, Math.random() * 20 + 10, canvas.measureText(captcha.code).width + 5, 2);
    canvas.fillText(captcha.code, 0, 30);
}

function refreshCanvasSumm() {
    let canvas = document.getElementById('captchaCanvas').getContext('2d');
    let captchaInput = document.getElementById("enterCaptcha");

    captchaInput.value = "";
    canvas.canvas.width = 150;
    canvas.font = "italic 20pt Arial";
    canvas.fillStyle = "white";
    a = Math.floor(Math.random() * 100);
    b = Math.floor(Math.random() * 100);
    canvas.fillRect(0, Math.random() * 20 + 10, canvas.measureText(captcha.code).width + 5, 2);
    canvas.fillText(a + " + " + b, 0, 30);
}

function onSubmitCaptcha() {
    let captchaInput = document.getElementById("enterCaptcha");
    if (captchaInput.value === "") {
        alert("Input is empty");
        return false;
    }

    if (checkSum) {
        checkSum = false;
        if (Number(captchaInput.value) === (a + b)) {
            alert("Captcha is right");
            refreshCanvas();
            return true;
        } else {
            alert("Wrong sum");
            refreshCanvas();
            return false;
        }
    }

    if (captchaInput.value === captcha.code) {
        alert("Captcha is right");
        refreshCanvas();
        return true;
    } else {
        refreshCanvasSumm();
        checkSum = true;
    }
}
/* endregion */

/* task 2 */
let accum = new Accumulator(0);

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = () => {
        this.value += Number(prompt("How much to buy: ", "0"));
    }
}

/*function addToCart() {
    let cartItems = document.querySelector('#shoppingCart span');

    accum.read();
    if (accum.value > 0) {
        cartItems.innerHTML = accum.value;
    }
}*/
/* endregion */

/* region task 3 */
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        console.log(str + " " + str.length + " " +maxlength);
        str = str.substring(0, maxlength-3);
        str += "...";
    }
    return str;
}
/* endregion */


/* region prac11 */

/* region task1 */
let elements = document.getElementsByClassName("box1");
function addToCart() {
    let box1Parent = event.srcElement.closest('.box1');
    let container1 = event.srcElement.closest('.container1');
    if (box1Parent !== elements[0]) {
        container1.insertBefore(box1Parent, box1Parent.previousSibling);
    }
}

function deleteElement() {
    let element = elements[0];
    if(typeof element !== "undefined") {
        elements[0].remove();
    }
}
/* endregion */

/* endregion */


