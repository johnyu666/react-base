import React from 'react'
import './Add.css'

let max=0
export default class Add extends React.Component {
    constructor(props) {
      super(props)
      this.name = React.createRef()
      this.price = React.createRef()
    }
    _fn = (event) => {
      event.preventDefault()
      let name = this.name.current.value
      let price =Number.parseFloat(this.price.current.value)
      this.props.onAddHandler({ id: ++max, name, price })
    }
    render() {
      return (
        <div className={"add"}>
          <form>
            <input type="text" name="name" ref={this.name} />
            <input type="number" min="0" name="price" ref={this.price} />
            <button className="btn-lg btn-primary" onClick={event => this._fn(event)}>add</button>
          </form>
        </div>
      )
    }
  }