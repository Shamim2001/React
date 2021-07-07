const domContainer = document.querySelector("#root");

const Increment = () => {

    const [counter, setCount] = React.useState(0);
    return(
        <div>
            <h1 id="display">{ counter }</h1>
            <div>
                <button id="button" onClick={ () => setCount(counter +1) }>Increment +</button>
            </div>
        </div>
    );
};




ReactDOM.render(< Increment />, domContainer );

// 3 creament call 

ReactDOM.render(
    <div className="container">
        <Increment />
        <Increment />
        <Increment />
    </div>,
    domContainer
);




// let number = 0;

// const display = document.querySelector("#display");
// const button = document.querySelector("#button");


// button.addEventListener("click", () => {
//     number++;
//     display.textContent= number;
// });