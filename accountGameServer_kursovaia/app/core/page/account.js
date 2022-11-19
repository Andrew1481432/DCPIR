Render.addPage("account",
	(data) => {
		html("account")
			.then(
				(html_response) => {
					let transactions = [];

					selfName = "admin".toLowerCase();
					selfCoins = prettyInt(1000000);

					for(let i = 0; i < 3; ++i){
						transactions[i] = {
							count: prettyInt(-1),
							nickname: 'admin 2',
							text: "Игроку " + 'admin 2'
						};
						transactions[i].count = (transactions[i].count[0] === "-" ? "" : "+") + transactions[i].count
					}

					content(
						html_response,
						{
							passPublicClass: "hide",

							name: selfName,
							lower_name: selfName,
							coins: selfCoins,
							isPayAllowedClass: "",
							isVKNotTiedClass: "hide",

							transactionsClass: transactions.length === 3 ? "" : "hide",
							transaction_0_count: transactions[0].count,
							transaction_0_nickname: (transactions[0].nickname || "").toLowerCase(),
							transaction_0_class: transactions[0].count[0] === "-" ? "red-text" : "green-text", // Да, гкод, но как-то пофиг)
							transaction_0_text: transactions[0].text,
							transaction_1_count: transactions[1].count,
							transaction_1_nickname: (transactions[1].nickname || "").toLowerCase(),
							transaction_1_class: transactions[1].count[0] === "-" ? "red-text" : "green-text",
							transaction_1_text: transactions[1].text,
							transaction_2_count: transactions[2].count,
							transaction_2_nickname: (transactions[2].nickname || "").toLowerCase(),
							transaction_2_class: transactions[2].count[0] === "-" ? "red-text" : "green-text",
							transaction_2_text: transactions[2].text,

							privilege_hub: ucFirst("own"),
							privilege_sw: ucFirst("own"),
							privilege_bw: ucFirst("own"),
							privilege_dr: ucFirst("own"),
							privilege_mb: ucFirst("own"),
							privilege_sb: ucFirst("own"),
							privilege_mm: ucFirst("own"),
							privilege_mw: ucFirst("own"),
						}
					);
					M.updateTextFields();
				})
			.catch(
				err => {
					console.error(err);
					throw new Error("Произошла ошибка");
				}
			);
	}
);

let selfName;
let selfCoins;

function sendMoneyForm(){
	const target_el = e("#pay_target");
	const target = target_el.value;
	const count_el = e("#pay_count");
	const count = count_el.value;

	if(target_el.length === 0){
		T.err("Укажите никнейм которому вы хотите перевести");
		return;
	}
	if(typeof count === 'number'){
		T.err("количество монет должно быть числом!");
		return;
	}
	if(target.toLowerCase() === selfName){
		T.err("Вы не можете перевести себе монеты!");
		return;
	}
	if(selfCoins < count){
		T.err("Не хватает монет для перевода!");
		return;
	}
	T.err("Перевод не может быть выполнен....");
}

function changePass(){
	T.err("Пароль не может быть изменен....");
}