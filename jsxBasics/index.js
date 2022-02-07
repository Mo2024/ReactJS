function getMood() {
    const moods = ['Angry', 'Hungry', 'Sad', 'Silly'];
    return moods[Math.floor(Math.random() * moods.length)];
}

class JsxDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>My current mood is: {getMood()}</h1>
            </div>
        );
    }
}

ReactDOM.render(<JsxDemo />, document.getElementById('root'))