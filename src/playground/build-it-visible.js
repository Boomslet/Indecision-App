let hidden = true;

const toggleHidden = () => {
    hidden = !hidden;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleHidden}>
                {hidden ? 'Show details': 'Hide details'}
            </button>
            {
                !hidden && <p>Hey. These are some details you can now see!</p>
            }
        </div>
    );
    
    ReactDOM.render(template, document.getElementById("app"));
}

render();