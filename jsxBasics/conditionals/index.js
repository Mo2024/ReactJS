function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}


class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;
        if (num === 7) {
            msg =
                <div>
                    <h2>Congrats</h2>
                    <img src="https://c.tenor.com/x8eBbUiF4RYAAAAM/yes-sweet.gif" />
                </div>
        } else {
            msg =
                <div>
                    <h2>Hard luck</h2>
                </div>
        }
        return (
            <div>
                <h1>Your number is {num}</h1>
                <p>{num === 7 ? 'Congrats' : 'Hehe bad luck'}</p>
                {/* {num === 7 && <img src="https://c.tenor.com/x8eBbUiF4RYAAAAM/yes-sweet.gif" />} */}
                {msg}
            </div >

        );
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'))