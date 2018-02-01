import React, { Component } from 'react';
import InputForm from './inputform';

class AddCakes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showfields: false,
      errorfield: false,
      caketitle: '',
      cakedesc: '',
      cakeimage: ''
    }
  }

  onClick = () => {
    this.setState({
      showfields: true
    })
  }

  handleTitleFieldChange = (e) => {
    this.setState({
      caketitle: e.target.value
    })
  }

  handleDescriptionFieldChange = (e) => {
    this.setState({
      cakedesc: e.target.value
    })
  }
  handleImageFieldChange = (e) => {
    this.setState({
      cakeimage: e
    })
  }

  captureFields = (formFields) => {

    if(this.state.caketitle && this.state.cakedesc && this.state.cakeimage) {
    let reader = new FileReader();
    reader.readAsDataURL(this.state.cakeimage)

    reader.onloadend = () => {
      let capturedFields = {
        title: this.state.caketitle,
        desc: this.state.cakedesc,
        image: [reader.result]
      }

      this.props.cb(capturedFields)

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
      <div className="Header">
        <h3>Click to add your own Cake</h3>

        <div>
          <button type="button" onClick={this.onClick}>Add Cake</button>

          {this.state.showfields ? <InputForm cb={this.props.cb} captureFields={this.captureFields} titleChange={this.handleTitleFieldChange} descChange={this.handleDescriptionFieldChange} imgChange={this.handleImageFieldChange}/> : null}
          {this.state.errorfield ? <h3 className="ErrorField">Please fill in all fields to continue</h3> : null}
        </div>
      </div>
    );
  }
}

export default AddCakes;
