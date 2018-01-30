import React, { Component } from 'react';

class AddCakes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showfields: false
    }
  }

  onClick = () => {
    this.setState({
      showfields: true
    })
  }

  captureFields = (formFields) => {

    let capturedtitle = document.getElementById('Cake_title').value
    let capturedDesc = document.getElementById('Cake_desc').value
    let capturedImage = document.getElementById('Cake_image').value

    let capturedFields = {
      title: capturedtitle,
      desc: capturedDesc,
      image: capturedImage
    }

    this.props.cb(capturedFields)

    this.setState({
      showfields: false
    })
  }

  render() {
    return (
      <div className="Header">
        <h3>Click to add your own Cake</h3>

        <div>
          <button type="button" onClick={this.onClick}>Add Cake</button>

          {this.state.showfields ? <Inputform cb={this.props.cb} captureFields={this.captureFields}/> : null}
        </div>
      </div>
    );
  }
}

const Inputform = (props) => {
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
          <input type="button" value="Submit" onClick={props.captureFields}/>
        </form>
      </div>
    );
}

export default AddCakes;
