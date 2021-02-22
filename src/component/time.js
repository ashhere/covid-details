import React from 'react';


class Time extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleString()
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: new Date().toLocaleString()
      });
    }
    render() {
      return (<>
      <div className = "time">
        <h1>
          The time is {this.state.time}.
        </h1>
        </div>
        </>
      );
    }
  }

export default Time;