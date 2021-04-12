console.log("App is runing");

// JSX - Javascript XML
const app = {
    title: 'Apka Kurs',
    subtitle: 'React Jest W Pytke',
    options: []
};



const onFormSubmit = (e) => {
    e.preventDefault(); /* zapobiega przeladowaniu strony przy formie */
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
  
};

const wipe = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};


const appRoot = document.getElementById("app");

const numbers = [55, 101, 1000];
let count = 0;

const render = () => {
    const template = (
        <div>
     
            <h1>{app.title}</h1>
            <p>{app.options.length}</p>
            <button onClick={wipe}>wipe</button>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i Do</button>
            {
                app.options.map((option)=>{                    
                    count++
                    return <p key={count}>{option}</p>
                })

              
            }
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
               
            </form>
        </div>       
    );
    ReactDOM.render(template, appRoot);
};
render();

