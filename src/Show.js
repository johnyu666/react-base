import React from 'react'
import './Show.css'
export default class Show extends React.Component {
    _deleteAlbum = id => {
      this.props.onDeleteHandler(id)
    }
    render() {
      return (
        <div className={"show"}>
          <table className="table">
            <caption><h2>唱片统计表</h2></caption>
            <thead>
              <tr>
                <th>id</th><th>名称</th><th>价格</th><th>删除</th>
              </tr>
  
            </thead>
            <tbody>
              {this.props.albums.map(album => {
                return (<tr key={album.id}>
                  <td>{album.id}</td>
                  <td>{album.name}</td>
                  <td>{album.price}</td>
                  <td><button className="btn btn-info" onClick={() => this._deleteAlbum(album.id)}>test</button></td>
                </tr>)
              })}
            </tbody>
          </table>
          <div>
            总计：{this.props.albums.reduce((prev,album)=>prev+album.price,0)}
          </div>
        </div>
      )
    }
  }
  