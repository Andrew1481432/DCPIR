function e(query){
    return document.querySelector(query);
}

function getMainTag(){
    return document.getElementById("main");
}

const DieReason = {
    OldBrowser: {
        title: "Обновите браузер!",
        message: "Ваш браузер не поддерживает необходимые функции для полноценной работы сервиса"
    }
};

function die(reason){
    const {title, message} = DieReason[reason] || reason || {title: "Undefined title", message: "undefined message"};
    document.write("<h1>" + title + "</h1>");
	document.write(message);
	document.title = title;
}

function doesFileExist(urlToFile)  {
    let xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();
    return xhr.status !== 404;
}

function html(name){
    if(Promise){
        return new Promise(
            (resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open("GET", "app/core/page/html/" + name + ".html?"+Math.random());
                xhr.send();
                xhr.onerror = (args) => {
                    reject(args);
                };
                xhr.onreadystatechange = () => {
                    if(xhr.readyState === XMLHttpRequest.DONE){
                        resolve(xhr.responseText);
                    }
                }
            }
        );
    }else{
        die(DieReason.OldBrowser);
    }
}

function subHtmlPage(name){
    if(Promise){
        return new Promise(
            (resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open("GET", "app/core/subPage/html/" + name + ".html?"+Math.random());
                xhr.send();
                xhr.onerror = (args) => {
                    reject(args);
                };
                xhr.onreadystatechange = () => {
                    if(xhr.readyState === XMLHttpRequest.DONE){
                        resolve(xhr.responseText);
                    }
                }
            }
        );
    }else{
        die(DieReason.OldBrowser);
    }
}

function ucFirst(str) {
	if (!str) return str;

	return str[0].toUpperCase() + str.slice(1);
}

function prettyInt(t){
	if(typeof t !== "number") t = parseInt(t);
	return new Intl.NumberFormat("ru-RU").format(t);
}

function subContent(data, params = {}){
    for(let from in params){
        if(params.hasOwnProperty(from)){
            let to = params[from];
            from = "{{" + from + "}}";
            data = data.split(from).join(to);
        }
    }

    getMainTag().innerHTML = data;
}

function content(data, params = {}){
    for(let from in params){
        if(params.hasOwnProperty(from)){
            let to = params[from];
            from = "{{" + from + "}}";
            data = data.split(from).join(to);
        }
    }

    e("#root").innerHTML = data;
}

function root(){
    return e("#root");
}

const T = {
	info(message){
		M.toast({html: message});
	},
	success(message){
		M.toast({html: message, classes: 'green'});
	},
	err(message){
		M.toast({html: message, classes: 'red'});
	}
};