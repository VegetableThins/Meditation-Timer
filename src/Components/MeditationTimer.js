import React from 'react';
import Countdown from 'react-countdown-now'

class MeditationTimer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            completed: false,
        };
        this.preCancel = this.preCancel.bind(this);
    }

    preCancel(e){
        this.props.handleCancel(e);
    }

    render() {
        const renderer = ({ hours, minutes, seconds, completed }) => {
            if (completed) {
                // Render a completed state
                return (
                    <div className="jumbotron">
                        <h1>Meditation Completed!</h1>
                        <button className="btn btn-success" onClick={this.preCancel}>Finish</button>
                    </div>
                    );
            } else {
                // Render a countdown
                return (
                    <div className="jumbotron">
                        <h1>Time Remaining</h1>
                        <h3>{hours}:{minutes}:{seconds}</h3>
                        <button className="btn btn-warning" onClick={this.preCancel}>Cancel</button>
                    </div>
                );
            }
        };
        return (
            <div>
                <Countdown className="jumbotron" date={Date.now() + this.props.medTime} renderer={renderer} />
            </div>
      )
    }
}

export default MeditationTimer; 