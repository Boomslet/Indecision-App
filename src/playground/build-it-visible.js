class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibilty = this.handleToggleVisibilty.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibilty () {
        this.setState((prevState) => {
            return  {
                visibility: !prevState.visibility
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibilty Toggle</h1>
                <button onClick={this.handleToggleVisibilty}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {
                    this.state.visibility && <p>Hey. These are some details you can now see!</p>
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let hidden = true;

// const toggleHidden = () => {
//     hidden = !hidden;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleHidden}>
//                 {hidden ? 'Show details': 'Hide details'}
//             </button>
//             {
//                 !hidden && <p>Hey. These are some details you can now see!</p>
//             }
//         </div>
//     );
    
//     ReactDOM.render(template, document.getElementById("app"));
// }

// render();