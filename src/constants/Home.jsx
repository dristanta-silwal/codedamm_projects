import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ["navy", "orange", "blue", "green", "purple", "brown", "royalblue", "navy","burlywood", "chocolate", "crimson"],
            sampleMessage: "This is just a collection of projects created by Dristanta Silwal.",
            refresh: 0
        };
    }

    refresh() {
        let { refresh } = this.state;
        refresh++;
        this.setState({ refresh });
    }

    componentDidMount() {
        setInterval(this.refresh.bind(this), 1000);
    }

    render() {
        const { sampleMessage, colors } = this.state;

        const randomColor = () => {
            return colors[(Math.random() * colors.length) >> 0];
        };
        return (
            <div className='home'>
                {sampleMessage.split(" ").map(word => {
                    return <span style={{ color: randomColor() }}>{`${word}`}&nbsp;</span>
                })}
            </div>
        )
    }
}
export default Home