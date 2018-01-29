import React, { Component } from 'react';

const cakeURL = `https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json`

class CakeList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount(){
    fetch(cakeURL)
    .then(response => {
      if(!response.ok){
        throw Error(`Error retrieving cake list! --> Status Text:${response.statusText}`)
      }
      return response.json()
    })
    .then(responseBody => {

      let tester = []
      let result = []

      responseBody.forEach(el => {
        if( tester.indexOf(el.title) === -1) {
          tester.push(el.title)
          result.push(el)
        }
      })

      this.setState({
        cakes:result
      })
    })
    .catch(err => {
      console.error(err.message)
    })
  }

  filter(e){
    this.setState({filter: e.target.value})
  }

  render() {

    if(!this.state.cakes) return <h2>Loading...</h2>

    let cakes = this.state.cakes;

    if(this.state.filter){
      cakes = cakes.filter( cake =>
        cake.title.toLowerCase()
        .includes(this.state.filter.toLowerCase()))
    }

    return (
      <div className="Header">
        <h1>List of our Cakes</h1>

        <div>
          <input type="text"
          onChange={this.filter.bind(this)}/>
          {cakes.map(cake =>
            <Cakes key={cake.title} cake={cake}/>
          )}
        </div>
      </div>
    );
  }
}

const Cakes = (props) => {
    return (
      <div className="Cake">
        <h3>{props.cake.title}</h3>
        <p>{props.cake.desc}</p>
        <img src={props.cake.image} alt={props.cake.title} height="250vw"></img>
      </div>
    );
}

export default CakeList;
