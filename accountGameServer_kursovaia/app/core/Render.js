const Render = {

	cachedPages: [],

	page(name, data){
		if(!Render.cachedPages[name]){
			use("page/" + name,
				{
					load: () => {
						if(!Render.cachedPages[name]){
							console.error("Page " + name + " is broken");
							throw new Error("Произошла ошибка");
						}else{
							Render.cachedPages[name](data);
						}
					},
					error: () => {
						console.error("Undefined page " + name);
						throw new Error("Произошла ошибка");
					}
				}
			);
		}else{
			Render.cachedPages[name](data);
		}
	},

	addPage(name, pr){
		Render.cachedPages[name] = pr;
	}


};