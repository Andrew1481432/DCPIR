subRender.addSubPage("subBlog",
    (data) => {
            subHtmlPage("subBlog")
                .then(
                    (response) => {
                        subRender.subCss("subBlog");
                        subContent(
                            response, {
                            }
                        );
                    })
                .catch(
                    (e) => {
                        console.error(e);
                        throw new Error("Произошла ошибка");
                    }
                );
    }
);
subRender.addSubCss("subBlog");