class Friend extends React.Component {
    static defaultProps = {
        from: 'Anonymous',
        bangs: 1
    }
    render() {
        const { name, hobbies } = this.props;

        return (
            <div>
                <p>{name}</p>
                <ul>
                    {hobbies.map(h => <li>{h}</li>)}
                </ul>
            </div>
        )
    }
}