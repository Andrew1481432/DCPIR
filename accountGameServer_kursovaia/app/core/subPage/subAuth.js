subRender.addSubPage("subAuth",
    (data) => {
        subHtmlPage("subAuth")
            .then(
                (response) => {
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