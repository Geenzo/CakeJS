import React, { Component } from 'react';

class InputForm extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
            Name of cake:
            <input id="Cake_title" type="text" />
          </label>
          <br />
          <br />
          <label>
            Description of cake:
             <input id="Cake_desc" type="text"/>
          </label>
          <br />
          <br />
          <label>
            Image of Cake:
            <input
              type="file"
              id="Cake_image"
              ref={input => {
                this.fileInput = input;
              }}
            />
          </label>
          <br />
          <br />
          <button type="button" value="Submit" className="AddButton" onClick={this.props.captureFields} >Submit </button>
        </form>
      </div>
    );
  }
}

export default InputForm
