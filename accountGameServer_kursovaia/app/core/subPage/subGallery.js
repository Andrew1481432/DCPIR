subRender.addSubPage("subGallery",
    (data) => {
            subHtmlPage("subGallery")
                .then(
                    (response) => {
                        subRender.subCss("subGallery");
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
subRender.addSubCss("subGallery");