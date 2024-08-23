const Challenge = () => {

    const num1 = 5;
    const num2 = 5;

    const handleMyEvent = () => {
        console.log(num1 + num2);
    };

    return (
        <div>
            <div>
                <p>{num1} + {num2}</p>
                <button onClick={handleMyEvent}>Somar os numeros!</button>
            </div>
            <div>
                <p>{num1} + {num2}</p>
                <button onClick={() => console.log(num1 + num2)}>Somar os numeros!</button>
            </div>
        </div>
    );
};

export default Challenge;