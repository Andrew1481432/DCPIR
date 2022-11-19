const subRender = {

	cachedSubPages: [],
	cachedSubStyle: [],

	subPage(name, data){
		if(!subRender.cachedSubPages[name]){
			use("subPage/" + name,
				{
					load: () => {
						if(!subRender.cachedSubPages[name]){
							console.error("sub Page " + name + " is broken");
							throw new Error("Произошла ошибка");
						}else{
							if(subRender.nameSel !== "" && subRender.cachedSubStyle[subRender.nameSel]) {
								subRender.cachedSubStyle[subRender.nameSel].clear();
							}
							subRender.cachedSubPages[name](data);
							this.nameSel = name;
						}

					},
					error: () => {
						console.error("Undefined sub page " + name);
						throw new Error("Произошла ошибка");
					}
				}
			);
		}else{
			if(subRender.nameSel !== "" && subRender.cachedSubStyle[subRender.nameSel]) {
				subRender.cachedSubStyle[subRender.nameSel].clear();
			}
			this.nameSel = name;
			subRender.cachedSubPages[name](data);
		}
	},

	nameSel: "",

	addSubPage(name, pr){
		subRender.cachedSubPages[name] = pr;
	},

	subCss(name) {
		if (!subRender.cachedSubPages[name]) {
			throw new Error("Произошла ошибка");
		} else {
			subRender.cachedSubStyle[name].add(name);

		}
	},

	WorkerCss: {
		el: null,

		add(name){
			let dir = "app/core/subPage/css/" + name + ".css?"+Math.random();
			if(!doesFileExist(dir)) {
				console.error("Undefined sub css " + name);
				throw new Error("Произошла ошибка");
			}
			let link = document.createElement('link');
			link.id = name+"css";
			link.rel = 'stylesheet';
			link.href = dir;
			document.head.appendChild(link);
			this.el = link;
		},

		clear() {
			if(this.el != null) {
				document.head.removeChild(this.el);
				this.el = null;
			}
		}
	},

	addSubCss(name) {
		this.cachedSubStyle[name] = this.WorkerCss;
	}

};