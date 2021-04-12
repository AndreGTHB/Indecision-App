
    

const appRoot = document.getElementById("app");

class Toggle extends React.Component {
constructor(props){
    super(props);
    this.visibilityToggle = this.visibilityToggle.bind(this);
    this.state = {
        visibility: false
    };
}
visibilityToggle(){
    this.setState((prevVis)=>{
        return{
            visibility: !prevVis.visibility
        }
    })
}

render() {
    return (
      <div>
      <button onClick={this.visibilityToggle}>{this.state.visibility ? 'Hide' : 'Show'}</button>
        {this.state.visibility && (

            <h1>Count:</h1>
            
        )}
        
        </div>
    );
  }
};

ReactDOM.render(<Toggle/>, appRoot);