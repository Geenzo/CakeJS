import React, { Component } from 'react';

class InputForm extends Component {
  constructor(props) {
    super(props)
  }

  getfiles(props) {
    let cakes = document.getElementById('Cake_image').files[0];
    this.props.imgChange(cakes);
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Name of cake:
            <input
                id="Cake_title"
                type="text"
                onChange={this.props.titleChange}
              />
          </label>
          <br />
          <br />
          <label>
            Description of cake:
             <input
               id="Cake_desc"
               ref="newref"
               type="text"
               onChange={this.props.descChange}
             />
          </label>
          <br />
          <br />
          <label>
            Image of Cake:
            <input
              type="file"
              id="Cake_image"
              onChange={this.getfiles.bind(this)}
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
