import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',

    };
  }

  checkStructure = () => {
    const poem = this.state.value
    const poemArray = poem.split(/\n/)
    if (poemArray.length === 3){
      const firstLineLength = poemArray[0].trim().split(' ').length
      const secondLineLength = poemArray[1].trim().split(' ').length
      const thirdLineLength = poemArray[2].trim().split(' ').length
      if (firstLineLength === 5 && secondLineLength === 3 && thirdLineLength === 5){
        console.log('hello')
        return true
      }
    } else {
      return false
    }
  }

  handleChange = (event) => {
    console.log(event.target.value)
  this.setState({
    value: event.target.value,
  });
  this.checkStructure();

  }

  displayError(){
    console.log("hello", this.checkStructure())
    return this.checkStructure() ? null : <div
      id="poem-validation-error"
      style={{color: 'red'}}
    >
      This poem is not written in the right structure!
    </div>
  }

  render() {
    console.log('rendering')
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          onChange={this.handleChange}
          value={this.state.value}
        />
        {this.displayError()}
      </div>
    );
  }
}

export default PoemWriter;
