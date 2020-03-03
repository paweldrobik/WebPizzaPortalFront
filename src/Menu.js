import React, {Component} from 'react'





export class Menu extends Component {

  addOrder = (name2) => {
    
    let quantity = 1;
    var url = 'https://localhost:5001/api/order/';
       
    fetch(url, {
      method:'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({Name: name2, Quantity: 1, Status: "Przyjete do realizacji"})
    })
        .then(resp => resp.json())
        .then(data => console.log(data))
  }

  state = {
    pizzamenu: [],
    order:[],
    error: ""
  }

  componentDidMount() {
    fetch('https://localhost:5001/api/pizzamenu/')
    .then(res => {
      if(res.ok){
        return res
      }
      throw Error("Coś poszło nie tak")
    })
    .then(res => res.json())
    .then((data) => {
      this.setState({ pizzamenu: data })
      .console(console.log)
    })
    .catch(console.log)
  }


  render(){
    return (
      <div>
        <h1>Pizza Menu</h1>
        {this.state.pizzamenu.map((pizza) => (
        <div className="pizza">
          <div className="pizza-body">
            <h3>{pizza.Name} <button onClick={() => this.addOrder(pizza.Name)} style={{position: "right"},{margin: "30px"}}>Order Now</button></h3>
            <h5>{pizza.Ing1} {pizza.Ing2} {pizza.Ing3} Price: {pizza.Price}</h5>
            <p>{pizza.Spicy}</p>
            <p></p>
          </div>
        </div>
      ))}
    </div>
    )
  }

}