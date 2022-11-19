function use(path, data = {}){
    if(typeof data === 'function'){
        data = {
            load: data
        }
    }
    const script = document.createElement("script");
    script.src = "app/core/" + path + ".js?"+Math.random();
    script.onload = data.load || ( () => {} );
    script.onerror = data.error || ( () => {} );
    document.head.appendChild(script);
}

use("functions", () => {
    use("API", () => {
        use("Render", () => {
            if(Promise && XMLHttpRequest && Intl && fetch){
                use("SubPageRender", () => {
                    Render.page("index");
                });
            }else{
                die(DieReason.OldBrowser);
            }
        });
    })
});