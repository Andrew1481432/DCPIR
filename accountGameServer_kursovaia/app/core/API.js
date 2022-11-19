const API = {

	token: localStorage.getItem("acc_token") || "",

	reset(reason = "No reason provided"){
		API.token = "";
		localStorage.clear();
		window.location = window.location;
	}

	// NOOP
	// server logic

};
