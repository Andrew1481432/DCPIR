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
        "                    <input type=\"submit\" class=\"btn\" value=\"Зарегистрироваться\">\n" +
        "                    <div class=\"lables_passreg_text\">\n" +
        "                        <span><a href=\"#\">забыли пароль?</a></span> | <span><a onclick=\"changeFormToAuth()\">авторизация</a></span>\n" +
        "                    </div>";
}
function loadPage(name) {
    new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        var loc = window.location.pathname;
        var dir = loc.substring(0, loc.lastIndexOf('/'));
        dir += '/app/page/' + name + ".html?" + Math.random();
        xhr.open("GET", dir);
        xhr.send();
        xhr.onerror = function (args) {
            reject(args);
        };
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                resolve(xhr.responseText);
            }
        };
    }).then(function (r) {
        var main = document.getElementById("main");
        main.innerHTML = String(r);
    }).catch(function (e) {
        console.error("Undefined page " + name + '.html');
        throw new Error("Произошла ошибка");
    });
}
function loadScript(name) {
    new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        var loc = window.location.pathname;
        var dir = loc.substring(0, loc.lastIndexOf('/'));
        dir += '/app/page/' + name + ".js?" + Math.random();
        xhr.open("GET", dir);
        xhr.send();
        xhr.onerror = function (args) {
            reject(args);
        };
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                resolve(xhr.responseText);
            }
        };
    }).then(function (r) {
        eval(String(r));
    }).catch(function (e) {
        console.error("Undefined script js " + name + '.js');
        throw new Error("Произошла ошибка");
    });
}
function changeFormToAuth() {
    var formAuth = document.getElementById("form_auth");
    formAuth.innerHTML = "<input class=\"input_field\" type=\"text\" name=\"login_field\" placeholder=\"логин\" />\n" +
        "                    <input class=\"input_field\" type=\"password\" name=\"password_field\" placeholder=\"пароль\" />\n" +
        "                    <button>вход</button>\n" +
        "                    <div class=\"lables_passreg_text\">\n" +
        "                        <span><a href=\"#\">забыли пароль?</a></span> | <span><a onclick=\"changeFormToRegister()\">регистрация</a></span>\n" +
        "                    </div>";
}
