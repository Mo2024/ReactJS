class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Hello
                        to="Ringo"
                        from="Paul"
                        bangs={3}
                        img="https://c.tenor.com/x8eBbUiF4RYAAAAM/yes-sweet.gif"
                    />
                    <Hello
                        to="Jack"
                        from="Wan"
                        bangs={3}
                        img="https://c.tenor.com/x8eBbUiF4RYAAAAM/yes-sweet.gif"
                    />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
