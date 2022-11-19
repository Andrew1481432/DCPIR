Render.addPage("index",
	(data) => {
		if(!API.token){
			html("index")
				.then(
					(response) => {

						content(
							response,
							{
							}
						);
						subRender.subPage('subAuth');
						M.updateTextFields();
					})
				.catch(
					(e) => {
						console.error(e);
						throw new Error("Произошла ошибка");
					}
				);
		}else{
			Render.page("account");
		}
	}
);

function logIn(){
	const nickname = e("#login_nickname").value.toLowerCase();
	const password = e("#login_password").value.trim();

	if(nickname.length === 0){
		T.err("Укажите никнейм");
		return;
	}
	if(nickname.length < 3){
		T.err("Указанный никнейм слишком короткий");
		return;
	}
	if(nickname.length > 16){
		T.err("Указанный никнейм слишком длинный");
		return;
	}
	if(password.length === 0){
		T.err("Укажите пароль");
		return;
	}
	if(password.length < 3){
		T.err("Указанный пароль слишком короткий");
		return;
	}
	if(password.length > 32){
		T.err("Указанный пароль слишком длинный");
		return;
	}


	if(nickname == "admin" && password == "admin") {
		T.success("Вход ;)");
		Render.page("account");
		API.token = nickname;
		localStorage.setItem("acc_token", API.token);
	} else {
		T.err("Неправильные данные для входа!");
		T.info("Используйте для логина и пароля: admin");
	}
}

function logOut(){
	API.token = null;
	localStorage.removeItem("acc_token");
	Render.page("index");
}