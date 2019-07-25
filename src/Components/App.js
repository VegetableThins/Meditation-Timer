import React from 'react';
import './App.css';
import MeditationSetup from './MeditationSetup.js'
import MeditationTimer from './MeditationTimer.js'
import Countdown from 'react-countdown-now'
import PropTypes from 'prop-types'

// Fix displays on mobile and style
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      minutes: "5",
      medTime: 0,
      isMeditating: false,
    };

    this.changeMinutes = this.changeMinutes.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.startTimer = this.startTimer.bind(this);
    
  }
  
  changeMinutes(event){
    this.setState({
        minutes: event,
    });
    console.log(this.state.minutes);
  }
  
  handleCancel(e){
    this.setState({
      isMeditating: false,
    })
  }

  startTimer(event) {
    this.setState({isMeditating: !this.state.isMeditating});
      this.setState({
          medTime: (parseInt(this.state.minutes, 10) * 1000 * 60),
      });
    }
  render(){
    if(!this.state.isMeditating){
      return(
        <div className="container">
          <MeditationSetup changeMinutes={this.changeMinutes} startTimer={this.startTimer}></MeditationSetup>
        </div>
      );
    }else{
      return(
        <div className="container">
          {/* Setup a wait feature before starting to meditate to tell them to get comfortable etc. */}
          <MeditationTimer className="jumbotron" date={this.state.medTime} handleCancel={this.handleCancel} medTime={this.state.medTime}/>
          
        </div>
      )
    }
  }
}

export default App;
