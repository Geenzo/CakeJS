import React, { Component } from 'react';

class EditCakes extends Component {
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
    let capturedImage = document.getElementById('Cake_image').files[0]

    if(capturedtitle && capturedDesc && capturedImage) {
    let reader = new FileReader();

    reader.readAsDataURL(capturedImage)

    reader.onloadend = () => {
      let capturedFields = {
        title: capturedtitle,
        desc: capturedDesc,
        image: [reader.result]
      }

      this.props.cb(capturedFields, this.props.currentCake)

      this.setState({
        showfields: false,
        errorfield: false
      })
    }
    } else {
      this.setState({
        errorfield: true
      })
    }
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.onClick}>Edit Cake</button>

        {this.state.showfields ? <Inputform cb={this.props.cb} captureFields={this.captureFields}/> : null}
        {this.state.errorfield ? <h3 className="ErrorField">Please fill in all fields to continue</h3> : null}
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
          <button type="button" value="Submit" className="EditButton" onClick={props.captureFields}>Submit</button>
        </form>
      </div>
    );
}

export default EditCakes;
