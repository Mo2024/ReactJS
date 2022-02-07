class App extends React.Component {
    render() {
        return (
            <div>
                <Friend
                    name='Mike'
                    hobbies={['Pianos', 'Singing', 'Dancing']}
                />
                <Friend
                    name='Ali'
                    hobbies={['Pianos', 'Singing', 'Dancing']}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
