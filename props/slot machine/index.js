function getRandomProp() {
    const prop = ['🍒', '🍓', '🌹']
    return prop[Math.floor(Math.random() * prop.length)];
}
class App extends React.Component {
    render() {
        return (
            <div>
                <Machine
                    p1={getRandomProp()}
                    p2={getRandomProp()}
                    p3={getRandomProp()}
                />
                <Machine
                    p1={getRandomProp()}
                    p2={getRandomProp()}
                    p3={getRandomProp()}
                />
                <Machine
                    p1={getRandomProp()}
                    p2={getRandomProp()}
                    p3={getRandomProp()}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
