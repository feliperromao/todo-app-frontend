import React,{ Component } from 'react'

import Grid from '../template/grid'

export default class TodoForm extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div role="form" className="todoForm">
        <Grid cols="12 9 10">
          <input id="description" className="form-control" placeholder="Adicione uma tarefa"></input>
        </Grid>
        <Grid cols="12 3 2">
          <button className="btn btn-primary"><i className="fa fa-plus"></i></button>
        </Grid>
      </div>
    )
  }
}