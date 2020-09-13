class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleShowDetails = this.toggleShowDetails.bind(this);
    this.state = {
      toggle: false,
    };
  }
  toggleShowDetails() {
    this.setState((prevState) => {
      return {
        toggle: !prevState.toggle,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleShowDetails}>
          {this.state.toggle ? 'Hide details' : 'Show Details'}
        </button>
        {this.state.toggle && (
          <div>
            <p>I did it bitch!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
