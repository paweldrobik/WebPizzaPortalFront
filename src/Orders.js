import React, {Component} from 'react'


export class Orders extends Component {
  state = {
    pizzamenu: [],
    orders:[],
    error: ""
  }


  OrderCompleated = (id) => {

      fetch('https://localhost:5001/api/order/' + id, {
        method: 'DELETE'
      }).then(() => {
         console.log('removed');
      }).
      catch(err => {
        console.error(err)
      });
  }


  componentDidMount() {
    fetch('https://localhost:5001/api/order/')
    .then(res => {
      if(res.ok){
        return res
      }
      throw Error("Coś poszło nie tak")
    })
    .then(res => res.json())
    .then((data) => {
      this.setState({ orders: data })
      .console(console.log)
    })
    .catch(console.log)
  }
  render(){
    return (
      <div>
        <h1 style={{paddingBlockEnd: "30px"}}>Recents orders:</h1>
        {this.state.orders.map((order) => (
        <div className="order">
          <div className="order-body">
            <h2 style={{marginBlockStart: "20px"}}>{order.Name}  <button onClick={() => this.OrderCompleated(order.Id)} style={{position: "right"},{margin: "30px"}}>Order Compleated</button></h2>
            <h3>{order.Quantity}</h3>
            <h3> </h3>
            <p></p>
          </div>
        </div>
      ))}
    </div>
    )
  }
}
