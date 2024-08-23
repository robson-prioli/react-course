const TemplateExpression = () => {

    const name = "Mateus";
    const data = {
        age: 31,
        job: "Programer",
    };

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Atua como: {data.job}</p>
            <small>{4+4}</small>
        </div>
    );

}

export default TemplateExpression;