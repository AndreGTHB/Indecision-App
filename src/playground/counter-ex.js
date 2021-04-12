


class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.state = {
            count: 0
        };
    }
componentDidMount(){
  const stringCount = localStorage.getItem('count'); // bioerzemy zmienna o kluczu count z localstorage
  const count = parseInt(stringCount, 10); //parsujemy stringa do inta

  if(!isNaN(count)){
    this.setState(()=>({count: count})); // jesli jest liczba to ustaw nasz state na count: count

  }
}

  componentDidUpdate(prevProps, prevState){
    if (prevState.count !== this.state.count){ // bierze poprzedni state, jezeli nie jest taki jak obecny
      localStorage.setItem('count', this.state.count) // przypisuje go do klucza count w zmiennej localStorage
    }

  }



  handleAddOne() {
    this.setState((prevCount)=>{
        return{
            count: prevCount.count +1
        };
    });
  }
  handleMinusOne() {
    this.setState((prevCount)=>{
        return{
            count: prevCount.count -1
        };
    });
  }
  handleReset() {
    this.setState(()=>{
        return{
            count: 0
        }
    })
  }

  render() {
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0
};

ReactDOM.render(<Counter />, document.getElementById("app"));
