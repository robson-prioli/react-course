const Events = () => {

    const handleMyEvent = (e) => {
        console.log('evento?')
    };

    const renderSomething = (x) => {

        if(x){
            return <h1>Renderizar isso!</h1>;
        } else {
            return <h1>Renderizar isso também!</h1>;
        }

    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Click aqui!</button>
            </div>

            <div>
                <button onClick={() =>console.log('clickou')}>Click aqui também!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );

};

export default Events;