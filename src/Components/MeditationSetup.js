import React from 'react'

class MeditationSetup extends React.Component{
    constructor(props) {
      super(props);
      this.state = {time: '5'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      console.log('You wish to meditate for: ' + this.state.time);

      event.preventDefault();
    }
    
    render(){
      return(
        <div>
          <h1>Welcome to some piece of mind</h1>
          <p>To begin please enter the length of time you wish to meditate for:</p>
          <form onSubmit={this.handleSubmit}>
            <select value={this.state.time} onChange={this.handleChange}>
              <option value="5">5 Minutes</option>
              <option value="10">10 Minutes</option>
              <option value="15">15 Minutes</option>
              <option value="20">20 Minutes</option>
            </select>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    }
  }

  //figure out how to dynamically create this object with the value from the Setup
  //also figure out how to show and hide react components when things happen
  class Timer extends React.Component{
      constructor(props){
          super(props);
          
          var now = new Date();
          var endDate = now.setMinutes(now.getMinutes() + props.time);
          var distance = endDate - now;

          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      }
      render(){
          return(
            <div class="container">
            <p id="timer">
                <span id="timer-days"></span>
                <span id="timer-hours"></span>
                <span id="timer-mins"></span>
                <span id="timer-secs"></span>
            </p>
        </div>
          )
      }
  }

  export default MeditationSetup;