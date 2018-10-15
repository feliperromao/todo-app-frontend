import React, { Component } from 'react'

export default class TodoList extends Component{
  constructor(props){
    super(props)
  }
  renderRows(){
    return (
      <tr>
        <td>Ok</td>
      </tr>
    )
  }
  render(){
    return(
      <table className="table">
        <thead>
          <tr>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          { this.renderRows() }
        </tbody>
      </table>
    )
  }

}