subRender.addSubPage("subAbout",
    (data) => {
            subHtmlPage("subAbout")
                .then(
                    (response) => {
                        subRender.subCss("subAbout");
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
subRender.addSubCss("subAbout");