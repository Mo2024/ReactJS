class Machine extends React.Component {
    render() {
        let props = this.props;
        let result;
        const winner = (props.p1 === props.p2) && (props.p2 === props.p3);
        const styles = { fontSize: '50px', backgroundColor: 'purple' };
        return (
            <div className="Machine">
                <h1 style={styles}>{props.p1} {props.p2} {props.p3}</h1>
                <p className={winner ? 'win' : 'lose'}>
                    {winner ? 'You won!' : 'You lost! Hehe L + ratio'}
                </p>
            </div>
        );
    }
}