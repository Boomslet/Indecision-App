const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: [],
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const onMakeDecision = () => {
    const randNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randNum];
    alert(option);
};

const removeAll = () => {
    app.options = [];
    renderApp();
};

const appRoot = document.getElementById("app");

const numbers = [55, 101, 1000];

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove all</button>
            <ol>
                {
                    app.options.map((o) => <li key={o}>{o}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp();