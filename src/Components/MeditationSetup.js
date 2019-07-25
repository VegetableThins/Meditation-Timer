import React from 'react'

class MeditationSetup extends React.Component{
    constructor(props){
        super(props);

        this.updateTime = this.updateTime.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    updateTime(e) {
        this.props.changeMinutes(e.target.value);
        console.log("minutes updated to: " + e.target.value);
    }

    handleClick(e){
        this.props.startTimer();
    }

    render(){
        return(
            <div>
                <h1>Welcome to some piece of mind</h1>
                <p>To begin please enter the length of time you wish to meditate for:</p>
                <select value={this.props.minutes} onChange={this.updateTime}>
                    <option value="5">5 Minutes</option>
                    <option value="10">10 Minutes</option>
                    <option value="15">15 Minutes</option>
                    <option value="20">20 Minutes</option>
            </select>
            <button onClick={this.handleClick}>Start</button>
          </div>
        )
    }
}

  export default MeditationSetup;