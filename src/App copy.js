import React from 'react'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

let max = 0
export default class App extends React.Component {
  _addAlbum = event => {
    event.preventDefault()
    let name = this.name.current.value
    let price = this.price.current.value
    // let albums=this.state.albums.slice(0)
    // albums.push({id:++max,name,price})
    // this.setState({albums:albums})

    this.setState(prev => {
      let albums = prev.albums.slice(0)
      albums.push({ id: ++max, name, price })
      return { albums }
    })
  }
  _deleteAlbum(id) {
    let albums = this.state.albums.slice(0)
    let index = albums.findIndex(a => a.id == id)
    albums.splice(index, 1)
    this.setState({ albums: albums })
  }
  constructor(props) {
    super(props)
    this.name = React.createRef()
    this.price = React.createRef()
    this.state = { albums: [] }
  }
  render() {
    return (
      <div className={"content"}>
        <div className={"show"}>
          <table className="table">
            <caption><h5>唱片统计表</h5></caption>
            <thead>
              <th>id</th><th>名称</th><th>价格</th><th>删除</th>
            </thead>
            <tbody>
              {this.state.albums.map(album => {
                return (<tr key={album.id}>
                  <td>{album.id}</td>
                  <td>{album.name}</td>
                  <td>{album.price}</td>
                  <td><button onClick={() => this._deleteAlbum(album.id)}>test</button></td>
                </tr>)
              })}
            </tbody>
          </table>
        </div>
        <div className={"add"}>
          <form>
            <input type="text" name="name" ref={this.name} />
            <input type="text" name="price" ref={this.price} />
            <button className="btn-md btn-info" onClick={event => this._addAlbum(event)}>add</button>
            <button className="btn-sm btn-warning" onClick={event => this._addAlbum(event)}>add</button>
            <button className="btn-sm btn-default" onClick={event => this._addAlbum(event)}>add</button>
          </form>
        </div>
      </div>
    );
  }
}

