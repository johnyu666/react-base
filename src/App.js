import React from 'react'
import './App.css'
import Show from './Show'
import Add from './Add'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

export default class App extends React.Component {
  _addAlbum = album => {
    this.setState(prev => {
      let albums = prev.albums.slice(0)
      albums.push(album)
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
        <Show onDeleteHandler={id => this._deleteAlbum(id)} albums={this.state.albums} />
        <Add onAddHandler={album => this._addAlbum(album)} />
      </div>
    );
  }
}





