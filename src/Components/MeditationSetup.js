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
            <div className="jumbotron">
                <h1>Welcome to some piece of mind</h1>
                <p>To begin please enter the length of time you wish to meditate for:</p>
                <div className="row">
                <select className="col-8 form-control" value={this.props.minutes} onChange={this.updateTime}>
                    <option value="5">5 Minutes</option>
                    <option value="10">10 Minutes</option>
                    <option value="15">15 Minutes</option>
                    <option value="20">20 Minutes</option>
                    <option value="25">25 Minutes</option>
                    <option value="30">30 Minutes</option>
                    <option value="35">35 Minutes</option>
                    <option value="40">40 Minutes</option>
                    <option value="45">45 Minutes</option>
                    <option value="50">50 Minutes</option>
                    <option value="55">55 Minutes</option>
                    <option value="60">1 Hour</option>
                    </select>
                    <button className="col-4 btn btn-primary" onClick={this.handleClick}>Start</button>
                </div>
            {/* <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button class="dropdown-item" type="button">Action</button>
                    <button class="dropdown-item" type="button">Another action</button>
                    <button class="dropdown-item" type="button">Something else here</button>
                </div>
            </div> */}
          </div>
        )
    }
}

  export default MeditationSetup;